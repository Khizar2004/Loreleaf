import { Request, Response } from 'express';
import { getKnowledgeGraph, getAnalytics } from '../../controllers/graphController';

// Mock leafService
jest.mock('../../services/leafService', () => ({
  leafService: {
    getGraph: jest.fn(),
    getAnalytics: jest.fn(),
  },
}));

import { leafService } from '../../services/leafService';

describe('Graph Controller', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;

  beforeEach(() => {
    mockReq = {
      user: { id: 'user-123' },
    };
    
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getKnowledgeGraph', () => {
    it('should return knowledge graph data successfully', async () => {
      // Setup
      const mockGraphData = {
        nodes: [
          { id: 'leaf-1', title: 'Leaf 1', tags: ['tag1'] },
          { id: 'leaf-2', title: 'Leaf 2', tags: ['tag2'] },
        ],
        edges: [
          { sourceLeafId: 'leaf-1', targetLeafId: 'leaf-2' },
        ],
      };
      
      (leafService.getGraph as jest.Mock).mockResolvedValue(mockGraphData);

      // Execute
      await getKnowledgeGraph(mockReq as Request, mockRes as Response);

      // Assert
      expect(leafService.getGraph).toHaveBeenCalledWith('user-123');
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: true,
        graph: mockGraphData,
      });
    });

    it('should handle errors properly', async () => {
      // Setup
      const mockError = new Error('Database error');
      (leafService.getGraph as jest.Mock).mockRejectedValue(mockError);

      // Execute
      await getKnowledgeGraph(mockReq as Request, mockRes as Response);

      // Assert
      expect(leafService.getGraph).toHaveBeenCalledWith('user-123');
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: false,
        message: 'Database error',
      });
    });
  });

  describe('getAnalytics', () => {
    it('should return analytics data successfully', async () => {
      // Setup
      const mockAnalyticsData = {
        totalLeaves: 10,
        totalConnections: 15,
        mostLinkedLeaves: [
          { id: 'leaf-1', title: 'Leaf 1', linkCount: 5 },
          { id: 'leaf-2', title: 'Leaf 2', linkCount: 3 },
        ],
      };
      
      (leafService.getAnalytics as jest.Mock).mockResolvedValue(mockAnalyticsData);

      // Execute
      await getAnalytics(mockReq as Request, mockRes as Response);

      // Assert
      expect(leafService.getAnalytics).toHaveBeenCalledWith('user-123');
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: true,
        analytics: mockAnalyticsData,
      });
    });

    it('should handle errors properly', async () => {
      // Setup
      const mockError = new Error('Analytics error');
      (leafService.getAnalytics as jest.Mock).mockRejectedValue(mockError);

      // Execute
      await getAnalytics(mockReq as Request, mockRes as Response);

      // Assert
      expect(leafService.getAnalytics).toHaveBeenCalledWith('user-123');
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: false,
        message: 'Analytics error',
      });
    });
  });
}); 