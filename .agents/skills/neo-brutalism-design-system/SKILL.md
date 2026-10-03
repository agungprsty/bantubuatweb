---
name: neo-brutalism-design-system
description: Neo-Brutalism design system guidelines, color palette, components, and styling conventions inspired by Gumroad.com for bantubuatweb.com.
---

# Gumroad Neo-Brutalism Design System for bantubuatweb.com

This skill defines the exact visual design system, color palette, typography rules, border & shadow conventions, and component patterns for **bantubuatweb.com** based on Gumroad's iconic Neo-Brutalist aesthetic.

---

## 1. Brand Identity & Vision
- **Brand Name**: `bantubuatweb` (bantubuatweb.com)
- **Tagline**: *"Solusi Pembuatan Website Professional, Cepat & High-Converting"*
- **Core Philosophy**: High contrast, bold typography, playful retro-modern vibe, hard drop shadows, zero-fluff copy, high converting CTAs.
- **Target Audience**: UMKM, Startups, Personal Brands, Agencies, Business Owners across Indonesia.

---

## 2. Color Palette (Gumroad Palette)

### Core Colors
| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| `primary-pink` | `#FF90E8` | Hero CTAs, Primary Highlights, Accent Cards |
| `primary-yellow` | `#FFC901` | Warning Badges, Feature Cards, Secondary Highlights |
| `accent-cyan` | `#23A6F0` | Link Highlights, Tech Badges, Information Cards |
| `accent-green` | `#23C552` | Success Badges, Guarantee Badges, Pricing Tags |
| `accent-orange` | `#FF6000` | Alert Badges, Special Offers, Hot Tags |
| `accent-purple` | `#B855D8` | Category Tags, Floating Cards |
| `surface-light` | `#F4F4F0` / `#FFFFFF` | Main Page Background |
| `surface-cream` | `#FFFDF0` | Section Alternate Background |
| `stroke-black` | `#000000` | Borders, Text, Hard Drop Shadows |
| `surface-dark` | `#121212` | Dark Mode Sections / Footer Background |

---

## 3. Border & Hard Shadow Specifications

### Borders
- **Standard Border**: `2px solid #000000` (or `3px solid #000000` for heavy containers/hero buttons)
- **Grid Divider**: `2px solid #000000` dividing adjacent cards without double margins

### Hard Drop Shadows (No Blur, High Contrast)
- **Base Card Shadow**: `4px 4px 0px #000000` (`shadow-[4px_4px_0px_0px_#000]`)
- **Large Hero / Pop Shadow**: `6px 6px 0px #000000` (`shadow-[6px_6px_0px_0px_#000]`)
- **Button Hover State**: `translate-x-[-2px] translate-y-[-2px] shadow-[6px_6px_0px_0px_#000]`
- **Button Active State**: `translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_0px_#000]`

---

## 4. Typography & Styling

- **Font Family**: Primary `Plus Jakarta Sans` or `Space Grotesk` / `Outfit` with high bold weights (`font-black`, `font-extrabold`).
- **Heading Styles**: Heavy font weight (`font-extrabold` / `font-black`), `tracking-tight`, explicit black border text or high-contrast background highlights.
- **Body Text**: High readability sans-serif with bold accent inline links.

---

## 5. Signature Neo-Brutalist Components

### 1. Marquee Ticker Banner
- Black background (`bg-black text-white`) or Pink background (`bg-[#FF90E8] text-black`).
- Infinite looping text separated by star symbols (`★` or `✦`).
- `border-y-2 border-black`.

### 2. Neo-Brutalist Card
- `bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000]`

### 3. Neo-Brutalist Primary Button
- `bg-[#FF90E8] text-black font-extrabold px-6 py-3 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000]`

### 4. Pill Badges
- `inline-block bg-[#FFC901] text-black font-bold text-xs uppercase px-3 py-1 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000]`

---

## 6. Guidelines for Refactoring `bantubuatweb.com`
1. Replace all legacy references to `sigerweb` and `lampungmediaweb` with `bantubuatweb`.
2. Expand national context: Focus on Indonesian businesses, startups, UMKM, creators, and corporate clients nationwide.
3. Update Tailwind theme configuration (`main.css` and `nuxt.config.ts`) to expose neo-brutalist variables and colors.
4. Redesign Header, Footer, Hero Section, Feature Grids, Pricing Tables, Testimonial Tickers, and Portfolio Showcase with Neo-Brutalism components.
