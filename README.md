# Signup Page

A modern signup page built with TypeScript, Vite, and native web technologies.

## Features

- Responsive design
- Form validation
- Password strength checking
- Social media login options
- Modern UI/UX

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: Select "GitHub Actions"
3. Code will automatically deploy when pushed to `main` or `master` branch

### Manual Deployment

```bash
# Install gh-pages
npm install gh-pages --save-dev

# Deploy to GitHub Pages
npm run deploy
```

## Tech Stack

- TypeScript
- Vite
- CSS3
- HTML5

## Project Structure

```
signup-page/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── helpers/       # Utility functions
│   └── global.css     # Global styles
├── public/            # Static assets
└── dist/              # Build output
```

## License

MIT License 