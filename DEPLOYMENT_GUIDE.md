# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages using yarn.

## 🚀 Quick Deployment Steps

### 1. First Time Setup

1. **Create a GitHub Repository:**

   ```bash
   # Go to GitHub.com and create a new repository named "my-portfolio"
   # Make it public for GitHub Pages to work with free account
   ```

2. **Connect Your Local Repository:**

   ```bash
   # If you haven't added a remote origin yet:
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

   # Replace YOUR_USERNAME with your actual GitHub username
   ```

3. **Update Repository URL in package.json:**
   - Open `package.json`
   - Update the homepage URL:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/my-portfolio"
   ```

### 2. Commit Your Changes

```bash
# Add all changes to git
git add .

# Commit your changes
git commit -m "Initial portfolio setup with deployment configuration"

# Push to main branch
git push -u origin main
```

### 3. Deploy to GitHub Pages

```bash
# Build and deploy your portfolio
yarn deploy
```

This command will:

- Build your Next.js app
- Export it as static files
- Push the built files to the `gh-pages` branch
- Make your site available at: `https://YOUR_USERNAME.github.io/my-portfolio`

### 4. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/ (root)** folder
6. Click **Save**

## 🎯 Your Live Portfolio URL

After deployment, your portfolio will be available at:

```
https://YOUR_USERNAME.github.io/my-portfolio
```

## 🔄 Future Updates

To update your portfolio:

```bash
# Make your changes
# Add and commit changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy updates
yarn deploy
```

## 📋 Deployment Scripts Explained

- `yarn build` - Builds the Next.js application
- `yarn export` - Exports the app as static files
- `yarn deploy` - Builds, exports, and deploys to GitHub Pages

## ⚡ Quick Commands

```bash
# Development
yarn dev

# Build locally
yarn build

# Deploy to GitHub Pages
yarn deploy

# Run linting
yarn lint
```

## 🔧 Configuration Files

The following files have been configured for deployment:

- **package.json** - Added deploy scripts and homepage
- **next.config.ts** - Configured for static export and GitHub Pages
- **.env.local** - Environment variables (not deployed for security)

## 📝 Important Notes

1. **Environment Variables:**

   - `.env.local` is not deployed to GitHub Pages
   - Add your EmailJS keys directly in the environment variables section of your GitHub repository settings (if needed)
   - Or update the EmailJS configuration to use hardcoded values for production

2. **Images:**

   - All images in the `public` folder will be deployed
   - Make sure all image paths are correct

3. **EmailJS:**
   - Will work on GitHub Pages once properly configured
   - Follow the EmailJS setup guide to complete the contact form

## 🚨 Troubleshooting

**If deployment fails:**

1. Check that your repository name matches the homepage URL
2. Ensure you have pushed your changes to the main branch
3. Verify GitHub Pages is enabled in repository settings
4. Check the Actions tab for deployment status

**If the site doesn't load:**

1. Wait 5-10 minutes for GitHub Pages to update
2. Check that the gh-pages branch was created
3. Verify the GitHub Pages source is set correctly

**If styling is broken:**

1. Check that basePath is configured correctly in next.config.ts
2. Ensure all asset paths are relative
