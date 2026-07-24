# Olabanji Peter Idowu | Frontend Developer Portfolio

This repository contains the completely redesigned and refactored personal product portfolio of Olabanji Peter Idowu. It is engineered from the ground up to showcase clean codebase architecture, optimized loading performance, robust SEO, and complete accessibility.

## 🚀 Key Features

- **Modern Architecture**: Clean separation of concerns with a feature-driven folder layout (`src/app`, `src/features`, `src/components`, `src/routes`, `src/hooks`).
- **Styling**: Built with **Tailwind CSS v4** utilizing direct theme variables and custom CSS properties for ultra-low design payload.
- **Dynamic Dark/Light Mode**: Automatic system theme detection (via `prefers-color-scheme`) with persistent local storage caching and smooth hardware-accelerated transitions.
- **Performance & Code-Splitting**: Route-based chunk splitting utilizing `React.lazy` and `React.Suspense` for Home and Project routes to minimize initial JS bundle sizes.
- **Search Engine Optimization (SEO)**: Custom `SEO` component wrapping pages to dynamically inject canonical links, Open Graph tags, Twitter Cards, and schema.org JSON-LD structured data (`Person` and `SoftwareApplication`).
- **Accessibility (WCAG AA)**: Semantic HTML tags, clear interactive focus outlines, screen-reader visibility helpers, and strict compatibility with `prefers-reduced-motion` modes.
- **Pinterest & Google Verification**: Kept indexing verification metadata intact without breaking search engine ranking parameters.

---

## 🛠️ Tech Stack

- **Framework**: React.js
- **Routing**: React Router DOM (v6+)
- **Build Tool**: Vite (with optimized Rollup chunking)
- **Styling**: Tailwind CSS (v4+)
- **Icons**: Lucide React / Custom SVG Component wrappers
- **SEO Management**: React Helmet Async

---

## 📂 Folder Structure

```
src/
├── app/                  # Main Router and Theme Provider wrappers
├── assets/               # Local SVGs and static brand assets
├── components/           # Reusable user interface components
│   ├── ui/               # Low-level UI atoms (ThemeToggle, BrandIcons)
│   ├── layout/           # Shared structure (Navbar, Footer, Layout wrapper)
│   └── common/           # SEO and loading state utilities
├── features/             # Feature-specific components
│   └── home/             # Home page modular layout grids
├── hooks/                # Custom React hooks (useTheme)
├── data/                 # Unified projects data and detailed case study texts
├── routes/               # Page routes (Home, ProjectDetail)
└── styles/               # Main index.css incorporating Tailwind layers
```

---

## 💻 Development Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build Production Target
Generates optimized HTML, CSS, and JS chunks under the `/dist` directory:
```bash
npm run build
```

### 4. Preview Production Build Local
```bash
npm run preview
```
