import express from 'express';
import {
  createCollection,
  getCollections,
  getCollectionById,
  updateCollection,
  deleteCollection,
} from '../controllers/collectionController';
import { validateRequest } from '../middleware/validateRequest';
import { createCollectionSchema, updateCollectionSchema } from '../utils/validationSchemas';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// All routes are protected
router.use(protect);

// Root routes
router.route('/')
  .post(validateRequest(createCollectionSchema), createCollection)
  .get(getCollections);

// Individual collection routes
router.route('/:id')
  .get(getCollectionById)
  .put(validateRequest(updateCollectionSchema), updateCollection)
  .delete(deleteCollection);

export default router; 