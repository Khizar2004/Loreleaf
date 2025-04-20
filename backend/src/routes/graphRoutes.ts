import express from 'express';
import {
  getKnowledgeGraph,
  getAnalytics,
} from '../controllers/graphController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// All routes are protected
router.use(protect);

router.get('/', getKnowledgeGraph);
router.get('/analytics', getAnalytics);

export default router; 