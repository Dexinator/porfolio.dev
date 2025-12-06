# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context & Purpose

This is the professional portfolio of **Jorge Badillo**, designed to showcase skills and experience for job opportunities as a **Developer** or **Data Analyst**.

### Professional Profile

**Career Background:**
- Started career in data analysis, specifically in reporting and auditing
- In early 2020, became a freelance consultant offering decision-making services for SMEs
- Identified client needs for digital services (inventory control, order management, e-commerce) and specialized in developing these solutions

**Experience Highlights:**
- Worked with diverse clients: government, private companies, and foundations
- Managed integral projects, including hiring temporary staff (designers, administrators, developers)
- Full-stack developer with stronger frontend experience, particularly in **Astro framework**
- Designed complete architectures: **PostgreSQL** (database), **Node.js** (backend), **Astro** (frontend)
- Integrated services: **AWS S3**, payment gateways (**Stripe**, **Mercado Pago**)
- Proficient with modern AI tools, specifically **Claude Code**

**Deployment Stack:**
- **Backend & Database**: Heroku
- **Frontend**: Vercel or Netlify

**Career Goals:**
- Seeking employment to specialize in development and step away from business management
- Planning to pursue a **Master's in Data Science** in the coming years
- Looking for a position that allows time for academic preparation

### Content Guidelines

When generating or editing content for this portfolio:
- **Tone**: Professional, concise, results-oriented
- **Focus**: Highlight problem-solving abilities and technical versatility
- **Languages**: All content must be available in both English and Spanish
- **Objective**: Position Jorge as a versatile developer with data analysis background, ideal for roles requiring both technical development and data-driven decision making

### Key Technologies to Emphasize
- **Frontend**: Astro, React, Tailwind CSS, TypeScript
- **Backend**: Node.js, Python, PHP
- **Database**: PostgreSQL, MySQL
- **DevOps**: Docker, AWS (S3)
- **Deployment**: Heroku (backend/DB), Vercel/Netlify (frontend)
- **Integrations**: Stripe, Mercado Pago
- **Data**: Analysis, Reporting, Business Intelligence

---

## Build and Development Commands

```bash
# Development (hot reload)
docker-compose --profile dev up

# Production (nginx)
docker-compose --profile prod up

# Rebuild containers
docker-compose --profile dev up --build
```

## Architecture Overview

Bilingual (English/Spanish) portfolio website built with Astro 4, Tailwind CSS, and TypeScript.

### Internationalization (i18n)

- **Languages**: English (`en`) and Spanish (`es`), configured in `src/i18n/ui.ts`
- **Default language**: English
- **URL structure**: Language-prefixed routes (`/en/`, `/es/`)
- **Content files**: JSON files in `src/texts/` store localized content (hero.json, projects.json, experience.json, education.json, aboutme.json, footer.json)
- **Language detection**: `getLangFromUrl()` in `src/i18n/utils.ts` extracts language from URL path

### Page Structure

- `src/pages/index.astro` - Root redirect
- `src/pages/en/index.astro` and `src/pages/es/index.astro` - Localized home pages
- `src/pages/en/projects.astro` and `src/pages/es/proyectos.astro` - All projects pages (grid view)
- `src/pages/en/steam.astro` and `src/pages/es/steam.astro` - Steam project detail pages

### Component Organization

- `src/layouts/Layout.astro` - Base layout with Header, Footer, theme support
- `src/components/` - Section components (Hero, Experience, Projects, AboutMe, Education)
- `src/components/icons/` - SVG icon components for technologies (Docker, Python, PHP, NextJS, etc.)

### Projects Component

`src/components/Projects.astro` supports two display modes:

```astro
<!-- List view (detailed, default) - used on home page -->
<Projects featured={true} />

<!-- Grid view (compact) - used on /projects page -->
<Projects view="grid" />
```

**Props:**
- `featured` (boolean): Show only projects marked as `featured: true`
- `view` ("list" | "grid"): Display mode

**projects.json structure:**
```json
{
  "es": {
    "projects": {
      "title": "Proyectos",
      "featuredTitle": "Proyectos Destacados",
      "viewAll": "Ver todos los proyectos",
      "allProjectsUrl": "/es/proyectos",
      "labels": { "code": "Code", "preview": "Preview", "about": "Acerca de" },
      "items": [
        {
          "title": "...",
          "description": "...",
          "link": "https://...",
          "github": "https://...",
          "image": "/projects/...",
          "tags": ["PYTHON", "DOCKER"],
          "featured": true
        }
      ]
    }
  }
}
```

The "Acerca de" button opens a modal with the project description.

### Custom Rehype Plugin

`src/plugins/rehype-chart.js` transforms markdown code blocks with `language-chart` into ApexCharts containers. Chart data is stored in `data-chart` attributes.

### Styling

- Tailwind CSS with dark mode (`class` strategy)
- Onest Variable font from Fontsource
- Global styles defined in Layout.astro
