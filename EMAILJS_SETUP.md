# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **In the EmailJS template editor, set up these fields:**

### Template Settings:

- **Template Name**: Portfolio Contact Form
- **Template ID**: (EmailJS will generate this - copy it for later)

### Email Template Content:

**Subject Field:**

```
New Contact Form Message from {{from_name}}
```

**Content Field (the main email body):**

```
Hi Teja,

You received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message: {{message}}

---
Sent from your portfolio website contact form.
```

### Variable Mapping (Important!):

Make sure these variables match what your code sends:

- `{{from_name}}` - Person's name
- `{{from_email}}` - Person's email
- `{{company}}` - Person's company (optional)
- `{{message}}` - Their message

4. **Save the template** and copy the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (User ID)

## Step 5: Update Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to your contact section
3. Fill out and submit the form
4. Check your email for the message

## Alternative: Use Netlify Forms or Formspree

If you prefer not to use EmailJS, you can also use:

- **Netlify Forms** (if deploying to Netlify)
- **Formspree** (form backend service)
- **Vercel Forms** (if deploying to Vercel)

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that your email service is properly configured in EmailJS
- Verify that your template variables match the ones used in the code
- Check the browser console for any error messages
