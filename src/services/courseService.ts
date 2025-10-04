/**
 * Course Service
 * Example service for managing courses with .NET backend
 */

import { apiClient } from './api';
import { Course, PaginatedResponse } from '../types';

export const courseService = {
  /**
   * Get all courses with optional pagination
   */
  getAllCourses: async (page = 1, pageSize = 10): Promise<PaginatedResponse<Course>> => {
    return apiClient.get('/courses', {
      params: {
        page: page.toString(),
        pageSize: pageSize.toString(),
      },
    });
  },

  /**
   * Get a single course by ID
   */
  getCourseById: async (id: string): Promise<Course> => {
    return apiClient.get(`/courses/${id}`);
  },

  /**
   * Enroll in a course
   */
  enrollInCourse: async (courseId: string): Promise<{ success: boolean; message: string }> => {
    return apiClient.post(`/courses/${courseId}/enroll`);
  },

  /**
   * Get courses by language
   */
  getCoursesByLanguage: async (languageId: string): Promise<Course[]> => {
    return apiClient.get('/courses', {
      params: { languageId },
    });
  },
};

// Example usage:
// import { courseService } from '@/services/courseService';
// const courses = await courseService.getAllCourses(1, 10);

