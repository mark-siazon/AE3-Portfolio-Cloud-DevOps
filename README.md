# ELEC3 Cloud Computing Portfolio

A modern, high-performance portfolio website showcasing cloud computing and DevOps projects built with **Qwik**, **TypeScript**, and **Tailwind CSS**. Deployed on **GitHub Pages** with full static site generation (SSG).

🔗 **Live Site**: [https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/](https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/)

📎 **Portfolio case study:** [marksiazon.dev/projects/elec3-cloud-portfolio](https://www.marksiazon.dev/projects/elec3-cloud-portfolio)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Performance Optimizations](#performance-optimizations)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [License](#license)

## ✨ Features

### 🎨 UI/UX
- **Premium Design** - Glassmorphism, gradients, and micro-animations
- **Responsive Layout** - Mobile-first design with adaptive breakpoints
- **Dark Theme** - Sleek dark mode with cyan/blue accents
- **Interactive Cards** - Hover effects, glowing borders, and smooth transitions
- **Modal System** - Full-screen project details with keyboard navigation
- **Mobile-Optimized PDF Viewer** - Button prompt on mobile, embedded viewer on desktop

### ⌨️ Keyboard Navigation
- **ESC** - Close modal
- **← →** - Navigate between projects
- **Tab** - Focus navigation with visible rings
- **Keyboard Hint Tooltip** - Auto-appears after 2 seconds (desktop only)

### 🚀 Performance
- **Lazy Loading** - Images load only when visible
- **Optimized Images** - 850px width for 2x retina displays (~61 KB savings)
- **Font Optimization** - Preconnect hints for faster loading
- **No Render-Blocking** - Async font loading (~250ms savings)
- **Explicit Dimensions** - Prevents layout shift (CLS improvement)
- **Optimized Backdrop** - Removed blur for smooth mouse movement

### 📱 Mobile Features
- **Functional Hamburger Menu** - Smooth slide-down navigation
- **Stacked Buttons** - Vertical layout on small screens
- **Responsive Grid** - 1 column (mobile) → 2 (tablet) → 3-4 (desktop)
- **PDF Prompt** - No auto-download on mobile devices
- **Touch-Friendly** - Larger tap targets and spacing

### 🎯 SEO & Meta
- **Open Graph Tags** - Social media preview cards
- **Twitter Cards** - Optimized sharing on Twitter/X
- **JSON-LD** - WebSite, CollectionPage, FAQPage (see `src/seo/`)
- **llms.txt / llms-full.txt** - Assistant-readable index (`npm run seo:llms` to regenerate)
- **Sitemap** - XML sitemap in `public/sitemap.xml`
- **Robots.txt** - Proper crawler directives
- **Manifest.json** - PWA-ready configuration
- **Copyright Protection** - Meta tags and footer notice

### ♿ Accessibility
- **WCAG 2.1 AA Compliant** - Visible focus indicators
- **Keyboard Navigation** - Full keyboard support
- **ARIA Labels** - Semantic HTML throughout
- **Focus-Visible Rings** - Only on keyboard (not mouse)
- **Screen Reader Friendly** - Proper heading hierarchy

## 🛠️ Tech Stack

### Core
- **[Qwik](https://qwik.builder.io/)** - Resumable framework for instant-loading apps
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Next-generation build tool

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - Automated CI/CD pipeline
- **Static Adapter** - SSG for optimal performance

### Tools
- **Sharp** - Image optimization
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
AE3-Portfolio-Cloud-DevOps/
├── public/                      # Static assets
│   ├── card-img/               # Project card images (optimized)
│   ├── files/                  # PDF documents
│   ├── logo.svg                # Site logo
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO directives
├── src/
│   ├── components/
│   │   ├── footer/             # Footer with social links
│   │   ├── header/             # Navigation with hamburger menu
│   │   ├── hero/               # Landing hero section
│   │   ├── home/               # Home page components
│   │   │   └── project-gallery.tsx  # Project grid & modal
│   │   ├── project-card/       # Interactive project cards
│   │   ├── project-modal/      # Modal with keyboard shortcuts
│   │   ├── reflection/         # Reflection page components
│   │   └── router-head/        # SEO meta tags
│   ├── data/
│   │   └── projects.tsx        # Project data array
│   ├── routes/
│   │   ├── index.tsx           # Home page
│   │   └── reflection/         # Reflections page
│   ├── utils/
│   │   └── highlight.ts        # Text highlighting utility
│   ├── global.css              # Global styles
│   └── root.tsx                # App root
├── scripts/
│   └── optimize-images.js      # Image optimization script
├── .github/
│   └── workflows/
│       └── static.yml          # GitHub Pages deployment
├── adapters/
│   └── static/                 # Static adapter config
├── package.json
├── vite.config.ts              # Vite configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 24+ and npm (matches GitHub Actions)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mark-siazon/AE3-Portfolio-Cloud-DevOps.git
   cd AE3-Portfolio-Cloud-DevOps
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/)

### Development Workflow

```bash
# Development server with HMR
npm run dev

# Build for GitHub Pages (CI uses this)
npm run build:pages

# Preview production build
npm run preview

# Optimize images
npm run optimize:images

# Lint code
npm run lint

# Format code
npm run fmt
```

## ⚡ Performance Optimizations

### Image Optimization
All project card images are optimized to 850px width (2x for retina):

```bash
npm run optimize:images
```

**Results:**
- Project-Ass-1: 16.4 KB → 11.2 KB (31% smaller)
- Project-Ass-2: 24.1 KB → 15.6 KB (35% smaller)
- Project-Ass-4: 46.9 KB → 12.4 KB (74% smaller!)
- **Total savings: ~61 KB**

### Lazy Loading
Images use `loading="lazy"` and `decoding="async"` for optimal performance:
```tsx
<img 
  src={image} 
  loading="lazy" 
  decoding="async" 
  width="850" 
  height="478"
/>
```

### Font Optimization
Google Fonts are preconnected and loaded asynchronously:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

## ♿ Accessibility

### Keyboard Navigation
- **Tab** - Navigate through interactive elements
- **Enter/Space** - Activate buttons/links
- **ESC** - Close modal
- **Arrow Keys** - Navigate projects in modal

### Focus Indicators
```tsx
focus-visible:ring-2 
focus-visible:ring-cyan-400 
focus-visible:ring-offset-2
```

### ARIA Labels
All interactive elements have proper `aria-label` attributes:
```tsx
<button aria-label="Toggle menu">...</button>
<section aria-label="Project Gallery">...</section>
```

## 🚢 Deployment

### GitHub Pages
The site is automatically deployed via GitHub Actions on every push to `main`.

**Workflows:** `.github/workflows/static.yml` (Pages deploy) and `.github/workflows/ci.yml` (PR/push verify)

```yaml
- Node 24, npm ci, npm run build:pages
- Upload dist/AE3-Portfolio-Cloud-DevOps to GitHub Pages
```

### Manual Deployment

```bash
# Build for GitHub Pages (CI uses this)
npm run build:pages

# The dist/ folder contains the static site
# Upload dist/AE3-Portfolio-Cloud-DevOps/ to your hosting
```

### Base Path Configuration
The site is configured for GitHub Pages subdirectory deployment:

**vite.config.ts:**
```ts
base: '/AE3-Portfolio-Cloud-DevOps/'
```

All asset paths use `import.meta.env.BASE_URL` for proper resolution.

## � Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build:pages` | Build for GitHub Pages (client + SSG) |
| `npm run seo:llms` | Regenerate `public/llms.txt` from catalog JSON |
| `npm run build.client` | Build client only |
| `npm run build.server` | Build server/SSG only |
| `npm run preview` | Preview production build |
| `npm run optimize:images` | Optimize card images with Sharp |
| `npm run lint` | Lint TypeScript files |
| `npm run fmt` | Format code with Prettier |

## 🎓 Projects Showcased

1. **Spring Boot RESTful Web Services** - User Management REST API
2. **AWS Deployment Guide** - EC2, S3, RDS integration
3. **Docker & Containerization** - Learning plan and best practices
4. **Docker Image Deployment** - Node.js containerization lab
5. **Virtualization vs Containerization** - Research analysis
6. **Kubernetes Home Lab** - Minikube orchestration
7. **Terraform Survivor** - IaC-controlled browser game

## 📄 License

This project is for **educational purposes only**.

© 2025 Mark Angelo D. Siazon. All Rights Reserved.

---

## 🙏 Acknowledgments

- **IV-ACSAD** - Academic Year 2025-2026
- **Prof. Niño Narido** - ELEC3 Cloud Computing
- **Qwik Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first approach

---

**Built with ❤️ using Qwik, TypeScript, and Tailwind CSS**
