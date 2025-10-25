import { goto } from '$app/navigation';
import { env } from '$lib/env';

export enum ErrorType {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  NOT_FOUND = 'not_found',
  SERVER = 'server',
  UNKNOWN = 'unknown'
}

export interface AppError {
  type: ErrorType;
  message: string;
  userMessage: string;
  code?: number;
  details?: any;
  timestamp: Date;
}

export class ErrorHandler {
  static log(error: AppError): void {
    // In development, log to console with structure
    if (env.NODE_ENV === 'development') {
      console.group(`🚨 ${error.type.toUpperCase()} ERROR`);
      console.error('Message:', error.message);
      console.error('User Message:', error.userMessage);
      console.error('Code:', error.code);
      console.error('Details:', error.details);
      console.error('Timestamp:', error.timestamp);
      console.groupEnd();
    } else {
      // In production, you might send to a logging service
      console.error('App error:', {
        type: error.type,
        message: error.message,
        code: error.code,
        timestamp: error.timestamp
      });
    }
  }

  static createAppError(
    error: any,
    type: ErrorType = ErrorType.UNKNOWN,
    userMessage?: string
  ): AppError {
    return {
      type,
      message: error?.message || 'Unknown error occurred',
      userMessage: userMessage || this.getDefaultUserMessage(type),
      code: error?.code || error?.status,
      details: error,
      timestamp: new Date()
    };
  }

  static getDefaultUserMessage(type: ErrorType): string {
    switch (type) {
      case ErrorType.NETWORK:
        return 'Connection failed. Please check your internet connection.';
      case ErrorType.VALIDATION:
        return 'Please check your input and try again.';
      case ErrorType.AUTHENTICATION:
        return 'Please sign in to continue.';
      case ErrorType.NOT_FOUND:
        return 'The requested resource was not found.';
      case ErrorType.SERVER:
        return 'Server error occurred. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  static handle(error: AppError): void {
    this.log(error);

    // You could integrate with a toast/notification system here
    // For now, we'll use the existing pattern

    if (error.type === ErrorType.NOT_FOUND) {
      goto('/404');
    }
  }
}