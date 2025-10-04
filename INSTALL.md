# Installation Instructions

## Prerequisites

- **Node.js** 18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **.NET 6/7/8 SDK** for backend ([Download](https://dotnet.microsoft.com/download))

## Quick Start (3 Steps)

### Step 1: Install Dependencies

Open PowerShell or Command Prompt in the project directory and run:

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### Step 2: Configure Environment

Copy the example environment file:

**PowerShell:**
```powershell
Copy-Item env.example.txt .env
```

**CMD:**
```cmd
copy env.example.txt .env
```

Or manually create a `.env` file in the root directory with:
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Cat Speak
VITE_APP_ENV=development
```

### Step 3: Start Development Server

```bash
npm run dev
```

The app will start at: **http://localhost:3000**

## With .NET Backend

If you have a .NET backend ready:

### Terminal 1 - Start .NET Backend
```bash
cd path/to/your/backend
dotnet run
```

### Terminal 2 - Start React Frontend
```bash
cd path/to/Cat_Speak
npm run dev
```

The React app will proxy `/api` requests to your .NET backend automatically!

## Verify Installation

1. Open browser: `http://localhost:3000`
2. You should see the Cat Speak landing page
3. Check console for any errors (F12)

## Common Issues

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution:** Edit `vite.config.ts` and change the port:
```typescript
server: {
  port: 3001, // Change to any available port
  ...
}
```

### Issue: CORS errors when calling backend
**Solution:** Configure CORS in your .NET backend. See `BACKEND_INTEGRATION.md`

### Issue: Dependencies installation fails
**Solution:** 
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy!

## What's Next?

1. ✅ Read `GETTING_STARTED.md` for detailed development guide
2. ✅ Read `BACKEND_INTEGRATION.md` for .NET integration
3. ✅ Read `PROJECT_STRUCTURE.md` to understand the codebase
4. ✅ Start customizing components in `src/components/`

## Need Help?

Check these files:
- **GETTING_STARTED.md** - Development guide
- **BACKEND_INTEGRATION.md** - .NET integration
- **PROJECT_STRUCTURE.md** - Code organization
- **README.md** - Project overview

---

**You're all set! Start coding! 🚀**

