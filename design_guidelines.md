# Design Guidelines: Content Creator & Digital Marketer Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Behance, Dribbble, and Awwwards portfolios for content creators, combined with Linear's typography precision and Stripe's restrained elegance. Dark mode aesthetic with sophisticated gradients.

## Core Design Elements

### Typography
- **Display/Headings**: Inter or Manrope (Google Fonts)
  - H1: 3.5rem (desktop), 2.5rem (mobile), font-weight: 700, line-height: 1.1
  - H2: 2.5rem (desktop), 2rem (mobile), font-weight: 600
  - H3: 1.75rem, font-weight: 600
- **Body**: Inter or Manrope
  - Base: 1rem, font-weight: 400, line-height: 1.7
  - Large: 1.125rem for emphasis blocks
  - Small: 0.875rem for captions/metadata

### Layout System
**Tailwind Spacing Units**: Consistently use 4, 6, 8, 12, 16, 20, 24 for spacing
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-6 to gap-8
- Container: max-w-7xl with px-6
- Card padding: p-6 to p-8

### Dark Mode Color Strategy
**Background Layers**:
- Base: bg-slate-950
- Elevated cards: bg-slate-900/50 with border border-slate-800
- Subtle gradients: from-slate-900 via-indigo-950/20 to-slate-900

**Accent System**:
- Primary: Indigo (indigo-500 to indigo-400)
- Secondary: Purple (purple-500 for highlights)
- Success: Emerald-500
- Gradient overlays: from-indigo-600/20 to-purple-600/20

**Text Hierarchy**:
- Primary: text-slate-50
- Secondary: text-slate-300
- Muted: text-slate-500

## Component Library

### Navigation Header
Sticky header with backdrop blur (backdrop-blur-xl bg-slate-950/80), logo left, nav links center, CTA button right. Height: h-20. Border bottom: border-slate-800.

### Hero Section
Full viewport (min-h-screen) with centered content over gradient background. Includes large background image with dark overlay (bg-gradient-to-br from-slate-950/90 to-indigo-950/70), headline, subheadline, dual CTAs (primary + secondary ghost button), scroll indicator at bottom.

### Cards
Consistent card treatment across portfolio items, services, and blog:
- Background: bg-slate-900/50
- Border: border border-slate-800
- Hover: scale-105, shadow-2xl shadow-indigo-500/10
- Rounded: rounded-xl
- Image aspect ratios: aspect-video for portfolio, aspect-square for services

### Buttons
- Primary: bg-indigo-600 hover:bg-indigo-500, rounded-full, px-8 py-4
- Secondary: border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10, rounded-full
- Buttons on images: backdrop-blur-md bg-slate-950/30 border border-white/20

### Modal
Portfolio preview modal: full-screen overlay (bg-slate-950/95 backdrop-blur-lg), centered content card with image carousel, project details, close button top-right.

### Forms
Contact form with floating labels, input styling: bg-slate-900 border border-slate-700 focus:border-indigo-500, rounded-lg, px-4 py-3.

## Layout Specifications

### Homepage Flow
1. **Hero**: Full viewport with background image, centered headline "Content Creator & Digital Marketer", subtext, dual CTAs
2. **Services**: 3-column grid (mobile: 1-col), icon cards with hover animations
3. **Portfolio Grid**: Masonry-style 3-column grid (tablet: 2-col, mobile: 1-col), filterable categories
4. **Testimonials**: 2-column grid with client photos, quotes, names, companies
5. **Blog Highlights**: 3 featured posts in card grid
6. **Contact CTA**: Two-column section (form left, info right)

### Case Study Pages (work/[slug])
Hero with project image, client logo, tags. Two-column content: left (problem, solution, results), right (project details sidebar). Full-width image showcases between sections. Results metrics in 3-column stat cards.

### Blog Pages
Featured image, title, meta (date, read time, category), single-column prose content (max-w-3xl), related posts grid at bottom.

## Images

**Hero Section**: Large, high-quality image showing content creation workspace or creative professional at work. Should convey energy and professionalism. Dark overlay applied for text readability.

**Portfolio Items**: Each project needs thumbnail (16:9 aspect ratio). For case studies, include 3-5 full-width showcase images demonstrating work results.

**Services Section**: Icon-based, no photos needed (use Heroicons).

**Testimonials**: Client headshots (square, 80x80px minimum), professional portraits preferred.

**Blog**: Featured image per post (16:9 aspect ratio), relevant to content topic.

**About/Contact**: Professional headshot or team photo for credibility.

## Animations (Minimal, Purposeful)

- **Page Load**: FadeIn for hero content (0.6s ease-out)
- **Scroll Reveals**: SlideUp for section entries (stagger by 0.1s)
- **Hover States**: ScaleOnHover (scale: 1.05) for cards and images
- **Modal**: Smooth fade + scale animation for open/close
- **Navigation**: Smooth scroll behavior with offset for sticky header

## Interaction Patterns

- Portfolio grid items: Click opens modal preview with image carousel, project details, CTA to full case study
- Blog cards: Hover shows excerpt preview, click navigates to full post
- Form: Inline validation, loading state on submit, success/error notifications
- Testimonials: Optional subtle auto-rotate carousel (8s interval)

This design creates a sophisticated, professional dark-mode portfolio that showcases content creation work with visual impact while maintaining clean, focused user experience.