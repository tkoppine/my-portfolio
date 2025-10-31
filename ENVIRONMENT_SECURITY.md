# Environment Variables & Security Guide

## 🔐 Security Best Practices

### ❌ **NEVER Commit These to GitHub:**

- `.env.local` file
- Any file containing API keys, passwords, or secrets
- EmailJS service credentials

### ✅ **Safe to Expose (EmailJS is Client-Side):**

EmailJS keys are designed to be exposed in the browser since it's a client-side service. However, for better security practices, here are your options:

## 🚀 **Deployment Options:**

### **Option 1: Replace with Actual Values Before Deployment (Recommended)**

1. **Get your EmailJS credentials** from your EmailJS dashboard
2. **Update the Contact.tsx file** with actual values:

```typescript
// Replace these with your actual EmailJS values
const serviceId =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_abc123";
const templateId =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xyz789";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "user_def456";
```

### **Option 2: Use GitHub Actions with Secrets (Advanced)**

For more security, you can use GitHub Actions to inject environment variables during build:

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📋 **Current Status:**

### **✅ Already Configured:**

- `.gitignore` excludes `.env*` files
- Contact form has fallback values
- EmailJS integration ready

### **🔧 What You Need to Do:**

1. **Complete EmailJS Setup:**

   - Sign up at EmailJS.com
   - Get your Service ID, Template ID, and Public Key
   - Follow `EMAILJS_SETUP.md` instructions

2. **Choose Your Deployment Approach:**

   **For Quick Deployment (Option 1):**

   ```bash
   # Update Contact.tsx with your actual EmailJS values
   # Then deploy normally with yarn deploy
   ```

   **For Advanced Security (Option 2):**

   ```bash
   # Set up GitHub Actions workflow
   # Add secrets to GitHub repository settings
   ```

## 🎯 **Why EmailJS Keys Can Be Exposed:**

1. **Client-Side Service:** EmailJS runs in the browser
2. **Rate Limiting:** EmailJS has built-in rate limiting
3. **Domain Restrictions:** You can restrict usage to specific domains
4. **No Sensitive Data:** Keys don't access your email account directly

## 🛡️ **Additional Security Measures:**

### **In EmailJS Dashboard:**

1. **Set Domain Restrictions:**

   - Only allow your GitHub Pages domain
   - Block unauthorized domains

2. **Enable Rate Limiting:**

   - Prevent abuse and spam
   - Set daily/monthly limits

3. **Monitor Usage:**
   - Check EmailJS dashboard regularly
   - Watch for unusual activity

## 📝 **Recommended Approach:**

For your portfolio, I recommend **Option 1** because:

- ✅ Simple and straightforward
- ✅ Works perfectly with GitHub Pages
- ✅ EmailJS keys are meant to be client-side
- ✅ You can add domain restrictions for security

## 🚨 **Before Committing:**

1. **Verify `.env.local` is in `.gitignore`** ✅ (Already done)
2. **Don't commit sensitive files** ✅ (Already configured)
3. **Update EmailJS values in code** (Your choice: Option 1 or 2)
4. **Test locally first** before deploying

## 📧 **Contact Form Will Work When:**

1. You complete EmailJS setup
2. Update the fallback values in Contact.tsx OR set up GitHub secrets
3. Deploy to GitHub Pages
4. Users submit the form → You get emails at tkoppine@asu.edu

Your contact form is ready - just need to add the actual EmailJS credentials!
