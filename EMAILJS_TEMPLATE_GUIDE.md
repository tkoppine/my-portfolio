# EmailJS Template Setup - Visual Guide

## What You're Seeing in the EmailJS Dashboard:

### 1. Subject Field (Top of template):

**Exactly copy and paste this:**

```
New Contact Form Message from {{from_name}}
```

### 2. Content Field (Main body area):

**Exactly copy and paste this:**

```
Hi Teja,

You received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
Sent from your portfolio website contact form.
```

### 3. To Email Field (Right side):

**Set this to:**

```
tkoppine@asu.edu
```

### 4. From Name Field (Right side):

**Set this to:**

```
{{from_name}}
```

### 5. From Email Field (Right side):

**Set this to:**

```
{{from_email}}
```

### 6. Reply To Field (Right side):

**Set this to:**

```
tkoppine@asu.edu
```

## Important Notes:

- The `{{}}` brackets are **variables** that get replaced with actual form data
- Don't change the variable names - they must match exactly
- You can customize the text around the variables
- Make sure "To Email" is set to your email: tkoppine@asu.edu

## After Saving:

1. Copy the **Template ID** that EmailJS generates
2. Paste it in your `.env.local` file
3. Test the form!

## Example of What You'll Receive:

When someone named "John Doe" from "ABC Company" sends a message, you'll get:

**Subject:** New Contact Form Message from John Doe

**Body:**

```
Hi Teja,

You received a new message from your portfolio contact form:

Name: John Doe
Email: john@abccompany.com
Company: ABC Company

Message:
I'm interested in discussing a potential project with you.
Could we schedule a call this week?

---
Sent from your portfolio website contact form.
```
