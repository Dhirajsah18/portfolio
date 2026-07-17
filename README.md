# Dhiraj Kumar Sah — Portfolio

Modern glassmorphism portfolio built with React + Vite + Tailwind CSS, featuring a light/dark theme toggle with two distinct palettes:

- **Light mode** — warm "desert" palette (cornsilk, papaya-whip, tea-green, light-bronze)
- **Dark mode** — deep "ocean" palette (deep-twilight, bright-teal-blue, turquoise-surf, light-cyan)

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build -> dist/
```

## Editing content

All text content (name, bio, skills, projects, education, experience, social links) lives in **`src/data.js`**. Edit that file to update the site — no need to touch components.

## Before deploying

1. Add your resume as `public/your-cv.pdf` (the "Download CV" button links to `/your-cv.pdf`).
2. Update `github` / `link` fields in `src/data.js` for each project with real repo/live URLs.
3. Swap in real project screenshots in `src/assets/` if you have better ones (referenced in `src/components/Projects.jsx`).

## Deploy

Same flow as your other projects — push to GitHub, import into Vercel, done.

```bash
git init
git add .
git commit -m "Portfolio v2"
git remote add origin <your-repo-url>
git push -u origin main
```

Then connect the repo on [vercel.com](https://vercel.com) and deploy.
