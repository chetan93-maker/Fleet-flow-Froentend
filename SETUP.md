# FleetFlow Landing Page - Setup & Running Guide

## 🎯 Project Overview

FleetFlow is a modern, high-converting SaaS landing page for a vehicle management system. Built with React, Tailwind CSS, and Framer Motion.

**Live Features:**
- 8 complete landing page sections
- Dark/Light mode toggle
- Fully responsive design
- Smooth animations
- Working contact form
- Mobile hamburger menu
- Production-ready code

## 📋 System Requirements

- **Node.js:** 16.0.0 or higher
- **npm:** 8.0.0 or higher (or yarn/pnpm)
- **OS:** Windows, macOS, or Linux

## 🚀 Installation & Setup

### 1. Navigate to Project Directory

```bash
cd fleetflow-landing
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

Or using pnpm:
```bash
pnpm install
```

**What gets installed:**
- React 18.2
- Tailwind CSS 3
- Framer Motion 10
- React Icons & Lucide React
- Vite (build tool)

## 🏃 Running the Project

### Development Server

```bash
npm run dev
```

**Expected output:**
```
VITE v4.4.5  ready in 245 ms

➜  Local:   http://localhost:3000/
➜  Press h to show help
```

- Opens automatically in your default browser
- Hot module reloading enabled (changes update instantly)
- Press `h` in terminal for help

### Production Build

```bash
npm run build
```

**Creates `dist/` folder** with:
- Minified HTML, CSS, JS
- Optimized assets
- Ready for deployment

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally at `http://localhost:4173/`

## 🧪 Testing the Features

### 1. **Navigation & Dark Mode**
   - Click theme toggle (☀️/🌙) in navbar
   - Scroll to sections using nav links
   - Test mobile menu on small screens

### 2. **Hero Section**
   - See "Start Free Trial" and "Book Demo" CTAs
   - View dashboard mockup
   - Check responsive layout

### 3. **Features**
   - Hover over cards for animations
   - See 6 feature cards with icons
   - Gradient accents appear on hover

### 4. **Automation Flow**
   - View 8-step automation timeline
   - Check mobile vertical timeline
   - Notice animated arrows between steps

### 5. **Pricing Section**
   - Toggle between Monthly/Annual
   - See "Save 30%" badge appear
   - "Most Popular" plan is scaled larger
   - Try feature list expansion

### 6. **Benefits Section**
   - Hover over benefit cards
   - See metrics highlight
   - View stats banner at bottom

### 7. **Testimonials**
   - Read 3 customer reviews
   - See star ratings
   - Check social proof badges

### 8. **Contact Form**
   - Fill in form fields
   - Submit the form
   - Success message appears
   - Form resets after 3 seconds

### 9. **Footer**
   - Navigate footer links
   - Click social icons
   - Hover effects work

## 🎨 Customization Guide

### Change Brand Colors

Edit `src/assets/styles.js` or modify `tailwind.config.js`:

```js
colors: {
  primary: {
    600: '#your-color'
  }
}
```

### Change Fonts

Edit `index.html`:
```html
<!-- Add your fonts from Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:ght@400;700" rel="stylesheet">
```

Then update `tailwind.config.js`:
```js
fontFamily: {
  inter: ['YourFont', 'sans-serif'],
}
```

### Modify Content

- **Hero:** Edit `src/components/Hero.jsx`
- **Features:** Edit `src/components/Features.jsx`
- **Pricing:** Edit `src/components/Pricing.jsx`
- **Form Fields:** Edit `src/components/ContactForm.jsx`

### Add New Sections

1. Create component in `src/components/NewSection.jsx`
2. Import in `src/pages/Home.jsx`
3. Add to JSX: `<NewSection />`

## 📦 Deployment

### Vercel (Recommended - Free for SaaS)

```bash
npm run build
# Drag dist/ folder to Vercel
# Or use: vercel --prod
```

### Netlify

```bash
npm run build
# Connect GitHub repo or drag dist/ folder
# Auto-deploys on git push
```

### Traditional Hosting (Nginx, Apache, etc)

```bash
npm run build
# Upload dist/ folder to your server
# Set root to dist/ folder
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔧 Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- --port 3001
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Animations Not Working

- Check browser supports CSS animations
- Clear browser cache
- Ensure Framer Motion is installed: `npm list framer-motion`

### Dark Mode Not Persisting

- Check localStorage is enabled in browser
- Clear browser cookies/storage
- Check DevTools Console for errors

### Form Not Submitting

- Check browser console for errors
- Ensure all required fields are filled
- Form logs to console by default (integrate email service)

## 📊 Performance Metrics

Expected performance (Lighthouse):
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## 🔐 Security Notes

- No sensitive data stored locally
- Forms don't send to server by default
- Integrate with email service (Sendgrid, Mailgun, etc)
- Use HTTPS in production

## 📚 Additional Resources

- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion/
- **Vite Docs:** https://vitejs.dev

## 💡 Next Steps

1. ✅ Install and run locally
2. ✅ Test all features
3. ✅ Customize colors/content
4. ✅ Integrate form service
5. ✅ Deploy to production

## 🤝 Support & Issues

- Check README.md for feature overview
- Review component files for prop usage
- Check console for error messages
- All code includes comments

---

**Ready to launch? You're all set!** 🚀

Questions? Each component is well-commented and modular for easy customization.
