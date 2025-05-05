'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import leafService, { Leaf, Collection } from '@/services/apiService';

// Define collection types
interface SmartCollection {
  id: string;
  name: string;
  tags?: string[];
  searchTerm?: string;
  createdAfter?: string;
  createdBefore?: string;
}

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [loading, setLoading] = useState(true);
  const [collectionLoading, setCollectionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newCollection, setNewCollection] = useState<Collection>({
    id: '',
    name: '',
    tags: [],
    searchTerm: null,
    createdAfter: null,
    createdBefore: null,
    createdAt: '',
    updatedAt: '',
    userId: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [animateItems, setAnimateItems] = useState(false);
  
  const router = useRouter();

  // Load collections from backend on initial load
  useEffect(() => {
    fetchAllCollections();
  }, []);

  // Migrate collections from localStorage to backend
  const migrateLocalCollections = async () => {
    try {
      // Check if we have localStorage collections
      const savedCollections = localStorage.getItem('smartCollections');
      if (!savedCollections) return;
      
      // Try to parse the saved collections
      let localCollections;
      try {
        localCollections = JSON.parse(savedCollections);
        if (!Array.isArray(localCollections) || localCollections.length === 0) {
          localStorage.removeItem('smartCollections');
          return;
        }
      } catch (parseError) {
        console.error('Failed to parse local collections:', parseError);
        localStorage.removeItem('smartCollections');
        return;
      }
      
      // Process each collection and add to backend
      for (const collection of localCollections) {
        try {
          const collectionData = {
            name: collection.name,
            tags: collection.tags || (collection.criteria && collection.criteria.tags) || [],
            searchTerm: collection.searchTerm || (collection.criteria && collection.criteria.search) || undefined,
            createdAfter: collection.createdAfter || (collection.criteria && collection.criteria.createdAfter) || undefined,
            createdBefore: collection.createdBefore || (collection.criteria && collection.criteria.createdBefore) || undefined
          };
          
          await leafService.createCollection(collectionData);
        } catch (err) {
          console.error('Failed to migrate collection:', collection.name, err);
        }
      }
      
      // After migration, remove from localStorage
      localStorage.removeItem('smartCollections');
      
      // Reload collections from backend
      await fetchAllCollections();
    } catch (err) {
      console.error('Error during migration:', err);
    }
  };

  // Fetch all collections from backend
  const fetchAllCollections = async () => {
    try {
      setLoading(true);
      const collections = await leafService.getCollections();
      setCollections(collections);
      
      // If we have server collections but might have local ones, try to migrate
      if (collections.length === 0) {
        await migrateLocalCollections();
      }
      
      fetchAllLeaves();
    } catch (err: any) {
      console.error('Failed to load collections:', err);
      setError(err.response?.data?.message || 'Failed to load collections');
      setCollections([]);
      
      // If we failed to get server collections, check if we have local ones to migrate
      await migrateLocalCollections();
      
      fetchAllLeaves();
    }
  };

  // Fetch all leaves to extract tags
  const fetchAllLeaves = async () => {
    try {
      setLoading(true);
      const data = await leafService.getLeaves();
      
      // Extract all unique tags
      const tags = data.reduce((acc: string[], leaf) => {
        leaf.tags.forEach(tag => {
          if (!acc.includes(tag)) acc.push(tag);
        });
        return acc;
      }, []);
      
      setAllTags(tags);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch leaves');
    } finally {
      setLoading(false);
      setTimeout(() => setAnimateItems(true), 100);
    }
  };

  // Generate a simple unique ID
  const generateId = () => {
    return 'id-' + Math.random().toString(36).substring(2, 9);
  };

  // Update the handle create collection
  const handleCreateCollection = async () => {
    if (!newCollection.name.trim()) {
      setError('Collection name is required');
      return;
    }

    try {
      setLoading(true);
      const collectionData = {
        name: newCollection.name,
        tags: selectedTags.length > 0 ? selectedTags : undefined,
        searchTerm: newCollection.searchTerm || undefined,
        createdAfter: newCollection.createdAfter || undefined,
        createdBefore: newCollection.createdBefore || undefined
      };

      const createdCollection = await leafService.createCollection(collectionData);
      
      setCollections([...collections, createdCollection]);
      setNewCollection({
        id: '',
        name: '',
        tags: [],
        searchTerm: null,
        createdAfter: null,
        createdBefore: null,
        createdAt: '',
        updatedAt: '',
        userId: ''
      });
      setSelectedTags([]);
      setIsCreating(false);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create collection');
    } finally {
      setLoading(false);
    }
  };

  // Update handle delete collection
  const handleDeleteCollection = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this collection?')) {
      try {
        await leafService.deleteCollection(id);
        setCollections(collections.filter(c => c.id !== id));
        if (selectedCollection && selectedCollection.id === id) {
          setSelectedCollection(null);
          setLeaves([]);
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to delete collection');
      }
    }
  };

  // Update the select collection function to handle backend format
  const handleSelectCollection = async (collection: any) => {
    try {
      setSelectedCollection(collection);
      setCollectionLoading(true);
      
      // Construct filter params from collection
      const filterParams = {
        ...(collection.tags?.length > 0 && { tags: collection.tags }),
        ...(collection.searchTerm && { search: collection.searchTerm }),
        ...(collection.createdAfter && { startDate: new Date(collection.createdAfter).toISOString() }),
        ...(collection.createdBefore && { endDate: new Date(collection.createdBefore).toISOString() })
      };
      
      const data = await leafService.getLeaves(filterParams);
      setLeaves(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch collection leaves');
    } finally {
      setCollectionLoading(false);
    }
  };

  // Handle tag selection for new collection
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Handle edit collection
  const handleEditCollection = (collection: Collection) => {
    setIsEditing(true);
    setIsCreating(false);
    setNewCollection({...collection});
    setSelectedTags(collection.tags || []);
  };

  // Handle update collection
  const handleUpdateCollection = async () => {
    if (!newCollection.name.trim()) {
      setError('Collection name is required');
      return;
    }

    try {
      setLoading(true);
      const collectionData = {
        name: newCollection.name,
        tags: selectedTags.length > 0 ? selectedTags : undefined,
        searchTerm: newCollection.searchTerm || undefined,
        createdAfter: newCollection.createdAfter || undefined,
        createdBefore: newCollection.createdBefore || undefined
      };

      const updatedCollection = await leafService.updateCollection(newCollection.id, collectionData);
      
      // Update collections array
      setCollections(collections.map(c => c.id === updatedCollection.id ? updatedCollection : c));
      
      // If this was the selected collection, update it
      if (selectedCollection && selectedCollection.id === updatedCollection.id) {
        setSelectedCollection(updatedCollection);
      }
      
      // Reset form
      setNewCollection({
        id: '',
        name: '',
        tags: [],
        searchTerm: null,
        createdAfter: null,
        createdBefore: null,
        createdAt: '',
        updatedAt: '',
        userId: ''
      });
      setSelectedTags([]);
      setIsEditing(false);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update collection');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-8 shadow-xl mb-8 transform transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyIDB2NmMwIDYgNiA2IDYgMHYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bS0xMi0xMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTEyLTI0djZjMCA2IDYgNiA2IDB2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Smart Collections</h1>
                <p className="text-emerald-100">
                  Organize your knowledge with dynamic collections
                </p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    setIsCreating(!isCreating);
                    setIsEditing(false);
                    if (isEditing) {
                      setNewCollection({
                        id: '',
                        name: '',
                        tags: [],
                        searchTerm: null,
                        createdAfter: null,
                        createdBefore: null,
                        createdAt: '',
                        updatedAt: '',
                        userId: ''
                      });
                      setSelectedTags([]);
                    }
                  }}
                  className="bg-white text-emerald-700 hover:bg-emerald-50 py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:scale-105 hover:shadow-emerald-900/20 flex items-center group"
                >
                  <span className="mr-2">{isCreating ? '✕' : '+'}</span>
                  <span>{isCreating ? 'Cancel' : 'New Collection'}</span>
                </button>
                <Link 
                  href="/dashboard" 
                  className="bg-white/20 text-white hover:bg-white/30 py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:shadow-emerald-900/20 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Dashboard
                </Link>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-fade-in">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            </div>
          )}

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Sidebar - Collections List */}
            <div className="md:col-span-1">
              {/* Collection Creation/Edit Form */}
              {(isCreating || isEditing) && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 animate-fade-in">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {isEditing ? 'Edit Collection' : 'Create New Collection'}
                  </h3>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Collection Name</label>
                    <input 
                      type="text"
                      value={newCollection.name}
                      onChange={(e) => setNewCollection({...newCollection, name: e.target.value})}
                      placeholder="My Collection"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Search Term (Optional)</label>
                    <input 
                      type="text"
                      value={newCollection.searchTerm || ''}
                      onChange={(e) => setNewCollection({
                        ...newCollection, 
                        searchTerm: e.target.value ? e.target.value : null
                      })}
                      placeholder="Search keywords"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Date Range (Optional)</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-600 dark:text-gray-400 text-xs mb-1">From</label>
                        <input 
                          type="date"
                          value={newCollection.createdAfter ? new Date(newCollection.createdAfter).toISOString().split('T')[0] : ''}
                          onChange={(e) => setNewCollection({
                            ...newCollection, 
                            createdAfter: e.target.value ? e.target.value : null
                          })}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 dark:text-gray-400 text-xs mb-1">To</label>
                        <input 
                          type="date"
                          value={newCollection.createdBefore ? new Date(newCollection.createdBefore).toISOString().split('T')[0] : ''}
                          onChange={(e) => setNewCollection({
                            ...newCollection, 
                            createdBefore: e.target.value ? e.target.value : null
                          })}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {allTags.length > 0 && (
                    <div className="mb-6">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Tags (Optional)</label>
                      <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2">
                        {allTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleTagToggle(tag)}
                            className={`${
                              selectedTags.includes(tag)
                                ? 'bg-emerald-600 text-white'
                                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                            } px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <button
                      onClick={isEditing ? handleUpdateCollection : handleCreateCollection}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {isEditing ? 'Update Collection' : 'Create Collection'}
                    </button>
                  </div>
                </div>
              )}
              
              {/* Collections List */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Collections</h3>
                </div>
                
                {loading ? (
                  <div className="p-6 flex justify-center">
                    <div className="w-8 h-8 border-t-2 border-b-2 border-emerald-500 rounded-full animate-spin"></div>
                  </div>
                ) : collections.length === 0 ? (
                  <div className="p-6 text-center">
                    <div className="inline-block p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                      <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">No collections yet</p>
                    <button 
                      onClick={() => setIsCreating(true)}
                      className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      Create your first collection
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100 dark:divide-gray-700 max-h-96 overflow-y-auto">
                    {collections.map((collection) => (
                      <div 
                        key={collection.id} 
                        className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                          selectedCollection?.id === collection.id ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''
                        }`}
                        onClick={() => handleSelectCollection(collection)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">{collection.name}</h4>
                            <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                              {collection.tags && collection.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {collection.tags.map(tag => (
                                    <span 
                                      key={tag} 
                                      className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-2 py-0.5 rounded-full text-xs"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {collection.searchTerm && (
                                <p>Search: "{collection.searchTerm}"</p>
                              )}
                              {(collection.createdAfter || collection.createdBefore) && (
                                <p>
                                  {collection.createdAfter && `From: ${new Date(collection.createdAfter).toLocaleDateString()}`}
                                  {collection.createdAfter && collection.createdBefore && ' - '}
                                  {collection.createdBefore && `To: ${new Date(collection.createdBefore).toLocaleDateString()}`}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditCollection(collection);
                              }}
                              className="text-gray-400 hover:text-emerald-500 transition-colors mr-2"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCollection(collection.id);
                              }}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Content - Collection Results */}
            <div className="md:col-span-2">
              {selectedCollection ? (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedCollection.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {leaves.length} {leaves.length === 1 ? 'leaf' : 'leaves'}
                      </div>
                      <button 
                        onClick={() => handleEditCollection(selectedCollection)}
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {collectionLoading ? (
                    <div className="p-12 flex justify-center">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-emerald-500 animate-spin"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl">🍃</span>
                        </div>
                      </div>
                    </div>
                  ) : leaves.length === 0 ? (
                    <div className="p-8 text-center">
                      <div className="inline-block p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                        <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">No leaves match this collection's criteria</p>
                      <Link 
                        href="/leaf/new"
                        className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300"
                      >
                        Create a new leaf
                      </Link>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100 dark:divide-gray-700 max-h-[calc(100vh-300px)] overflow-y-auto">
                      {leaves.map((leaf, index) => (
                        <div 
                          key={leaf.id}
                          className={`p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all ${
                            animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 50}ms`, transitionDuration: '300ms', transitionProperty: 'transform, opacity' }}
                        >
                          <Link href={`/leaf/${leaf.id}`} className="block group">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {leaf.title}
                            </h4>
                          </Link>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {leaf.tags.map(tag => (
                              <span 
                                key={tag}
                                className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                            {leaf.content.substring(0, 150)}...
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(leaf.createdAt).toLocaleDateString()}
                            </div>
                            <Link
                              href={`/leaf/${leaf.id}`}
                              className="text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:underline flex items-center"
                            >
                              View
                              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
                  <div className="inline-block p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
                    <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Smart Collections</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    Create collections based on tags, search terms, or dates. Your collections will automatically update as your knowledge base grows.
                  </p>
                  <button 
                    onClick={() => setIsCreating(true)}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-emerald-500/30 hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Collection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 