import { Request, Response } from 'express';
import { leafService, FilterOptions } from '../services/leafService';

// @desc    Create a new leaf
// @route   POST /api/leaves
// @access  Private
export const createLeaf = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, tags, linkedLeafIds } = req.body;
    const userId = req.user!.id;

    const leaf = await leafService.createLeaf({
      title,
      content,
      tags: tags || [],
      linkedLeafIds,
      userId,
    });

    res.status(201).json({
      success: true,
      leaf,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating leaf',
    });
  }
};

// @desc    Get all leaves
// @route   GET /api/leaves
// @access  Private
export const getLeaves = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { tags, search, startDate, endDate } = req.query;

    const filter: FilterOptions = {};

    // Parse filters from query parameters
    if (tags) {
      filter.tags = Array.isArray(tags)
        ? tags.map((t) => t.toString())
        : [tags.toString()];
    }

    if (search) {
      filter.search = search.toString();
    }

    if (startDate) {
      filter.startDate = startDate.toString();
    }

    if (endDate) {
      filter.endDate = endDate.toString();
    }

    const leaves = await leafService.getLeaves(userId, filter);

    res.status(200).json({
      success: true,
      leaves,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching leaves',
    });
  }
};

// @desc    Get a leaf by ID
// @route   GET /api/leaves/:id
// @access  Private
export const getLeafById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const leafId = req.params.id;

    const leaf = await leafService.getLeafById(leafId, userId);

    res.status(200).json({
      success: true,
      leaf,
    });
  } catch (error: any) {
    if (error.message === 'Leaf not found') {
      res.status(404).json({
        success: false,
        message: 'Leaf not found',
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching leaf',
    });
  }
};

// @desc    Update a leaf
// @route   PUT /api/leaves/:id
// @access  Private
export const updateLeaf = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const leafId = req.params.id;
    const { title, content, tags, linkedLeafIds } = req.body;

    const leaf = await leafService.updateLeaf(leafId, userId, {
      title,
      content,
      tags,
      linkedLeafIds,
    });

    res.status(200).json({
      success: true,
      leaf,
    });
  } catch (error: any) {
    if (error.message === 'Leaf not found') {
      res.status(404).json({
        success: false,
        message: 'Leaf not found',
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Error updating leaf',
    });
  }
};

// @desc    Delete a leaf
// @route   DELETE /api/leaves/:id
// @access  Private
export const deleteLeaf = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const leafId = req.params.id;

    await leafService.deleteLeaf(leafId, userId);

    res.status(200).json({
      success: true,
      message: 'Leaf deleted successfully',
    });
  } catch (error: any) {
    if (error.message === 'Leaf not found') {
      res.status(404).json({
        success: false,
        message: 'Leaf not found',
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting leaf',
    });
  }
}; 