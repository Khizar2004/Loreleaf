import { Request, Response } from 'express';
import { leafService } from '../services/leafService';

// @desc    Get knowledge graph data
// @route   GET /api/graph
// @access  Private
export const getKnowledgeGraph = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    
    const graphData = await leafService.getGraph(userId);
    
    res.status(200).json({
      success: true,
      graph: graphData,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching knowledge graph',
    });
  }
};

// @desc    Get analytics data
// @route   GET /api/graph/analytics
// @access  Private
export const getAnalytics = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    
    const analytics = await leafService.getAnalytics(userId);
    
    res.status(200).json({
      success: true,
      analytics,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching analytics',
    });
  }
}; 