import jwt from 'jsonwebtoken';
import { Response } from 'express';

export const generateToken = (res: Response, userId: string): void => {
  const jwtSecret = process.env.JWT_SECRET || 'fallback-secret-key-for-development';
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '7d';

  const token = jwt.sign({ id: userId }, jwtSecret, {
    expiresIn: jwtExpiresIn,
  } as jwt.SignOptions);

  // Set JWT as HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
}; 