# Myriad Hive Dao - Manhwa Reader

![App Preview](https://imgix.cosmicjs.com/aecd63a0-4da3-11f1-9690-df5854985cf2-autopilot-photo-1551244072-5d12893278ab-1778550083282.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A dark, atmospheric manhwa reading platform built with Next.js and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 📖 Vertical scroll manhwa reader
- 🎨 Chapter gallery with cover art
- 👤 Character profiles with cultivation details
- 💬 Dialogue and caption overlays on panels
- 🌑 Dark cinematic theme
- 📱 Mobile-optimized responsive design

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0284e5a963c4f5f0da46d6&clone_repository=6a0285b7a963c4f5f0da4715)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: can u use the story to make a manhwa with pictures title Myriad Hive Dao..."

### Code Generation Prompt

> "Build a Next.js application for a website called 'Can use story'. The content is managed in Cosmic CMS with the following object types: characters, chapters, panels. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun (or Node.js 18+)
- A Cosmic account

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all chapters
const { objects } = await cosmic.objects
  .find({ type: 'chapters' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types: chapters, panels, and characters - all connected through object relationships.

## Deployment

Deploy to Vercel or Netlify with environment variables set.

<!-- README_END -->