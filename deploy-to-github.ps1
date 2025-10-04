# PowerShell script to deploy Cat Speak to GitHub
# Run this in PowerShell

Write-Host "🚀 Cat Speak - GitHub Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed. Please install Git first: https://git-scm.com/downloads" -ForegroundColor Red
    exit
}
Write-Host "✅ Git is installed" -ForegroundColor Green
Write-Host ""

# Initialize git repository
Write-Host "Initializing Git repository..." -ForegroundColor Yellow
if (!(Test-Path .git)) {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "ℹ️ Git repository already exists" -ForegroundColor Blue
}
Write-Host ""

# Add all files
Write-Host "Staging all files..." -ForegroundColor Yellow
git add .
Write-Host "✅ Files staged" -ForegroundColor Green
Write-Host ""

# Create initial commit
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Cat Speak frontend with enhanced UI"
Write-Host "✅ Initial commit created" -ForegroundColor Green
Write-Host ""

# Get GitHub username
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Repository Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
$username = Read-Host "Enter your GitHub username"

# Set default branch to main
Write-Host ""
Write-Host "Setting default branch to main..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Default branch set to main" -ForegroundColor Green
Write-Host ""

# Add remote origin
Write-Host "Adding remote repository..." -ForegroundColor Yellow
$repoUrl = "https://github.com/$username/cat-speak-frontend.git"
git remote add origin $repoUrl
Write-Host "✅ Remote repository added: $repoUrl" -ForegroundColor Green
Write-Host ""

# Instructions for GitHub
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📋 NEXT STEPS:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to GitHub: https://github.com/new" -ForegroundColor Yellow
Write-Host "2. Create a new repository:" -ForegroundColor Yellow
Write-Host "   - Name: cat-speak-frontend" -ForegroundColor White
Write-Host "   - Description: Cat Speak Language Learning Platform" -ForegroundColor White
Write-Host "   - Public or Private (your choice)" -ForegroundColor White
Write-Host "   - DO NOT initialize with README or .gitignore" -ForegroundColor White
Write-Host ""
Write-Host "3. After creating the repository, run:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "4. Then deploy to Vercel:" -ForegroundColor Yellow
Write-Host "   - Go to https://vercel.com/new" -ForegroundColor White
Write-Host "   - Import your GitHub repository" -ForegroundColor White
Write-Host "   - Click Deploy!" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📖 For detailed instructions, see: DEPLOYMENT.md" -ForegroundColor Blue
Write-Host ""

