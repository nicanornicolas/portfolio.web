# Portfolio Next.js App

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS. Optimized for Vercel deployment.

## 🚀 Features

- **Next.js 13+ App Directory**: Modern React Server Components architecture
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards
- **Performance Optimized**: Image optimization, lazy loading, and code splitting
- **Scroll Animations**: Smooth reveal animations using Intersection Observer
- **Modern UI/UX**: Clean design with gradient backgrounds and hover effects

## 📁 Project Structure

```
portfolio-nextjs-app/
├── public/
│   ├── images/
│   │   ├── profile.png                    # Hero section profile image
│   │   ├── professional-portrait.webp     # About section image
│   │   ├── og-image.jpg                   # OpenGraph image
│   │   ├── twitter-image.jpg              # Twitter card image
│   │   ├── image (8).png                  # Favicon
│   │   └── projects/                      # Project screenshots
│   │       ├── ai-chatbot.webp
│   │       ├── blockchain-voting.webp
│   │       └── ml-dashboard.webp
│   └── Nicanor_Nicolas_CV.pdf             # Downloadable CV
├── src/
│   ├── app/
│   │   ├── globals.css                    # Global styles + Tailwind
│   │   ├── layout.tsx                     # Root layout
│   │   ├── page.tsx                       # Home page
│   │   └── components/
│   │       ├── layout/
│   │       │   ├── Footer.tsx
│   │       │   └── Navbar.tsx
│   │       └── sections/
│   │           ├── About.tsx
│   │           ├── ContactForm.tsx
│   │           ├── FeaturedProjects.tsx
│   │           ├── Hero.tsx
│   │           └── Skills.tsx
│   └── lib/
│       └── scrollReveal.ts               # Scroll animation utilities
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-nextjs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your images**
   - Replace placeholder files in `public/images/` with your actual images
   - Update `public/Nicanor_Nicolas_CV.pdf` with your CV

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - For contact form, you might need email service API keys

### Other Platforms

- **Netlify**: Works with Next.js static export
- **Railway**: Full-stack deployment
- **AWS Amplify**: Serverless deployment

## 🎨 Customization

### Colors & Branding
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: {
    // Your brand colors
  }
}
```

### Content
Update the following files with your information:
- `src/app/components/sections/Hero.tsx` - Personal info and social links
- `src/app/components/sections/About.tsx` - About section content
- `src/app/components/sections/Skills.tsx` - Your skills and technologies
- `src/app/components/sections/FeaturedProjects.tsx` - Your projects
- `src/app/components/sections/ContactForm.tsx` - Contact information

### Animations
Scroll reveal animations are handled by `src/lib/scrollReveal.ts`. Add reveal classes to components:
- `.reveal` - Default bottom-up animation
- `.reveal-left` - Slide in from left
- `.reveal-right` - Slide in from right
- `.reveal-card` - Card-style animation

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 