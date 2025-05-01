'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import leafService, { GraphData, Analytics } from '@/services/apiService';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Import ForceGraph dynamically to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-96">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-emerald-500 animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl">🍃</span>
        </div>
      </div>
    </div>
  ),
});

interface GraphNode {
  id: string;
  title: string;
  tags: string[];
}

interface GraphLink {
  source: string;
  target: string;
}

export default function GraphPage() {
  const [graphData, setGraphData] = useState<{ nodes: GraphNode[]; links: GraphLink[] } | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const router = useRouter();
  const graphRef = useRef<any>(null);

  useEffect(() => {
    // Trigger animation after mounting
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [graphData, analyticsData] = await Promise.all([
          leafService.getGraph(),
          leafService.getAnalytics().catch(() => null)
        ]);
        
        // Transform the data for the graph visualization
        const formattedGraphData = {
          nodes: graphData.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            tags: node.tags,
          })),
          links: graphData.edges.map((edge) => ({
            source: edge.sourceLeafId,
            target: edge.targetLeafId,
          })),
        };
        
        setGraphData(formattedGraphData);
        if (analyticsData) {
          setAnalytics(analyticsData);
        }
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch graph data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNodeClick = (node: GraphNode) => {
    setSelectedNode(node);
  };

  const handleNodeDoubleClick = (node: GraphNode) => {
    router.push(`/leaf/${node.id}`);
  };

  const handleZoomToFit = () => {
    if (graphRef.current) {
      graphRef.current.zoomToFit(400);
    }
  };

  const handleBgClick = () => {
    setSelectedNode(null);
  };

  return (
    <ProtectedRoute>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-500 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-8 shadow-xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyIDB2NmMwIDYgNiA2IDYgMHYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bS0xMi0xMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTEyLTI0djZjMCA2IDYgNiA2IDB2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Knowledge Graph</h1>
                  <p className="text-emerald-100">
                    {graphData ? `Visualize your collection of ${graphData.nodes.length} leaves and their connections` : 'Loading your knowledge connections...'}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleZoomToFit}
                    className="bg-white/90 text-emerald-700 hover:bg-white py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:shadow-emerald-900/20 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Zoom to Fit
                  </button>
                  <Link
                    href="/dashboard"
                    className="bg-white/20 text-white hover:bg-white/30 py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:shadow-emerald-900/20 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>

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

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-emerald-500 animate-spin"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl">🍃</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your knowledge graph...</p>
              </div>
            ) : graphData && graphData.nodes.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg text-center max-w-2xl mx-auto animate-fade-in">
                <div className="inline-block p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
                  <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your knowledge graph is empty</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                  Create some leaves and connect them to visualize your knowledge network.
                </p>
                <Link 
                  href="/leaf/new" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-emerald-500/30 hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create your first leaf
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Main Graph Section */}
                <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex space-x-2 mr-3">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Graph View</span>
                      </div>
                      {selectedNode && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-medium text-emerald-600 dark:text-emerald-400">{selectedNode.title}</span> selected
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-[70vh] relative bg-gray-50 dark:bg-gray-900/50 z-10">
                    {graphData && (
                      <>
                        <ForceGraph2D
                          ref={graphRef}
                          graphData={graphData}
                          nodeLabel={(node: any) => node.title}
                          nodeColor={(node: any) => selectedNode && node.id === selectedNode.id ? '#7c3aed' : '#10b981'}
                          nodeRelSize={6}
                          linkColor={() => 'rgba(100, 116, 139, 0.2)'}
                          linkWidth={(link: any) => 1.5}
                          onNodeClick={handleNodeClick}
                          onNodeDblClick={handleNodeDoubleClick}
                          linkDirectionalArrowLength={3.5}
                          linkDirectionalArrowRelPos={1}
                          linkCurvature={0.25}
                          cooldownTicks={100}
                          onEngineStop={() => handleZoomToFit()}
                          backgroundColor="rgba(0,0,0,0)"
                          onBackgroundClick={handleBgClick}
                          linkDirectionalParticles={2}
                          linkDirectionalParticleSpeed={0.005}
                        />
                        <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-3 rounded-lg shadow text-xs text-gray-500 dark:text-gray-400 z-20">
                          <div className="mb-1">• Click node to select</div>
                          <div className="mb-1">• Double-click to view/edit</div>
                          <div>• Drag nodes to rearrange</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Selected Node Info */}
                  {selectedNode ? (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                      <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
                          <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Leaf Info
                        </h3>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                          {selectedNode.title}
                        </h4>
                        
                        {selectedNode.tags.length > 0 && (
                          <div className="mt-4">
                            <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Tags:</h5>
                            <div className="flex flex-wrap gap-2">
                              {selectedNode.tags.map(tag => (
                                <span key={tag} className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <Link 
                            href={`/leaf/${selectedNode.id}`} 
                            className="bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Leaf
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Graph Stats */
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                      <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
                          <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Graph Stats
                        </h3>
                      </div>
                      <div className="p-6">
                        {graphData && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-400">Total Leaves:</span>
                              <span className="font-semibold text-gray-800 dark:text-white">{graphData.nodes.length}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-400">Total Connections:</span>
                              <span className="font-semibold text-gray-800 dark:text-white">{graphData.links.length}</span>
                            </div>
                            
                            {analytics && analytics.mostLinkedLeaves && analytics.mostLinkedLeaves.length > 0 && (
                              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Most Connected Leaves:</h4>
                                <div className="space-y-2">
                                  {analytics.mostLinkedLeaves.slice(0, 3).map(leaf => (
                                    <div key={leaf.id} className="flex justify-between items-center">
                                      <span className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-[70%]">{leaf.title}</span>
                                      <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                                        {leaf.linkCount} links
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Tips Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Graph Tips
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">The size of each node represents its importance in your knowledge network</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Create more connections between leaves to build a richer knowledge graph</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Zoom and pan to explore different areas of your knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 