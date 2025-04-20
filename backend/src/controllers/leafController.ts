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

// @desc    Link a leaf to other leaves
// @route   POST /api/leaves/:id/link
// @access  Private
export const linkLeaf = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const leafId = req.params.id;
    const { linkedLeafIds } = req.body;

    if (!Array.isArray(linkedLeafIds)) {
      res.status(400).json({
        success: false,
        message: 'linkedLeafIds must be an array',
      });
      return;
    }

    const links = await leafService.linkLeaf(leafId, userId, linkedLeafIds);

    res.status(200).json({
      success: true,
      message: 'Leaf linked successfully',
      links,
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
      message: error.message || 'Error linking leaf',
    });
  }
};

// @desc    Get knowledge graph of leaves
// @route   GET /api/leaves/graph
// @access  Private
export const getLeafGraph = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    
    const graphData = await leafService.getGraph(userId);
    
    // Transform the data to match the requested format
    const formattedGraph = {
      nodes: graphData.nodes.map(node => ({
        id: node.id,
        title: node.title
      })),
      edges: graphData.edges.map(edge => ({
        from: edge.sourceLeafId,
        to: edge.targetLeafId
      }))
    };
    
    res.status(200).json({
      success: true,
      graph: formattedGraph
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching knowledge graph'
    });
  }
};

// @desc    Get analytics data for leaves
// @route   GET /api/leaves/analytics
// @access  Private
export const getLeafAnalytics = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    
    const analyticsData = await leafService.getAnalytics(userId);
    
    // Transform the data to match the requested format
    const formattedAnalytics = {
      totalLeaves: analyticsData.totalLeaves,
      mostLinked: analyticsData.mostLinkedLeaves.map(leaf => ({
        id: leaf.id,
        title: leaf.title,
        linkCount: leaf.linkCount
      })),
      topTags: analyticsData.topTags,
      createdPerMonth: Object.entries(analyticsData.growthByMonth).map(([month, count]) => ({
        month,
        count
      }))
    };
    
    res.status(200).json({
      success: true,
      analytics: formattedAnalytics
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching analytics data'
    });
  }
};

// @desc    Search for leaves
// @route   GET /api/leaves/search
// @access  Private
export const searchLeaves = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { q, tag, from, to } = req.query;

    const filter: FilterOptions = {};

    // Search query
    if (q) {
      filter.search = q.toString();
    }

    // Tag filter
    if (tag) {
      filter.tags = Array.isArray(tag)
        ? tag.map((t) => t.toString())
        : [tag.toString()];
    }

    // Date range filter
    if (from) {
      filter.startDate = from.toString();
    }

    if (to) {
      filter.endDate = to.toString();
    }

    const leaves = await leafService.getLeaves(userId, filter);

    res.status(200).json({
      success: true,
      count: leaves.length,
      leaves,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error searching leaves',
    });
  }
};

// @desc    Export all leaves for a user
// @route   GET /api/leaves/export
// @access  Private
export const exportLeaves = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    
    const exportData = await leafService.exportLeaves(userId);
    
    // Set response headers for file download
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename=loreleaf-export.json');
    
    res.status(200).json(exportData);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error exporting leaves',
    });
  }
};

// @desc    Import leaves for a user
// @route   POST /api/leaves/import
// @access  Private
export const importLeaves = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const importData = req.body;
    
    if (!importData || !Array.isArray(importData)) {
      res.status(400).json({
        success: false,
        message: 'Invalid import data format. Expected array of leaves.',
      });
      return;
    }
    
    const result = await leafService.importLeaves(userId, importData);
    
    res.status(200).json({
      success: true,
      message: 'Leaves imported successfully',
      importedLeaves: result.importedLeaves,
      createdLinks: result.createdLinks,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error importing leaves',
    });
  }
}; 