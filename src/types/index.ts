/**
 * TypeScript Type Definitions
 * 
 * Define your data models and types here to match your .NET backend models
 */

// Language Types
export interface Language {
  id: string;
  name: string;
  code: string;
  flag: string;
  isActive: boolean;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  languageId: string;
  level: CourseLevel;
  duration: number;
  thumbnailUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum CourseLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  createdAt: Date;
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  expiresAt: Date;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

