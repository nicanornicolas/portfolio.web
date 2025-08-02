# Project Reorganization Guide

To cleanly organize your portfolio project into a single `nikotron-next` directory with the proper structure, follow these steps:

## Directory Structure to Create

```
nikotron-next/
├── public/
│   ├── images/
│   │   ├── profile.webp
│   │   ├── professional-portrait.webp
│   │   └── projects/
│   │       ├── ai-chatbot.webp
│   │       ├── blockchain-voting.webp
│   │       └── ml-dashboard.webp
│   └── Nicanor_Nicolas_CV.pdf
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── sections/
│   │   │       ├── Hero.tsx
│   │   │       ├── About.tsx
│   │   │       ├── Skills.tsx
│   │   │       ├── FeaturedProjects.tsx
│   │   │       └── ContactForm.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── .gitignore
├── netlify.toml
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Manual Steps

1. **Create Directories**:
   - Create the `public/images/projects/` directory structure in `nikotron-next/`
   - Ensure `src/app/components/layout/` and `src/app/components/sections/` are created

2. **Move Files from Old Structure**:
   - Copy profile image from `nikotron/images/image (8).png` to `nikotron-next/public/images/profile.webp`
   - Create placeholder images for projects if needed
   - Create a placeholder CV file

3. **Verify Key Files**:
   - Ensure all component files (Navbar.tsx, Hero.tsx, etc.) are in their correct locations
   - Check that configuration files (next.config.js, tailwind.config.js, etc.) are present
   - Verify package.json has all necessary dependencies

4. **Install Dependencies**:
   ```
   cd nikotron-next
   npm install
   ```

5. **Run Development Server**:
   ```
   npm run dev
   ```

## Moving Forward

Once your project is properly organized, you can:

1. Delete redundant directories like the old `nikotron` folder
2. Commit the changes to your repository
3. Deploy to Netlify using the new structure

The reorganized project will be cleaner, follow best practices, and be easier to maintain. 