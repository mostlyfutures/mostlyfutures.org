import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount);
}

export function formatPercentage(value: number): string {
	return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
}

export function formatDate(date: string | Date): string {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(new Date(date));
}

export function formatCompactNumber(num: number): string {
	if (num < 1000) return num.toString();
	if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
	if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M';
	return (num / 1000000000).toFixed(1) + 'B';
}

export function generateId(): string {
	return Math.random().toString(36).substring(2, 15);
}

export function slugify(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-');
}