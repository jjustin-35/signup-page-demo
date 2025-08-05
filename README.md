# Modern Signup Page

A modern, responsive authentication page built with TypeScript, Vite, and native Web Components. Features a clean, user-friendly interface with form validation, password strength checking, and social media login options.

## GitHub Pages

[Signup Page](https://jjustin-35.github.io/signup-page-demo/#signup)

## Features

- **Responsive Design**: Responsive approach with modern UI/UX
- **Form Validation**: Real-time validation with error messages
- **Password Strength Checking**: Visual indicators for password requirements
- **Web Components**: Modular, reusable custom elements
- **TypeScript**: Type-safe development experience
- **Hash-based Routing**: Simple client-side routing
- **Modern Build System**: Vite for fast development and optimized builds

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Web Components** - Native browser component system
- **CSS3** - Modern styling with custom properties
- **HTML5** - Semantic markup

## Installation & Setup
You need to have Node.js (v22 or higher) and yarn installed.

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/jjustin-35/signup-page-demo.git
   cd signup-page-demo
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build

# Deployment
yarn deploy       # Deploy to GitHub Pages
```

## Project Structure & Architecture

### Introduction
The project follows a **component-based architecture** using native Web Components, providing:
- **Modularity**: Each component is self-contained with its own logic and styles
- **Reusability**: Components can be easily reused across different pages
- **Maintainability**: Clear separation of concerns and isolated functionality

### Structure
```
signup-page-demo/
├── src/
│   ├── components/          # Reusable Web Components
│   │   ├── Checkbox/        
│   │   ├── Field/           
│   │   │   └── passwordHint/ 
│   │   ├── Icon/            
│   │   ├── SignupForm/      
│   │   └── WarningHint/     
│   ├── pages/              # Page-level components
│   │   ├── Home/           
│   │   └── SignUp/         
│   ├── helpers/            # Utility functions
│   │   ├── mockApi.ts      
│   │   └── validation.ts   
│   ├── config.ts           
│   ├── global.css          
│   └── main.ts             # Application entry point
├── public/                 # Static assets
│   └── icons/              
├── dist/                   # Build output
└── index.html              # Main HTML file
```

## AI Tools Usage

This project was developed with assistance from AI tools to enhance productivity and code quality:

### **How AI Was Used**

- **Component Design**: AI assisted in creating reusable Web Component patterns
- **Validation Logic**: AI helped check form validation with proper error handling
- **Styling Approach**: AI suggested modern CSS patterns and responsive design techniques
- **Code Review**: AI provided suggestions for code optimization and best practices
- **Problem Solving**: AI helped solve problems and improve code quality

## Deployment

### GitHub Pages
1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages"
3. **Automatic Deployment**: Code will deploy automatically on push to main branch

### Adding New Components
1. Create a new directory in `src/components/`
2. Implement the component using Web Components
3. Add TypeScript definitions
4. Include component-specific styles
5. Register the component in `main.ts`

### Styling Guidelines
- Use CSS custom properties for theming
- Follow BEM methodology for class naming
- Implement responsive design approach
- Use semantic HTML elements

## License
MIT License - feel free to use this project for your own purposes.