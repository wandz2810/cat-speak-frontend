# Cat Speak - Language Learning Platform Frontend

A modern React + TypeScript frontend for the Cat Speak language learning platform, designed to integrate seamlessly with .NET backend.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will run on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── common/        # Common components (Button, Card, etc.)
│   └── sections/      # Page sections (Hero, Features, etc.)
├── pages/             # Page components
├── services/          # API services for .NET backend integration
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── App.tsx            # Main app component
```

## .NET Backend Integration

The Vite dev server is configured with a proxy to forward `/api` requests to your .NET backend (default: `http://localhost:5000`).

Update the proxy configuration in `vite.config.ts` to match your backend URL.

## API Service Layer

Use the services in `src/services/` to communicate with your .NET backend:

```typescript
import { apiClient } from './services/api';

const response = await apiClient.get('/api/courses');
```

## Future Expansion

This project is structured for easy expansion:
- Add new pages in `src/pages/`
- Add new components in `src/components/`
- Add new API services in `src/services/`
- Add routing with React Router when needed
- Add state management (Redux, Zustand) when complexity grows

## License

Private

