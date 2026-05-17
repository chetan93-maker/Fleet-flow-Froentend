# FleetFlow - Modern Vehicle Management Landing Page

A production-ready SaaS landing page built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs on `http://localhost:3000`

## 📁 Project Structure

```
fleetflow-landing/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.jsx    # Navigation header with dark mode toggle
│   │   ├── Hero.jsx      # Main hero section with CTA
│   │   ├── Features.jsx   # 6 core features showcase
│   │   ├── AutomationFlow.jsx  # 8-step automation workflow
│   │   ├── Pricing.jsx    # 3 pricing tiers with toggle
│   │   ├── Benefits.jsx   # Business impact metrics
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── ContactForm.jsx  # Demo request form
│   │   └── Footer.jsx     # Footer with links & social
│   ├── pages/
│   │   └── Home.jsx       # Main landing page
│   ├── assets/            # Images & media
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & animations
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## ✨ Features

- ✅ **Fully Responsive** - Mobile, tablet, desktop optimized
- 🌙 **Dark/Light Mode** - Toggle with persistent storage
- ⚡ **Smooth Animations** - Framer Motion powered interactions
- 🎨 **Modern UI** - Premium SaaS design aesthetic
- 📱 **Mobile Menu** - Hamburger navigation
- 📋 **Working Form** - Contact/Demo request submission
- 🎯 **High Converting** - Optimized CTAs and sections
- ♿ **Accessible** - Semantic HTML & ARIA labels
- 🔍 **SEO Ready** - Proper meta tags & structure

## 🛠 Technology Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Animation library
- **Vite** - Fast build tool
- **React Icons & Lucide React** - Icon libraries

## 📦 Key Components

### Navbar
- Fixed sticky header
- Smooth scroll navigation
- Dark mode toggle
- Mobile-responsive hamburger menu

### Hero
- Gradient headline
- Dashboard mockup preview
- Twin CTAs (Start Free Trial, Book Demo)
- Trust badges

### Features
- 6 feature cards with icons
- Hover animations
- Gradient backgrounds
- Responsive grid

### AutomationFlow
- 8-step automation timeline
- Mobile vertical timeline
- Floating cards with indicators
- Result highlight section

### Pricing
- 3 pricing tiers
- Monthly/Annual toggle with savings badge
- "Most Popular" plan highlighting
- Feature comparison
- CTA buttons

### Benefits
- 4 business impact cards
- Metric highlights
- Stats banner with social proof
- Background animations

### Testimonials
- 3 customer reviews
- Star ratings
- Trust badges (ISO, Uptime, etc.)
- Avatar placeholders

### ContactForm
- 5 input fields
- Fleet size dropdown
- Success state with confirmation
- Contact info section

### Footer
- 4 link categories
- Social media icons
- Copyright & legal
- Company info

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize:
```js
colors: {
  primary: { /* Blue gradient */ },
  dark: { /* Dark mode colors */ }
}
```

### Typography
Fonts are loaded from Google Fonts:
- **Inter** - Body text
- **Poppins** - Headings

Edit in `index.html` to change.

### Animations
Tailwind animations defined in `tailwind.config.js`:
- `fadeIn` - Opacity transition
- `slideUp` - Y-axis slide + fade
- `slideDown` - Reverse slide
- `float` - Floating motion
- `glow` - Pulsing box shadow

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Other Providers
```bash
npm run build
# Deploy dist/ folder to your hosting
```

## 📝 Environment Notes

- No backend required - static landing page
- Form submission logs to console (integrate with email service)
- Dark mode preference saved to localStorage
- All assets are SVG/emoji for zero image dependencies

## 🤝 Support

For customizations or issues:
- Check component prop usage
- Review Framer Motion documentation
- Test responsive design with DevTools

---

**Built with ❤️ for modern fleet management**
