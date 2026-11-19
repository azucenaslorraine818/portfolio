# Lorraine Azucenas — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS v4**, routed with React Router and animated with Framer Motion. Deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
npm run preview  # serve the production build
```

## Project structure

```
public/images/         optimized photos + screenshots (.webp)
src/data/profile.js    bio, skills, leadership, photos  <- edit text here
src/data/projects.js   both case studies               <- edit text here
src/components/        reusable UI (Header, Polaroid, Lightbox, ...)
src/components/sections/  Hero, Work, About, Skills, BeyondCode, Contact
src/pages/             Home, CaseStudy (one template for every project), NotFound
vercel.json            rewrites every route to index.html so refreshing /projects/... works
```

To add a project, add one more object to `src/data/projects.js` with the same fields; the home grid and the case study page pick it up automatically.

## Deploy to Vercel

1. Push this folder to a public GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
3. Click **Deploy**. Then open the live URL, click through both case studies, and refresh on `/projects/mindbloom` to confirm it still loads.

## Accessibility notes

- Dark ink text (`#2A2B3D`) on every palette color is 5.8:1 or better; the pastels are used as backgrounds, never as text on light backgrounds.
- Skip link, visible focus rings, alt text on every image, keyboard-operable screenshot viewer (native `<dialog>`), and all motion respects `prefers-reduced-motion`.
