import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from '../controllers/authController';
import { validateRequest } from '../middleware/validateRequest';
import { registerSchema, loginSchema } from '../utils/validationSchemas';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/register', validateRequest(registerSchema), registerUser);
router.post('/login', validateRequest(loginSchema), loginUser);
router.post('/logout', logoutUser);

// Protected routes
router.get('/me', protect, getCurrentUser);

export default router; 