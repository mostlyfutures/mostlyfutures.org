import { writable } from 'svelte/store';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    handler: () => void;
  };
}

export const toasts = writable<Toast[]>([]);

export function addToast(toast: Omit<Toast, 'id'>): string {
  const id = Math.random().toString(36).substr(2, 9);
  const newToast: Toast = {
    id,
    duration: 5000,
    ...toast
  };

  toasts.update(current => [...current, newToast]);

  // Auto-remove after duration
  if (newToast.duration && newToast.duration > 0) {
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  }

  return id;
}

export function removeToast(id: string): void {
  toasts.update(current => current.filter(toast => toast.id !== id));
}

export function clearToasts(): void {
  toasts.set([]);
}

// Convenience methods
export const toast = {
  success: (title: string, message?: string) =>
    addToast({ type: 'success', title, message }),
  error: (title: string, message?: string) =>
    addToast({ type: 'error', title, message, duration: 8000 }),
  warning: (title: string, message?: string) =>
    addToast({ type: 'warning', title, message }),
  info: (title: string, message?: string) =>
    addToast({ type: 'info', title, message })
};