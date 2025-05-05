import { Request, Response } from 'express';
import { collectionService } from '../services/collectionService';

// @desc    Create a new collection
// @route   POST /api/collections
// @access  Private
export const createCollection = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { name, tags, searchTerm, createdAfter, createdBefore } = req.body;

    const collection = await collectionService.createCollection({
      name,
      tags,
      searchTerm,
      createdAfter,
      createdBefore,
      userId,
    });

    res.status(201).json({
      success: true,
      collection,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating collection',
    });
  }
};

// @desc    Get all user collections
// @route   GET /api/collections
// @access  Private
export const getCollections = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    
    const collections = await collectionService.getCollections(userId);
    
    res.status(200).json({
      success: true,
      collections,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching collections',
    });
  }
};

// @desc    Get a collection by ID
// @route   GET /api/collections/:id
// @access  Private
export const getCollectionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const collectionId = req.params.id;
    
    const collection = await collectionService.getCollectionById(collectionId, userId);
    
    res.status(200).json({
      success: true,
      collection,
    });
  } catch (error: any) {
    if (error.message === 'Collection not found') {
      res.status(404).json({
        success: false,
        message: 'Collection not found',
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message || 'Error fetching collection',
      });
    }
  }
};

// @desc    Update a collection
// @route   PUT /api/collections/:id
// @access  Private
export const updateCollection = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const collectionId = req.params.id;
    const { name, tags, searchTerm, createdAfter, createdBefore } = req.body;
    
    const collection = await collectionService.updateCollection(
      collectionId,
      userId,
      {
        name,
        tags,
        searchTerm,
        createdAfter,
        createdBefore,
      }
    );
    
    res.status(200).json({
      success: true,
      collection,
    });
  } catch (error: any) {
    if (error.message === 'Collection not found') {
      res.status(404).json({
        success: false,
        message: 'Collection not found',
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message || 'Error updating collection',
      });
    }
  }
};

// @desc    Delete a collection
// @route   DELETE /api/collections/:id
// @access  Private
export const deleteCollection = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const collectionId = req.params.id;
    
    await collectionService.deleteCollection(collectionId, userId);
    
    res.status(200).json({
      success: true,
      message: 'Collection deleted successfully',
    });
  } catch (error: any) {
    if (error.message === 'Collection not found') {
      res.status(404).json({
        success: false,
        message: 'Collection not found',
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message || 'Error deleting collection',
      });
    }
  }
}; 