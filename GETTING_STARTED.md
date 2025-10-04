# Getting Started with Cat Speak Frontend

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
copy .env.example .env
```

Update `.env` with your .NET backend URL if different from the default.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Cat_Speak/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Button, Card)
│   │   └── sections/        # Page sections (Header, Hero, etc.)
│   ├── services/            # API integration layer
│   │   └── api.ts          # Main API client for .NET backend
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions and constants
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Connecting to .NET Backend

### API Configuration

The frontend is configured to proxy API requests to your .NET backend. Update `vite.config.ts`:

```typescript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',  // Your .NET API URL
      changeOrigin: true,
      secure: false,
    }
  }
}
```

### Making API Calls

Use the `apiClient` service from `src/services/api.ts`:

```typescript
import { apiClient } from './services/api';

// GET request
const courses = await apiClient.get('/courses');

// POST request
const response = await apiClient.post('/auth/login', {
  email: 'user@example.com',
  password: 'password'
});
```

### Type Definitions

Define your .NET backend models in `src/types/index.ts` for type safety:

```typescript
export interface Course {
  id: string;
  title: string;
  description: string;
  // ... match your .NET models
}
```

## Adding New Features

### 1. Create a New Page

Create a new component in `src/pages/`:

```typescript
// src/pages/Courses.tsx
const Courses = () => {
  return <div>Courses Page</div>;
};

export default Courses;
```

### 2. Add Routing (Optional)

Install React Router:

```bash
npm install react-router-dom
```

Update `App.tsx` to use routing.

### 3. Create API Service

Add new API methods in `src/services/api.ts` or create specific services:

```typescript
// src/services/courseService.ts
import { apiClient } from './api';

export const courseService = {
  getAllCourses: () => apiClient.get('/courses'),
  getCourseById: (id: string) => apiClient.get(`/courses/${id}`),
  enrollInCourse: (id: string) => apiClient.post(`/courses/${id}/enroll`),
};
```

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Deploying with .NET

You can serve the React frontend from your .NET backend:

1. Build the React app: `npm run build`
2. Copy the `dist/` folder contents to your .NET project's `wwwroot/` folder
3. Configure .NET to serve static files

```csharp
// In your .NET Startup.cs or Program.cs
app.UseStaticFiles();
app.UseSpaStaticFiles();

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "wwwroot";
});
```

## Development Tips

### Hot Module Replacement (HMR)

Vite provides fast HMR out of the box. Changes to your components will reflect instantly.

### TypeScript

The project uses strict TypeScript. Make sure to define types for all props and state.

### Tailwind CSS

Use Tailwind utility classes for styling. Custom styles can be added to `src/index.css`.

### Icons

React Icons library is included. Import icons as needed:

```typescript
import { FaUser, FaHeart } from 'react-icons/fa';
```

## Common Tasks

### Add New Component

```bash
# Create new component file
# src/components/common/MyComponent.tsx
```

### Update Styles

Edit `tailwind.config.js` to customize colors, fonts, etc.

### Add New API Endpoint

Update `src/utils/constants.ts` and create service methods.

## Troubleshooting

### CORS Issues

If you encounter CORS errors, ensure your .NET backend is configured to allow requests from `http://localhost:3000`:

```csharp
services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader());
});

app.UseCors("AllowReactApp");
```

### Port Already in Use

Change the port in `vite.config.ts` if 3000 is already taken.

## Next Steps

1. **Add Authentication**: Implement login/register functionality
2. **Add Routing**: Install React Router for multi-page navigation
3. **State Management**: Add Zustand or Redux if needed
4. **Testing**: Add Jest and React Testing Library
5. **Internationalization**: Add i18n support for multiple languages

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [ASP.NET Core & React Integration](https://learn.microsoft.com/en-us/aspnet/core/client-side/spa/react)

