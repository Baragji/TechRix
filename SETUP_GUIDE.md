# 🚀 TechFlow Development Setup Guide

## 📁 Project Structure (Clean & Organized)

```
TechFlows-main/
├── src/                     # Source code
│   ├── app/                # Next.js app router
│   ├── components/         # React components
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities
│   ├── styles/             # Styling
│   └── types/              # TypeScript types
├── public/                 # Static assets
├── config/                 # Configuration files
│   ├── deployment/         # Deployment configs
│   ├── jest/               # Testing config
│   └── prettier/           # Code formatting
├── tools/                  # Development tools
│   ├── scripts/            # Build & dev scripts
│   ├── testing/            # Test utilities
│   └── debugging/          # Debug tools
├── docs/                   # Documentation
│   ├── development/        # Dev docs
│   ├── architecture/       # Architecture docs
│   └── guides/             # User guides
└── README.md               # Main readme
```

## ✅ Project Successfully Organized!

**All files have been cleaned up and organized following Next.js best practices.**

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed structure overview.

## Quick Start for Real-time Previews

### Option 1: Vercel Dev (Recommended)
```bash
# First time setup
vercel login
vercel link

# Daily development (instant updates + public URL)
npm run dev:vercel
```

### Option 2: Ngrok Tunnel (Alternative)
```bash
# Install ngrok globally
npm install -g ngrok

# Start development with public URL
npm run dev:tunnel
```

### Option 3: Local Development (Improved)
```bash
# Start with no cache (for consistent updates)
npm run dev:no-cache

# Start fresh (clears cache first)
npm run dev:fresh

# Network access (for other devices)
npm run dev:network
```

## Available Scripts

- `npm run dev` - Standard development
- `npm run dev:fresh` - Clear cache and start fresh
- `npm run dev:no-cache` - Development without caching
- `npm run dev:network` - Access from other devices on network
- `npm run dev:vercel` - Vercel development with public URL
- `npm run dev:tunnel` - Ngrok tunnel with public URL
- `npm run clear-cache` - Clear all development caches

## Browser Issues Fix

If you see differences between browsers:
1. Use `Ctrl+Shift+R` (hard refresh)
2. Use `npm run dev:no-cache`
3. Use `npm run clear-cache` then `npm run dev:fresh`

## Setup Instructions

### 1. Connect to GitHub
```bash
git add .
git commit -m "Initial commit with real-time dev setup"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 2. Connect to Vercel
```bash
vercel login
vercel link
```

### 3. Start Development
```bash
npm run dev:vercel
```

## Troubleshooting

### Port 3000 in use
```bash
lsof -ti:3000 | xargs kill -9
```

### Cache issues
```bash
npm run clear-cache
npm run dev:fresh
```

### Browser not updating
- Use `Ctrl+Shift+R` for hard refresh
- Use `npm run dev:no-cache`
- Clear browser cache and cookies for localhost
