/**
 * Authentication Service
 * Example service for handling authentication with .NET backend
 */

import { apiClient } from './api';
import { LoginRequest, LoginResponse, RegisterRequest, User } from '../types';

export const authService = {
  /**
   * Login user
   */
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    
    // Store token in localStorage
    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  },

  /**
   * Register new user
   */
  register: async (data: RegisterRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/register', data);
    
    // Store token in localStorage
    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
    localStorage.removeItem('authToken');
  },

  /**
   * Get current user profile
   */
  getCurrentUser: async (): Promise<User> => {
    return apiClient.get('/user/profile');
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken');
  },

  /**
   * Get auth token
   */
  getToken: (): string | null => {
    return localStorage.getItem('authToken');
  },
};

