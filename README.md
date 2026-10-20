# Subhas Chandra Bose — A Digital Biography & Historical Investigation

A museum-grade, immersive digital biography and historical investigation platform dedicated to the life, military campaigns, political struggle, and post-1945 inquiries of **Netaji Subhas Chandra Bose**.

Built with an uncompromising focus on historical rigor, archival visual aesthetics, accessibility (WCAG AA/AAA compliance), and high-performance zero-runtime-dependency modern web engineering.

---

## 🌟 Executive Summary

This application bridges deep historical research with modern web engineering. Rather than presenting a flat Wikipedia-style entry, it delivers a museum-grade archival narrative divided into twelve chronological chapters, interactive map timelines, a declassified evidence inquiry board, and an interactive media gallery.

---

## 🛠️ The Tech Stack ("What Was Used & How It Works")

The application was purposefully architected without heavy client-side JavaScript frameworks (such as React, Vue, or Angular) to achieve an instantaneous **First Contentful Paint (FCP)**, zero bundle hydration overhead, and maximum performance on low-bandwidth and mobile devices.

### 1. Core Engineering & Architecture
- **Semantic HTML5**: Native semantic document architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<aside>`, `<footer>`, `<figure>`, `<time>`) enriched with comprehensive **ARIA landmark roles** (`role="region"`, `role="group"`, `aria-live="polite"`, `aria-pressed`, `aria-expanded`).
- **Styling Architecture — TailwindCSS v3.4.19**:
  - Configured via `tailwind.config.js` with bespoke archival tokens (Ivory, Indian Saffron, Forest Green, Deep Navy).
  - Component and utility layering implemented in `src/input.css` using `@tailwind base`, `@tailwind components`, and `@tailwind utilities`.
  - Compiled and minified down to `dist/styles.css` using the official Tailwind CLI.
- **Vanilla JavaScript (ES6+)**:
  - **Zero external runtime JS libraries** — 100% vanilla JavaScript.
  - Organized using modular scopes, event delegation, and performance-conscious DOM updates.
- **Modern Web APIs Employed**:
  - **`IntersectionObserver` API**:
    - Powering progressive scroll-reveal animations.
    - Synchronizing the interactive **Escape Route Map** steps with active visual nodes.
    - High-performance scrollspy updating navigation links as sections scroll into view.
  - **HTML5 `<dialog>` API**:
    - Accessible native modal lightbox for the gallery viewer.
    - Native backdrop styling (`::backdrop`), automatic `Escape` key capture, and proper focus management restoring focus to trigger buttons on dismiss.
  - **Touch Events API**:
    - Mobile swipe detection (`touchstart`, `touchend`) with directional delta threshold calculations for gesture navigation across gallery photographs.
  - **CSS Clamp (`clamp()`) & Fluid Typography**:
    - Dynamic scaling of typography (`--fs-display`, `--fs-h2`, `--fs-lead`) and spacing tokens (`--section-y`) across viewport widths without abrupt breakpoint jumps.
  - **CSS Media Queries (`prefers-reduced-motion`)**:
    - Respects user accessibility preferences by disabling transform transitions, parallax movements, and smooth scrolling for motion-sensitive users.

---

## 🎨 Design System & Visual Aesthetics

The UI design is inspired by museum exhibitions, archival monographs, and intelligence dossiers:

| Token / Concept | Value / Implementation | Design Purpose |
| :--- | :--- | :--- |
| **Archival Ivory** | `#faf6ee` | Soft, warm historic parchment background replacing sterile stark white. |
| **Indian Saffron** | `#d97706` / `#fbbf24` | Authentic patriotic accent honoring Azad Hind and Indian independence iconography. |
| **Forest Green** | `#14532d` / `#166534` | Grounding secondary tone derived from the Indian tricolor and military field dress. |
| **Deep Charcoal & Navy**| `#0f172a` / `#1e293b` | Used in the *Great Escape* and *Taihoku Mystery* sections to invoke clandestine intelligence dossiers. |
| **Editorial Typography** | `Playfair Display` (Serif) | Classic editorial serif for authoritative headings and formal chapter titles. |
| **Archival Typography** | `Inter` (Sans-Serif) | Ultra-legible humanist sans-serif optimized for long-form reading and tabular evidence logs. |

---

## 🚀 Key Modules & Interactive Features

### 1. Interactive Chapter Narrative (Chapters 01–12)
- Structured chronological journey from Cuttack and Cambridge through the Indian National Congress presidency, Forward Bloc, and the Axis diplomatic missions.
- Rich archival primary sources: Resignation Letter to E.S. Montagu (1921), Presidential addresses, Rani of Jhansi regiment mobilization, and the Battle of Kohima & Imphal.

### 2. The Great Escape Interactive Route Map (1941)
- Visualized journey from Bose's house arrest on Elgin Road, Calcutta to Gomoh, Peshawar, Kabul, Moscow, and Berlin.
- Real-time scroll synchronization between narrative milestones and SVG/visual node indicators using `IntersectionObserver`.

### 3. Chronological Interactive Timeline
- Categorized timeline tracking:
  - *Early Life & Ideology*
  - *Indian National Congress Politics*
  - *World War II, Axis Missions & Azad Hind Government*
  - *The 1945 Disappearance & Historical Inquiries*
- Filterable timeline states with count indicators and smooth reveal animations.

### 4. The Mystery of Taihoku & Declassified Evidence Board
- Forensic, multi-perspective examination of the August 18, 1945 plane crash at Matsuyama Airport, Taihoku (Taipei, Taiwan).
- Interactive evidence matrix detailing:
  - **Figgess Report (1946)**
  - **Shah Nawaz Committee (1956)**
  - **G.D. Khosla Commission (1970)**
  - **Justice Mukherjee Commission of Inquiry (JMCI, 2005)**
  - **The Russian / Siberian Dimension & Gumnami Baba Inquiries**
  - **Declassified Central Government & Intelligence Files (2015–2016)**
- Color-coded evidence credibility taxonomy (`Documented`, `Reported`, `Claimed`, `Disputed`, `Unverified`).

### 5. Archival Photographic Gallery & Native Lightbox
- High-resolution photographs served from the local `static/` directory:
  - Gandhi & Bose at Haripura Congress (1938)
  - Bose with officers and soldiers of the Azad Hind Fauj (`static/bose with ina.png`)
  - Netaji in Tokyo / Japan (`static/bose in japan.png`)
- Multi-category instant filtering (**All**, **Congress Years**, **INA & Azad Hind**, **International Missions**).
- Fullscreen `<dialog>` lightbox modal with keyboard navigation (`←` / `→` arrow keys, `Esc`), click-outside-to-close, and mobile touch swipe.

### 6. Archival Audio Integration
- Embedded audio stream of the Azad Hind Fauj national anthem (*"Kadam Kadam Badhaye Ja"* / *"Sab Sukh Chain"*).
- Floating audio controller with play/pause state indicator.

---

## 📂 Project Structure

```text
Bose_Bio/
├── dist/
│   └── styles.css              # Minified, production-ready Tailwind CSS bundle
├── src/
│   └── input.css               # Design tokens, fluid variables, base rules, animations
├── static/                     # Archival photographic assets & historical documents
│   ├── bose in japan.png       # Netaji Subhas Chandra Bose in Tokyo (Gallery)
│   ├── bose with ina.png       # Bose with Azad Hind Fauj soldiers (Gallery)
│   ├── Bose_German Leaders.jpg # Netaji with German leadership (1942)
│   ├── Flag Hoisting.jpg       # First Indian flag hoisted in Andaman (1943)
│   ├── Flight_paths...jpg      # Taihoku flight path investigation diagram
│   ├── INA Soldiers Kohima.webp# INA military action at Kohima/Imphal front
│   ├── netaji_14.png           # Archival portrait
│   ├── Netaji_Potrait.png      # Netaji military uniform portrait
│   ├── Rani of Jhansi...avif   # Women's combat regiment archival photo
│   └── Resignation_Letter.jpg  # Original ICS resignation letter (1921)
├── index.html                  # Single-page application architecture & narrative
├── package.json                # Project dependencies, scripts & metadata
├── package-lock.json           # Locked npm dependency tree
├── tailwind.config.js          # Tailwind theme extensions, colors & font families
└── README.md                   # Complete architectural documentation
```

---

## ⚡ Getting Started & Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- [Python 3](https://www.python.org/) (or any standard static HTTP server)

### 1. Installation
Clone or download the repository to your local machine:
```bash
cd Bose_Bio
npm install
```

### 2. Building Styles
To compile and minify the Tailwind CSS stylesheet:
```bash
npm run build:css
```

To watch for CSS changes during development:
```bash
npm run watch:css
```

### 3. Launching the Web Application
Start the local HTTP server:
```bash
npm start
```
*Or alternatively using Python directly:*
```bash
python -m http.server 8080
```

Open your browser and navigate to:
```
http://localhost:8080/index.html
```

---

## ☁️ Deployment Guide (Cloudflare Pages)

Because this application is built with a zero-runtime-dependency static architecture, it is ideally suited for **Cloudflare Pages**—offering global CDN distribution, automatic SSL/TLS, and instantaneous edge caching with zero hosting cost.

### Method 1: Git Integration (Recommended — Continuous Deployment)

This method automatically builds and deploys your site whenever you push code to GitHub or GitLab.

#### Step 1: Push your project to GitHub
If you haven't pushed your repository to GitHub yet:
```bash
# 1. Commit all staged files
git commit -m "feat: Initial commit of Netaji digital biography platform"

# 2. Add your remote GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 3. Rename branch to main and push
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation sidebar, select **Workers & Pages** > **Create application**.
3. Choose the **Pages** tab and click **Connect to Git**.
4. Select your GitHub / GitLab account and choose your `Bose_Bio` repository.
5. Click **Begin setup**.

#### Step 3: Configure Build & Deployment Settings
Fill in the deployment configuration:
- **Project name**: `bose-biography` (or your preferred subdomain)
- **Production branch**: `main`
- **Framework preset**: `None`
- **Build command**:
  ```bash
  npm run build:css
  ```
- **Build output directory**:
  ```text
  .
  ```
  *(Entering a single dot `.` tells Cloudflare that `index.html`, `dist/styles.css`, and `static/` reside in the project root)*
- **Root directory**: Leave blank (default: `/`)

#### Step 4: Deploy
Click **Save and Deploy**. Cloudflare will automatically:
1. Pull your code.
2. Run `npm install` and compile `dist/styles.css` via Tailwind CLI.
3. Deploy your website globally across Cloudflare's edge network in seconds.
4. Provide a free production URL (e.g., `https://bose-biography.pages.dev`).

---

### Method 2: Instant CLI Deployment (Wrangler)

If you prefer to deploy directly from your terminal without connecting Git:

1. Build the production CSS bundle locally:
   ```bash
   npm run build:css
   ```
2. Deploy via Cloudflare's Wrangler tool:
   ```bash
   npx wrangler pages deploy . --project-name=bose-biography
   ```
3. When prompted, log in to your Cloudflare account in your browser to authorize. Wrangler will deploy the current folder and output your live `.pages.dev` URL.

---

### Method 3: Drag & Drop (Direct Upload via Dashboard)

1. Run `npm run build:css` locally to ensure `dist/styles.css` is updated.
2. Navigate to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
3. Name your project (e.g., `bose-biography`).
4. Drag and drop the `Bose_Bio` project directory (ensure `index.html`, `dist/`, and `static/` are included, but exclude `node_modules`).
5. Click **Deploy site**.

---

### 🌐 Custom Domain & Production Headers
- **Custom Domain**: In your project on Cloudflare Pages, go to **Custom domains** > **Set up a custom domain** (e.g., `netaji.yourdomain.com`). Cloudflare configures the DNS and provisions a free Universal SSL certificate automatically.
- **Cache Optimization**: The included `_headers` file automatically instructs Cloudflare to cache images in `/static/*` and styles in `/dist/*` immutably on the edge for 1 year while serving security headers (`X-Frame-Options`, `X-Content-Type-Options`).

---

## 🛡️ Performance, Accessibility & SEO

- **Accessibility (a11y)**:
  - High-contrast text adhering to WCAG 2.1 AA/AAA requirements.
  - Full keyboard accessibility with visible focus rings (`:focus-visible`).
  - Screen reader friendly with skip links (`#main-content`), semantic landmark elements, and informative `aria-label` tags.
  - Interactive touch elements maintain a minimum hit-target size of 44×44px.
- **Search Engine Optimization (SEO)**:
  - Canonical URL, structured meta tags, OpenGraph protocol, and Twitter Card schemas.
  - Hierarchical heading structure (`<h1>` down through `<h6>`) with semantic section scoping.
- **Zero-Bloat Runtime**:
  - No external JS frameworks, zero virtual DOM reconciliation overhead, fast execution and instant rendering.

---

## 📜 Historical References & Bibliography

This digital exhibition references primary sources, archival collections, and government commission reports:
- *Netaji Collected Works* (Vols. 1–12), edited by Sisir Kumar Bose & Sugata Bose.
- *The Indian Struggle (1920–1942)* by Subhas Chandra Bose.
- *Brothers Against the Raj: A Biography of Sarat and Subhas Chandra Bose* by Leonard A. Gordon.
- *His Majesty's Opponent: Subhas Chandra Bose and India's Struggle Against Empire* by Sugata Bose.
- Official Reports of the Shah Nawaz Committee (1956), Khosla Commission (1977), and Justice Mukherjee Commission (2005).
- Declassified Netaji Files (National Archives of India, New Delhi).

---

## 📄 License
This project is open-source and intended for educational, academic, and historical research purposes. Historical photographs and archival citations remain under their respective public domain or fair-use historical archival terms.
