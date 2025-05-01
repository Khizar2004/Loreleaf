import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { protect } from '../../middleware/authMiddleware';

// Mock JWT
jest.mock('jsonwebtoken', () => ({
  verify: jest.fn(),
}));

describe('Auth Middleware', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    mockReq = {
      cookies: { jwt: 'mock-token' },
    };
    
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    
    mockNext = jest.fn();

    // Save original env
    originalEnv = { ...process.env };
    // Mock environment variable
    process.env.JWT_SECRET = 'testsecret';
  });

  afterEach(() => {
    jest.clearAllMocks();
    // Restore original env
    process.env = originalEnv;
  });

  it('should call next() if token is valid', async () => {
    // Setup
    (jwt.verify as jest.Mock).mockReturnValue({ id: 'user-123' });

    // Execute
    await protect(mockReq as Request, mockRes as Response, mockNext);

    // Assert
    expect(jwt.verify).toHaveBeenCalledWith('mock-token', 'testsecret');
    expect(mockReq.user).toEqual({ id: 'user-123' });
    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).not.toHaveBeenCalled();
  });

  it('should return 401 if no token is provided', async () => {
    // Setup
    mockReq.cookies = {};

    // Execute
    await protect(mockReq as Request, mockRes as Response, mockNext);

    // Assert
    expect(jwt.verify).not.toHaveBeenCalled();
    expect(mockNext).not.toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: 'Not authorized, no token',
    });
  });

  it('should return 401 if token verification fails', async () => {
    // Setup
    (jwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error('Invalid token');
    });

    // Execute
    await protect(mockReq as Request, mockRes as Response, mockNext);

    // Assert
    expect(jwt.verify).toHaveBeenCalledWith('mock-token', 'testsecret');
    expect(mockNext).not.toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: 'Not authorized, token failed',
    });
  });

  it('should throw an error if JWT_SECRET is not defined', async () => {
    // Setup
    delete process.env.JWT_SECRET;

    // Execute
    await protect(mockReq as Request, mockRes as Response, mockNext);

    // Assert
    expect(mockNext).not.toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: 'Not authorized, token failed',
    });
  });
}); 