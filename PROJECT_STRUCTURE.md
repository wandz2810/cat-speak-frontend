# Cat Speak Project Structure

```
Cat_Speak/
│
├── public/                          # Static assets
│   └── (images, fonts, etc.)
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── common/                  # Reusable UI components
│   │   │   ├── Button.tsx          # Button component
│   │   │   └── Card.tsx            # Card component
│   │   └── sections/               # Page sections
│   │       ├── Header.tsx          # Navigation header
│   │       ├── Hero.tsx            # Hero section with CTA
│   │       ├── LanguageSelector.tsx # Language selection cards
│   │       ├── Features.tsx        # Features showcase
│   │       ├── AILearning.tsx      # AI learning benefits
│   │       ├── FAQ.tsx             # Frequently asked questions
│   │       └── Footer.tsx          # Footer with links
│   │
│   ├── services/                   # API services layer
│   │   ├── api.ts                  # Base API client
│   │   ├── authService.ts          # Authentication API
│   │   ├── courseService.ts        # Course management API
│   │   └── languageService.ts      # Language API
│   │
│   ├── types/                      # TypeScript definitions
│   │   └── index.ts                # Type definitions matching .NET models
│   │
│   ├── utils/                      # Utility functions
│   │   └── constants.ts            # App constants and routes
│   │
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   ├── index.css                   # Global styles with Tailwind
│   └── vite-env.d.ts              # Vite type definitions
│
├── index.html                      # HTML template
├── package.json                    # Node dependencies
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.node.json             # TypeScript config for Node
├── vite.config.ts                 # Vite build configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── .eslintrc.cjs                  # ESLint configuration
├── .gitignore                     # Git ignore patterns
│
├── README.md                       # Project overview
├── GETTING_STARTED.md             # Quick start guide
├── BACKEND_INTEGRATION.md         # .NET integration guide
└── env.example.txt                # Environment variables template
```

## Key Files Explained

### Configuration Files

- **`package.json`** - Lists all npm dependencies and scripts
- **`tsconfig.json`** - TypeScript compiler settings
- **`vite.config.ts`** - Build tool config with proxy for .NET backend
- **`tailwind.config.js`** - Custom colors, themes, and Tailwind settings
- **`.eslintrc.cjs`** - Code quality and linting rules

### Core Application Files

- **`src/main.tsx`** - React app initialization
- **`src/App.tsx`** - Main component that combines all sections
- **`src/index.css`** - Global styles and Tailwind imports

### Components Architecture

#### Common Components (`src/components/common/`)
Reusable UI building blocks:
- **Button** - Styled buttons with variants (primary, secondary, outline)
- **Card** - Container component with shadow and hover effects

#### Section Components (`src/components/sections/`)
Page-specific sections:
- **Header** - Top navigation with logo, menu, language selector
- **Hero** - Main banner with headline and call-to-action
- **LanguageSelector** - Grid of language options
- **Features** - Showcase of platform features
- **AILearning** - AI-powered learning benefits
- **FAQ** - Accordion-style frequently asked questions
- **Footer** - Site footer with links and social media

### API Integration Layer

#### `src/services/api.ts`
Base API client with methods for:
- GET, POST, PUT, DELETE requests
- Query parameter handling
- Error handling
- Type-safe responses

#### Service Modules
- **`authService.ts`** - Login, register, logout, token management
- **`courseService.ts`** - Course CRUD operations, enrollment
- **`languageService.ts`** - Language data fetching

### Type Definitions (`src/types/`)

TypeScript interfaces matching your .NET backend models:
- User, Course, Language models
- Authentication request/response types
- API response wrappers
- Pagination types

### Utilities (`src/utils/`)

- **`constants.ts`** - App-wide constants, routes, API endpoints

## Component Hierarchy

```
App
├── Header
└── main
    ├── Hero
    ├── LanguageSelector
    ├── Features
    ├── AILearning
    ├── FAQ
    └── Footer
```

## Data Flow

```
User Action
    ↓
React Component
    ↓
Service Layer (courseService, authService, etc.)
    ↓
API Client (api.ts)
    ↓
Vite Proxy (/api → http://localhost:5000)
    ↓
.NET Backend API
    ↓
Database
```

## Styling System

- **Tailwind CSS** - Utility-first CSS framework
- **Custom Colors** - Defined in `tailwind.config.js`
  - Primary: Orange gradient (500-700)
  - Accent: Red and Yellow
- **Custom Gradients** - Defined in `index.css`
  - `gradient-orange-red`
  - `gradient-red-orange`

## Expandability

### Adding New Pages
1. Create component in `src/pages/` (when you add routing)
2. Add route in router configuration
3. Update navigation in Header component

### Adding New Features
1. Create components in appropriate directory
2. Add API services if needed
3. Define TypeScript types
4. Update constants if needed

### State Management
When app grows, add:
- **Zustand** (lightweight) or **Redux** (complex apps)
- Context API for global state
- React Query for server state

### Routing
Install React Router when needed:
```bash
npm install react-router-dom
```

## Best Practices Implemented

✅ TypeScript for type safety  
✅ Component-based architecture  
✅ Separation of concerns (UI, logic, API)  
✅ Reusable components  
✅ Responsive design  
✅ Clean code structure  
✅ ESLint for code quality  
✅ Proxy setup for development  
✅ Environment variable support  
✅ Production-ready build configuration  

## Development Workflow

1. **Start Dev Server** - `npm run dev`
2. **Make Changes** - Edit components or add new ones
3. **Hot Reload** - See changes instantly
4. **Add API Calls** - Use service layer
5. **Test Integration** - With .NET backend
6. **Build** - `npm run build` for production
7. **Deploy** - To hosting or integrate with .NET

## Next Steps for Expansion

1. **Authentication Flow** - Implement full auth with protected routes
2. **Course Catalog** - Create course listing and detail pages
3. **User Dashboard** - Student progress tracking
4. **Interactive Lessons** - AI-powered learning interface
5. **Real-time Features** - WebSocket for live chat/collaboration
6. **Internationalization** - Multi-language support (i18next)
7. **Testing** - Unit tests (Jest) and E2E tests (Playwright)
8. **Performance** - Code splitting, lazy loading, optimization

