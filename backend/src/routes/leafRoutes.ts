import express from 'express';
import {
  createLeaf,
  getLeaves,
  getLeafById,
  updateLeaf,
  deleteLeaf,
} from '../controllers/leafController';
import { validateRequest } from '../middleware/validateRequest';
import { createLeafSchema, updateLeafSchema } from '../utils/validationSchemas';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .post(validateRequest(createLeafSchema), createLeaf)
  .get(getLeaves);

router.route('/:id')
  .get(getLeafById)
  .put(validateRequest(updateLeafSchema), updateLeaf)
  .delete(deleteLeaf);

export default router; 