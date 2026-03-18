# DatLT Portfolio Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a stunning, modern portfolio website for Le Thanh Dat — a Senior Frontend Developer with 5+ years of experience — to showcase professional expertise, projects, and career journey.

**Architecture:** Single-page application built with Vite + React + TypeScript. Sections rendered as scroll-based components with smooth animations. All data is stored as static TypeScript files for easy updates with no backend required.

**Tech Stack:** Vite, React 18, TypeScript, Vanilla CSS (with CSS custom properties), Framer Motion (animations), Lucide React (icons)

---

## File Structure

```
DatLT-Portfolio/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.ico
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css                  # Global design system
│   ├── data/
│   │   ├── profile.ts             # Personal info, summary, education
│   │   ├── skills.ts              # Technology skills with proficiency levels
│   │   ├── projects.ts            # Professional experience / projects
│   │   └── navigation.ts          # Nav links config
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.css
│   │   ├── Experience/
│   │   │   ├── Experience.tsx
│   │   │   ├── Experience.css
│   │   │   └── ExperienceCard.tsx
│   │   ├── Skills/
│   │   │   ├── Skills.tsx
│   │   │   ├── Skills.css
│   │   │   └── SkillBar.tsx
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   ├── Projects.css
│   │   │   └── ProjectCard.tsx
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   └── common/
│   │       ├── SectionTitle.tsx
│   │       ├── SectionTitle.css
│   │       ├── ScrollReveal.tsx
│   │       └── GradientText.tsx
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   └── useInView.ts
│   └── utils/
│       └── constants.ts
```

---

## Design System

### Color Palette (Dark Mode)
```
--bg-primary:       #0a0a0f         (Deep space black)
--bg-secondary:     #12121a         (Card backgrounds)
--bg-tertiary:      #1a1a2e         (Elevated surfaces)
--text-primary:     #f0f0f5         (Main text)
--text-secondary:   #8888a0         (Dimmed text)
--accent-primary:   #6366f1         (Indigo brand)
--accent-secondary: #818cf8         (Lighter indigo)
--accent-gradient:  linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)
--success:          #10b981         (Green accents)
--border:           rgba(255,255,255,0.08)
```

### Typography
- **Headings:** `'Inter', sans-serif` — weight 700/800
- **Body:** `'Inter', sans-serif` — weight 400/500
- **Code/Tech:** `'JetBrains Mono', monospace`

### Sections Overview
| # | Section     | Description |
|---|-------------|-------------|
| 1 | **Navbar**  | Fixed glassmorphism nav with scroll-spy active state |
| 2 | **Hero**    | Full viewport intro with animated title, role, CTA buttons |
| 3 | **About**   | Professional summary, education, key highlights |
| 4 | **Experience** | Timeline of professional projects (Appro, Income, FWD-HO, Spores) |
| 5 | **Skills**  | Animated skill bars grouped by category with proficiency levels |
| 6 | **Projects** | Visual cards for each project with tech stack pills |
| 7 | **Contact** | Contact form + social links |
| 8 | **Footer**  | Minimal footer with credits |

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`
- Create: `src/main.tsx`, `src/App.tsx`

- [ ] **Step 1: Initialize Vite + React + TypeScript project**

```bash
cd "/Users/ledat/Documents/Software/Vibe code/DatLT-Portfolio"
npx -y create-vite@latest ./ --template react-ts
```

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install framer-motion lucide-react
```

- [ ] **Step 3: Add Google Fonts to `index.html`**

Add inside `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<title>Le Thanh Dat — Senior Frontend Developer</title>
<meta name="description" content="Portfolio of Le Thanh Dat — Senior Frontend Developer with 5+ years of experience in ReactJS, NextJS, TypeScript, and NodeJS.">
```

- [ ] **Step 4: Verify the app starts**

```bash
npm run dev
```
Expected: Vite dev server running at `http://localhost:5173`

---

## Task 2: Design System & Global Styles

**Files:**
- Create: `design-system/MASTER.md` (via ui-ux-pro-max skill)
- Create: `src/index.css`

- [ ] **Step 1: Generate Design System**

Run the UI/UX Pro Max skill to generate the portfolio design system:
```bash
python3 ~/.gemini/antigravity/skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "portfolio developer dark mode modern minimalist" --design-system --persist -p "DatLT Portfolio"
```

- [ ] **Step 2: Create the global design system in `src/index.css`**

Translate the generated rules from `design-system/MASTER.md` into CSS custom properties for colors, typography, spacing, transitions, shadows, border radius. CSS reset, scrollbar styling, selection color, and section container utility class.

- [ ] **Step 3: Verify styles load correctly**

Expected: Page renders with dark background, custom scrollbar, and Inter font based on the generated design tokens.

---

## Task 3: Static Data Files

**Files:**
- Create: `src/data/profile.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/navigation.ts`

- [ ] **Step 1: Create `src/data/profile.ts`**

Contains: name ("Le Thanh Dat"), title, summary, highlights array, education (FPT University 2017-2021), and placeholder contact links (email, github, linkedin).

- [ ] **Step 2: Create `src/data/skills.ts`**

22 skills with `Skill` interface: `{ name, proficiency (1-5), years, category }`. Categories: Frontend, Language, Backend, Database, Architecture, Styling, DevTools, Cloud, Testing, Process, Mobile, State Management.

Key mappings:
- ReactJS: proficiency 4, 5 years, Frontend
- NextJS: proficiency 4, 4 years, Frontend
- TypeScript: proficiency 4, 5 years, Language
- JavaScript: proficiency 4, 6 years, Language
- NodeJS: proficiency 3, 2 years, Backend
- MongoDB: proficiency 3, 2 years, Database

- [ ] **Step 3: Create `src/data/projects.ts`**

4 projects with `Project` interface: `{ name, codeName, role, duration, teamSize?, description, responsibilities[], technologies[], highlights[] }`.

Projects:
1. **"Banking Super App"** (Appro) — Senior FE, Aug 2024–Present, 80 people
2. **"Partner Journey Platform"** (Income) — Senior Full-Stack, Mar 2023–Aug 2024
3. **"Insurance Digital Platform"** (FWD-HO) — Senior Full-Stack, Aug 2022–Feb 2023
4. **"Blockchain Marketplace"** (Spores) — Senior ReactJS, Dec 2021–Jul 2022

- [ ] **Step 4: Create `src/data/navigation.ts`**

Array of `{ label, href }` for sections: Home, About, Experience, Skills, Projects, Contact.

---

## Task 4: Common Components & Hooks

**Files:**
- Create: `src/hooks/useInView.ts` — IntersectionObserver hook (trigger once)
- Create: `src/hooks/useScrollSpy.ts` — Active section detection
- Create: `src/components/common/SectionTitle.tsx` + CSS
- Create: `src/components/common/ScrollReveal.tsx` — Framer Motion wrapper
- Create: `src/components/common/GradientText.tsx`

- [ ] **Step 1: Create `useInView` hook** — Returns `{ ref, isInView }` using IntersectionObserver
- [ ] **Step 2: Create `useScrollSpy` hook** — Returns active section ID based on scroll position
- [ ] **Step 3: Create `SectionTitle`, `ScrollReveal`, and `GradientText` common components**

---

## Task 5: Navbar Component

**Files:**
- Create: `src/components/Navbar/Navbar.tsx`
- Create: `src/components/Navbar/Navbar.css`

- [ ] **Step 1: Build the Navbar**

Features:
- Fixed position with glassmorphism backdrop blur
- Logo (initials "LD" with gradient)
- Navigation links with scroll-spy active state (gradient underline)
- Hamburger menu for mobile
- Transparent → glass background on scroll

- [ ] **Step 2: Verify navbar renders, scroll behavior, and mobile menu**

---

## Task 6: Hero Section

**Files:**
- Create: `src/components/Hero/Hero.tsx`
- Create: `src/components/Hero/Hero.css`

- [ ] **Step 1: Build the Hero section**

Features:
- Full viewport height (`100vh`)
- Animated text: "Hi, I'm" → **Le Thanh Dat** (gradient)
- Role title: "Senior Frontend Developer"
- Summary subtitle
- Two CTA buttons: "View My Work" (gradient) + "Get In Touch" (outline)
- Subtle geometric/particle background
- Scroll-down indicator arrow at bottom
- Staggered Framer Motion entry animations

- [ ] **Step 2: Verify hero renders fullscreen with animations**

---

## Task 7: About Section

**Files:**
- Create: `src/components/About/About.tsx`
- Create: `src/components/About/About.css`

- [ ] **Step 1: Build the About section**

Features:
- Professional summary text
- Animated stat counters: 5+ Years, 6+ Technologies, 4 Projects, 4 Countries
- Education card (FPT University)
- Key highlights list with animated checkmarks

- [ ] **Step 2: Verify About section with scroll-triggered counters**

---

## Task 8: Experience Timeline

**Files:**
- Create: `src/components/Experience/Experience.tsx`
- Create: `src/components/Experience/Experience.css`
- Create: `src/components/Experience/ExperienceCard.tsx`

- [ ] **Step 1: Build the Experience timeline**

Features:
- Vertical timeline with connecting line
- `ExperienceCard` with project name, role, duration, team size, description
- Expandable responsibilities list
- Technology pills and highlight badges
- Alternating left/right on desktop, stacked on mobile
- Scroll-reveal animation per card

- [ ] **Step 2: Verify timeline with 4 project entries renders correctly**

---

## Task 9: Skills Section

**Files:**
- Create: `src/components/Skills/Skills.tsx`
- Create: `src/components/Skills/Skills.css`
- Create: `src/components/Skills/SkillBar.tsx`

- [ ] **Step 1: Build the Skills section**

Features:
- Category filter tabs
- Animated skill bars with gradient fill
- Proficiency mapping: Level 2→40%, Level 3→60%, Level 4→80%, Level 5→100%
- Each bar shows: skill name, years, animated percentage fill
- Staggered animation on scroll reveal

- [ ] **Step 2: Verify all 22 skills render with correct bars and filtering**

---

## Task 10: Projects Section (Visual Cards)

**Files:**
- Create: `src/components/Projects/Projects.tsx`
- Create: `src/components/Projects/Projects.css`
- Create: `src/components/Projects/ProjectCard.tsx`

- [ ] **Step 1: Build the Projects section**

Features:
- Responsive grid of project cards
- Each card: gradient header, project name, description, tech pills, highlight badges
- Hover effect: lift + glow shadow + border color change

- [ ] **Step 2: Verify 4 project cards render in responsive grid**

---

## Task 11: Contact Section

**Files:**
- Create: `src/components/Contact/Contact.tsx`
- Create: `src/components/Contact/Contact.css`

- [ ] **Step 1: Build the Contact section**

Features:
- Title: "Let's Work Together"
- Contact info cards (Email, GitHub, LinkedIn) with hover effects
- Styled contact form (Name, Email, Message) with floating labels
- Gradient submit button

- [ ] **Step 2: Verify contact section renders with form and social links**

---

## Task 12: Footer

**Files:**
- Create: `src/components/Footer/Footer.tsx`
- Create: `src/components/Footer/Footer.css`

- [ ] **Step 1: Build the Footer**

Features:
- "© 2025 Le Thanh Dat. Built with ❤️ and React."
- Social icon links
- Back-to-top button

- [ ] **Step 2: Verify footer renders correctly**

---

## Task 13: App Assembly

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Assemble all sections in `App.tsx`**

Import and compose: Navbar → Hero → About → Experience → Skills → Projects → Contact → Footer

- [ ] **Step 2: Test responsive layout on mobile/tablet/desktop viewports**

---

## Task 14: Polish & Performance

- [ ] **Step 1: Add page loading animation**
- [ ] **Step 2: Optimize images — compress and lazy-load**
- [ ] **Step 3: Add `<meta>` tags for SEO + Open Graph**
- [ ] **Step 4: Test Lighthouse score — target 90+ on Performance and Accessibility**
- [ ] **Step 5: Final visual review of all sections**

---

## Summary

| Task | Component | Est. Time |
|------|-----------|-----------|
| 1 | Project Scaffolding | 5 min |
| 2 | Design System | 10 min |
| 3 | Data Files | 10 min |
| 4 | Common Components & Hooks | 15 min |
| 5 | Navbar | 15 min |
| 6 | Hero | 20 min |
| 7 | About | 15 min |
| 8 | Experience Timeline | 25 min |
| 9 | Skills | 20 min |
| 10 | Projects | 20 min |
| 11 | Contact | 15 min |
| 12 | Footer | 5 min |
| 13 | App Assembly | 10 min |
| 14 | Polish & Performance | 15 min |
| **Total** | | **~3.5 hours** |
