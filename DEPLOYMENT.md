# Deployment Guide - Cat Speak Frontend

Complete guide to deploy your Cat Speak frontend to Vercel and connect it to GitHub.

---

## 📋 Prerequisites

1. ✅ [GitHub Account](https://github.com/signup) (free)
2. ✅ [Vercel Account](https://vercel.com/signup) (free)
3. ✅ [Git installed](https://git-scm.com/downloads) on your computer
4. ✅ Your project code ready

---

## 🚀 Part 1: Push to GitHub

### Step 1: Initialize Git Repository

Open PowerShell/Terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Check git status
git status
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon (top-right) → **"New repository"**
3. Repository settings:
   - **Name:** `cat-speak-frontend`
   - **Description:** `Cat Speak Language Learning Platform - React Frontend`
   - **Visibility:** Public or Private (your choice)
   - **❌ DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

### Step 3: Stage All Files

```bash
# Add all files to staging
git add .

# Check what will be committed
git status
```

### Step 4: Create First Commit

```bash
# Commit with a message
git commit -m "Initial commit: Cat Speak frontend with enhanced UI"
```

### Step 5: Connect to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/cat-speak-frontend.git

# Verify remote
git remote -v
```

### Step 6: Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

**Enter your GitHub credentials when prompted.**

If you have 2FA enabled, you'll need a **Personal Access Token**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use the token as your password

---

## 🌐 Part 2: Deploy to Vercel

### Method 1: Deploy via Vercel Website (Recommended)

#### Step 1: Import from GitHub

1. Go to [Vercel](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your **cat-speak-frontend** repository
5. Click **"Import"**

#### Step 2: Configure Project

Vercel will auto-detect Vite. Verify these settings:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### Step 3: Environment Variables (Optional)

If you need to set environment variables:

1. Click **"Environment Variables"**
2. Add variables:
   ```
   VITE_API_BASE_URL = https://your-backend-api.com/api
   VITE_APP_NAME = Cat Speak
   ```

#### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://cat-speak-frontend.vercel.app`

---

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? cat-speak-frontend
# - In which directory is your code located? ./
# - Want to override the settings? No

# Deploy to production
vercel --prod
```

---

## 🔧 Part 3: Configure Custom Domain (Optional)

### On Vercel Dashboard:

1. Go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain: `www.catspeak.com`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

---

## 🔄 Part 4: Automatic Deployments

Vercel automatically deploys when you push to GitHub!

### Make Changes and Deploy:

```bash
# Make your changes to code

# Stage changes
git add .

# Commit
git commit -m "Update hero section styling"

# Push to GitHub
git push

# Vercel automatically deploys! 🎉
```

### Preview Deployments:

- **Main branch** → Production deployment
- **Other branches** → Preview deployments
- **Pull requests** → Automatic preview URLs

---

## 🌍 Part 5: Connect to .NET Backend

### Update API URL

1. In Vercel dashboard → **Settings** → **Environment Variables**
2. Add:
   ```
   VITE_API_BASE_URL = https://your-dotnet-backend.azurewebsites.net/api
   ```
3. Redeploy

### Update vercel.json

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://your-backend.azurewebsites.net/api/:path*"
    }
  ]
}
```

### Update .NET CORS

In your .NET backend, allow Vercel domain:

```csharp
services.AddCors(options =>
{
    options.AddPolicy("AllowVercel",
        builder => builder
            .WithOrigins(
                "http://localhost:3000",
                "https://cat-speak-frontend.vercel.app",
                "https://your-custom-domain.com"
            )
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});
```

---

## 📊 Part 6: Monitor Your Deployment

### Vercel Dashboard Features:

1. **Analytics** - Page views, visitors
2. **Deployments** - History of all deployments
3. **Logs** - Build and function logs
4. **Speed Insights** - Performance metrics
5. **Domains** - Manage custom domains

### View Logs:

```bash
# View deployment logs
vercel logs

# View production logs
vercel logs --prod
```

---

## 🔍 Troubleshooting

### Build Fails on Vercel

**Check:**
1. `package.json` dependencies are correct
2. No TypeScript errors: `npm run build` locally
3. Environment variables are set correctly

### 404 Errors

**Solution:**
Add to `vercel.json`:
```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

### API Calls Fail

**Check:**
1. CORS is configured in .NET backend
2. API URL is correct in environment variables
3. Backend is accessible from Vercel servers

### Slow Build Times

**Optimize:**
1. Use `.vercel/cache` for dependencies
2. Remove unnecessary files from build
3. Optimize images before deploying

---

## 📝 Useful Vercel Commands

```bash
# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel remove [deployment-url]

# Link local project to Vercel project
vercel link

# Pull environment variables
vercel env pull

# View project info
vercel inspect
```

---

## 🎯 Deployment Checklist

Before deploying to production:

- [ ] All features tested locally
- [ ] No console errors or warnings
- [ ] Responsive on mobile/tablet/desktop
- [ ] Environment variables configured
- [ ] API endpoints working
- [ ] Images loading correctly
- [ ] Meta tags and SEO optimized
- [ ] Performance tested (Lighthouse)
- [ ] Error pages configured
- [ ] Analytics added (optional)

---

## 🚀 Post-Deployment Tasks

1. **Test Live Site:**
   - Visit your Vercel URL
   - Test all sections
   - Check mobile responsiveness
   - Test API calls (if backend connected)

2. **Share Your Site:**
   - Copy deployment URL
   - Share with team/clients
   - Get feedback

3. **Monitor Performance:**
   - Check Vercel Analytics
   - Use Google Lighthouse
   - Monitor error logs

4. **Set Up Notifications:**
   - Enable deployment notifications in Vercel
   - Get alerts for failed builds

---

## 🔐 Security Best Practices

1. **Environment Variables:**
   - Never commit `.env` files
   - Use Vercel environment variables
   - Separate dev/prod configs

2. **API Keys:**
   - Keep API keys in Vercel secrets
   - Don't expose in client-side code
   - Use backend for sensitive operations

3. **CORS:**
   - Only allow specific domains
   - Don't use wildcards in production
   - Test CORS configuration

---

## 📱 Example Deployment URLs

After deployment, you'll get:

**Production:**
- `https://cat-speak-frontend.vercel.app`
- `https://your-custom-domain.com` (if configured)

**Preview (branches):**
- `https://cat-speak-frontend-git-dev.vercel.app`
- `https://cat-speak-frontend-pr-123.vercel.app`

---

## 💡 Pro Tips

1. **Branch Previews:** Create a `dev` branch for testing
2. **Environment-specific configs:** Use different API URLs for dev/prod
3. **Vercel CLI:** Install for faster deployments
4. **GitHub Actions:** Add CI/CD tests before deployment
5. **Performance:** Enable Vercel Edge Network for faster loads

---

## 🎉 You're Done!

Your Cat Speak frontend is now:
- ✅ Version controlled on GitHub
- ✅ Deployed to Vercel
- ✅ Auto-deploying on every push
- ✅ Accessible worldwide via HTTPS
- ✅ Ready for production use

**Live URL:** Check Vercel dashboard for your deployment URL!

---

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Happy Deploying! 🚀**

