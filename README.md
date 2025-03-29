# Academic Portfolio Website

A modern, responsive academic portfolio website built with React, TypeScript, and Material-UI. This website is designed to showcase your academic work, research, publications, and teaching experience.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for:
  - Home/About
  - Publications
  - Research
  - Teaching
  - Contact
- Easy to customize and maintain
- Optimized for academic content

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/academic-portfolio.git
   cd academic-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## Customization

1. Update personal information:

   - Edit `src/pages/Home.tsx` to update your introduction
   - Modify `src/components/Navbar.tsx` to change your name
   - Update `src/components/Footer.tsx` with your social media links

2. Add your content:

   - Add your publications in `src/pages/Publications.tsx`
   - Update research areas in `src/pages/Research.tsx`
   - Add your courses in `src/pages/Teaching.tsx`
   - Update contact information in `src/pages/Contact.tsx`

3. Add your images:
   - Place your profile photo in the `public` directory as `your-photo.jpg`
   - Add research images to the `public` directory
   - Update image paths in the components

## Deployment to GitHub Pages

1. Add the following to your `package.json`:

   ```json
   {
     "homepage": "https://yourusername.github.io/academic-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. Install the gh-pages package:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

4. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select the `gh-pages` branch as the source
   - Save the changes

Your site will be available at `https://yourusername.github.io/academic-portfolio`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
