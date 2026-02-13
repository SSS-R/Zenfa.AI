# 🚀 PC Lagbe? — Promotional Landing Page

> **Don't build a PC. Let the PC build itself.**

A premium "coming soon" landing page for **[PC Lagbe?](https://pclagbe.com)** and **Zenfa AI** — the AI-powered PC building platform for Bangladesh.

---

## 🎯 What is this?

This is the promotional website designed to generate excitement, build a waitlist, and establish community presence before launch.

### Two Products, One Mission

| Product | Target | Description |
|---|---|---|
| **PC Lagbe?** | Consumers 🇧🇩 | AI-powered PC builder + price aggregator across all BD tech stores |
| **Zenfa AI** | B2B / Vendors | API that any vendor can plug in to offer AI-powered PC build recommendations |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| Vanilla JS | No framework overhead for a landing page |
| [GSAP](https://gsap.com/) | Scroll-triggered animations & micro-interactions |
| [Google Fonts](https://fonts.google.com/) | Outfit, Inter, JetBrains Mono |
| Vanilla CSS | Custom design system, dark theme, glassmorphism |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ 
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Zenfa.AI.git
cd Zenfa.AI

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment.

---

## 📦 Deployment

This is a static site — deploy anywhere:

| Platform | Command / Notes |
|---|---|
| **Vercel** | Connect repo → auto-deploys on push |
| **Netlify** | Build command: `npm run build`, Publish: `dist` |
| **GitHub Pages** | Use `dist/` folder after build |

---

## 🎨 Design

- **Dark mode** default (charcoal `#0f1117`)
- **Teal gradient** brand color (`#4f9e97` → `#6ee1c9`)
- **Glassmorphism** cards with hover glow
- **GSAP scroll animations** throughout
- **Mobile-first** responsive design

---

## 📄 Project Structure

```
Zenfa.AI/
├── index.html          # Main HTML (all sections)
├── src/
│   ├── main.js         # JavaScript — animations, interactions
│   └── style.css       # Design system & all styles
├── public/             # Static assets (images, favicon)
├── package.json
├── vite.config.js
└── README.md
```

---

## 📝 Sections

1. **Hero** — Animated headline + particle background
2. **The Problem** — Pain points of PC buying in BD
3. **The Solution** — PC Lagbe? + Zenfa AI cards
4. **How It Works** — 3-step animated flow
5. **Interactive Teaser** — Budget slider + purpose selector
6. **For Vendors (B2B)** — API preview + pricing tiers
7. **Social Proof** — Tech stack, vendor logos, trust indicators
8. **Waitlist CTA** — Email signup + animated counter
9. **Footer** — Links + "Made with ❤️ in Bangladesh"

---

## 🤝 Contributing

This project is currently in pre-launch phase. Contributions welcome after public launch.

---

## 📜 License

© 2026 PC Lagbe? · Powered by Zenfa AI  
Made with ❤️ in Bangladesh
