# SheReads Blog

A modern blog platform for book reviews and literary discussions.

## Features

- Responsive design
- Admin panel for content management
- Blog post management
- Category organization
- Image upload support

## Deployment Instructions

### Prerequisites

- GitHub account
- Netlify account

### Setup

1. Fork this repository to your GitHub account
2. Deploy to Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Select GitHub as your Git provider
   - Choose your repository
   - Configure the build settings:
     - Build command: (leave empty)
     - Publish directory: ./
   - Click "Deploy site"

3. Enable Identity and Git Gateway:
   - Go to Site settings > Identity
   - Enable Identity service
   - Go to Site settings > Identity > Services
   - Enable Git Gateway
   - Configure registration preferences

### Admin Access

1. Visit `https://your-site-name.netlify.app/admin`
2. Sign up for an account
3. You can now manage blog posts, pages, and other content

## Local Development

1. Clone the repository
2. Open the files in your preferred code editor
3. Make changes and test locally
4. Push changes to GitHub to trigger Netlify deployment

## Content Management

The admin panel allows you to:
- Create and edit blog posts
- Upload featured images
- Manage categories
- Edit static pages
- Preview changes before publishing 