# StreamVibe - Streaming Service Frontend

A modern streaming service platform frontend implementation built with Minista, React, and SCSS. This is a frontend-only project that showcases UI/UX design and interactive components for a streaming service.

## Overview

This is a frontend demonstration project that simulates a streaming service interface. It focuses on UI components, animations, and responsive design without actual backend integration.

## Features

- 🎨 Pixel-perfect UI implementation
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎥 Video player UI with custom controls
- 💳 Interactive subscription plans comparison
- 🔍 Search UI implementation
- 🎮 Custom UI components
- 📋 Contact form with validation
- ♿ WCAG accessibility compliance
- 🎯 Performance optimized assets

## Tech Stack

### Core
- [Minista](https://minista.qranoko.jp/) - Static site generator
- [React](https://reactjs.org/) - UI Framework
- [SCSS](https://sass-lang.com/) - Styling

### Styling & UI
- [PostCSS](https://postcss.org/) - CSS Processing
- [Swiper](https://swiperjs.com/) - Touch Slider
- [IMask](https://imask.js.org/) - Input masking

### Development Tools
- [ESLint](https://eslint.org/) - Code Linting
- [Prettier](https://prettier.io/) - Code Formatting
- [Stylelint](https://stylelint.io/) - Style Linting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/streamvibe.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

### Build

To create a production build:
```bash
npm run build
```

To preview production build:
```bash
npm run preview
```

## Project Structure

```
streamvibe/
├── src/
│   ├── assets/          # Images, icons, and other static files
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Layout components
│   ├── modules/         # JavaScript modules
│   ├── pages/          # Page components
│   ├── sections/        # Page sections
│   └── styles/         # Global styles and SCSS utilities
├── public/             # Public static files
├── dist/               # Build output
└── minista.config.js   # Minista configuration
```

## Key Components

- **Custom Video Player UI**: Video preview with fullscreen support
- **Plans Comparison**: Interactive pricing and features table
- **Custom Select**: Accessible dropdown component
- **Support Form**: Contact form with validation
- **Responsive Navigation**: Mobile-friendly menu system
- **Grid System**: Flexible layout system
- **Icon System**: SVG icon management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
- Use SCSS modules for component styling
- Maintain accessibility standards (WCAG 2.1)
- Write responsive designs mobile-first
- Keep components modular and reusable
- Follow BEM methodology for CSS
- Use fluid typography and spacing

## Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:style` - Run Stylelint
- `npm run format` - Format code with Prettier

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Note

This is a frontend-only implementation meant for demonstration purposes. It does not include actual video streaming, authentication, or backend integration. All data is static and simulated for demonstration purposes.
