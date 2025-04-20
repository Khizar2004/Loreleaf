import express from 'express';
import {
  createLeaf,
  getLeaves,
  getLeafById,
  updateLeaf,
  deleteLeaf,
  linkLeaf,
  getLeafGraph,
  getLeafAnalytics,
  searchLeaves,
  exportLeaves,
  importLeaves,
} from '../controllers/leafController';
import { validateRequest } from '../middleware/validateRequest';
import { createLeafSchema, updateLeafSchema, linkLeafSchema } from '../utils/validationSchemas';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// All routes are protected
router.use(protect);

// Root routes
router.route('/')
  .post(validateRequest(createLeafSchema), createLeaf)
  .get(getLeaves);

// Static routes (must come before dynamic routes with params)
router.get('/graph', getLeafGraph);
router.get('/analytics', getLeafAnalytics);
router.get('/search', searchLeaves);
router.get('/export', exportLeaves);
router.post('/import', importLeaves);

// Dynamic routes with parameters
router.route('/:id')
  .get(getLeafById)
  .put(validateRequest(updateLeafSchema), updateLeaf)
  .delete(deleteLeaf);

// Add leaf linking route
router.post('/:id/link', validateRequest(linkLeafSchema), linkLeaf);

export default router; 