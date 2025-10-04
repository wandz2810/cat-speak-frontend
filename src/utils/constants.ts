/**
 * Application Constants
 */

export const APP_NAME = 'Cat Speak';
export const APP_DESCRIPTION = 'Language Learning Platform';

export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  TEACHERS: '/teachers',
  COMMUNITY: '/community',
  ABOUT: '/about',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: (id: string) => `/courses/${id}`,
    ENROLL: (id: string) => `/courses/${id}/enroll`,
  },
  LANGUAGES: {
    LIST: '/languages',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
  },
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

