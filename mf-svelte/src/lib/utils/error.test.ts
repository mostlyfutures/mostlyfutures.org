import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ErrorHandler, ErrorType } from './error';

describe('ErrorHandler', () => {
  beforeEach(() => {
    // Clear console before each test
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'group').mockImplementation(() => {});
    vi.spyOn(console, 'groupEnd').mockImplementation(() => {});
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('should create AppError with correct structure', () => {
    const error = new Error('Test error');
    const appError = ErrorHandler.createAppError(error, ErrorType.NETWORK);

    expect(appError.type).toBe(ErrorType.NETWORK);
    expect(appError.message).toBe('Test error');
    expect(appError.userMessage).toBe('Connection failed. Please check your internet connection.');
    expect(appError.timestamp).toBeInstanceOf(Date);
  });

  it('should use custom user message when provided', () => {
    const error = new Error('Test error');
    const customMessage = 'Custom error message';
    const appError = ErrorHandler.createAppError(error, ErrorType.VALIDATION, customMessage);

    expect(appError.userMessage).toBe(customMessage);
  });

  it('should handle errors with status codes', () => {
    const error = new Error('Not found');
    error.status = 404;
    const appError = ErrorHandler.createAppError(error, ErrorType.NOT_FOUND);

    expect(appError.code).toBe(404);
  });

  it('should provide default user messages for each error type', () => {
    const testError = new Error('Test');

    const networkError = ErrorHandler.createAppError(testError, ErrorType.NETWORK);
    expect(networkError.userMessage).toBe('Connection failed. Please check your internet connection.');

    const validationError = ErrorHandler.createAppError(testError, ErrorType.VALIDATION);
    expect(validationError.userMessage).toBe('Please check your input and try again.');

    const authError = ErrorHandler.createAppError(testError, ErrorType.AUTHENTICATION);
    expect(authError.userMessage).toBe('Please sign in to continue.');

    const notFoundError = ErrorHandler.createAppError(testError, ErrorType.NOT_FOUND);
    expect(notFoundError.userMessage).toBe('The requested resource was not found.');

    const serverError = ErrorHandler.createAppError(testError, ErrorType.SERVER);
    expect(serverError.userMessage).toBe('Server error occurred. Please try again later.');

    const unknownError = ErrorHandler.createAppError(testError, ErrorType.UNKNOWN);
    expect(unknownError.userMessage).toBe('An unexpected error occurred. Please try again.');
  });

  it('should log error in development mode', () => {
    const mockEnv = { NODE_ENV: 'development' };
    vi.doMock('$lib/env', () => ({ env: mockEnv }));

    const error = new Error('Test error');
    const appError = ErrorHandler.createAppError(error, ErrorType.NETWORK);

    ErrorHandler.log(appError);

    expect(console.group).toHaveBeenCalledWith('🚨 NETWORK ERROR');
    expect(console.error).toHaveBeenCalledWith('Message:', 'Test error');
    expect(console.groupEnd).toHaveBeenCalled();
  });

  it('should handle errors without messages', () => {
    const error = { code: 500 };
    const appError = ErrorHandler.createAppError(error, ErrorType.SERVER);

    expect(appError.message).toBe('Unknown error occurred');
    expect(appError.code).toBe(500);
  });
});