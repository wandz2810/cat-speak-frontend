/**
 * Language Service
 * Example service for managing languages with .NET backend
 */

import { apiClient } from './api';
import { Language } from '../types';

export const languageService = {
  /**
   * Get all available languages
   */
  getAllLanguages: async (): Promise<Language[]> => {
    return apiClient.get('/languages');
  },

  /**
   * Get active languages only
   */
  getActiveLanguages: async (): Promise<Language[]> => {
    return apiClient.get('/languages', {
      params: { active: 'true' },
    });
  },

  /**
   * Get language by ID
   */
  getLanguageById: async (id: string): Promise<Language> => {
    return apiClient.get(`/languages/${id}`);
  },
};

