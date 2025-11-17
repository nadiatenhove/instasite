# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a creative portfolio website for Nadia ten Hove (Creative Concept Developer & Stylist), designed with an Instagram-inspired layout. The site showcases two main categories of work:
- **Creatief Werk** (Creative Work): High-fashion concepts, editorial storytelling, and social content/reels
- **Events & Productie** (Events & Production): Event coordination and backstage work

## Architecture

This is a **vanilla JavaScript single-page application** with no build process or dependencies:
- **[index.html](index.html)**: Main HTML structure with semantic markup for portfolio sections
- **[script.js](script.js)**: Client-side filtering/navigation logic
- **[style.css](style.css)**: Instagram-inspired styling with responsive grid layout
- **[sources.md](sources.md)**: Source list of Instagram URLs organized by category (used as reference for content)

### Key Design Patterns

**Category-based filtering system**: The site uses `data-category` and `data-filter` attributes to show/hide content:
- Navigation buttons have `data-filter` attributes ("all" or "events")
- Project groups have `data-category` attributes matching these filters
- The `filterPortfolio()` function in [script.js](script.js:7-34) toggles visibility based on active filter

**Instagram-style grid layout**:
- 3-column grid on desktop (`grid-template-columns: repeat(3, 1fr)` in [style.css](style.css:111))
- 2-column grid on mobile devices (breakpoint at 600px in [style.css](style.css:152-157))
- Square aspect ratio maintained with `aspect-ratio: 1 / 1` in [style.css](style.css:118)
- Items are placeholders linking to Instagram posts (actual embeds not implemented)

## Development Workflow

**No build process required** - This is a static site. To develop:
1. Open [index.html](index.html) directly in a browser, or serve with any static file server
2. Make changes to HTML, CSS, or JS files
3. Refresh browser to see changes

**Testing**: No automated tests. Manual testing in browser required.

**Deployment**: Deploy all files (*.html, *.css, *.js) to any static hosting service.

## Content Structure

Instagram URLs in [sources.md](sources.md) are organized into two sections:
- `mijn eigen werk` (my own work) - maps to "Creatief Werk" section
- `events` - maps to "Events & Productie" section

When adding new portfolio items:
1. Add Instagram URL to [sources.md](sources.md) in appropriate section
2. Create corresponding `<a>` element with `grid-item` class in [index.html](index.html)
3. Extract post ID from Instagram URL and add as placeholder text
4. Set appropriate `data-category` on parent `.project-group`

## Styling Notes

The site mimics Instagram's visual language:
- Color palette: `#fafafa` (background), `#0095f6` (accent blue), `#262626` (text), `#8e8e8e` (muted text)
- Typography: System font stack for native feel
- Max width: 935px (Instagram's standard content width)
- Border color: `#dbdbdb` for subtle separation
