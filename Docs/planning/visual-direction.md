# Visual Direction & Design System Architecture — Light Editorial Reset
**Target Identity:** Chaitanya Jindal — AI Systems Engineer

---

## 1. Visual Direction Overview

The portfolio aesthetic follows a **Warm Editorial Light Theme** inspired by personal design-engineer websites (such as Mitchell Sparrow). It emphasizes typography, whitespace, clarity, and human authenticity over dark SaaS landing page templates or glassmorphic operating system demos.

### Aesthetic Principles
- **Paper Canvas:** Soft warm off-white background (`#fbf9f5`) providing a calm, non-glare surface.
- **Near-Black Typography:** High contrast, ultra-readable typography (`#1a1917`) utilizing `Lora` for serif titles/quotes, `Space Grotesk` for sans-serif body text, and `JetBrains Mono` for metadata.
- **Muted Accents:** Muted coffee / warm amber (`#8c6d46`) for key highlights and subtle active indicators, paired with muted sage (`#5e6653`) for secondary status elements.
- **Restrained Dividers & Cards:** Subtle warm gray borders (`#e6e2da`) and solid off-white card surfaces (`#f4f1ea`).
- **No Vanity Tropes:** Zero dark glassmorphism, zero floating mesh gradients, zero cyan neon glows, zero progress bars, and zero fake telemetry badges.

---

## 2. Design System Tokens (`app/globals.css`)

```css
:root {
  --bg-base: #fbf9f5;          /* Base paper canvas */
  --bg-surface: #f4f1ea;       /* Card & container surface */
  --bg-elevated: #ede8df;      /* Hover & active surface */

  --text-primary: #1a1917;     /* Soft near-black for headings & body */
  --text-secondary: #57544e;   /* Warm gray for subtitles & secondary text */
  --text-muted: #8c8880;       /* Muted metadata */

  --accent-primary: #8c6d46;   /* Muted coffee / warm amber accent */
  --accent-secondary: #5e6653; /* Muted olive / sage green secondary accent */

  --border-subtle: #e6e2da;    /* Delicate warm gray dividers */
  --border-hover: #d1cbbd;     /* Active border state */
}
```

---

## 3. Typography Strategy
- **Display & Section Titles:** `Lora` (serif) — Warm, human, elegant.
- **Body & Controls:** `Space Grotesk` (sans-serif) — Clean, modern geometric readability.
- **Metadata & Code:** `JetBrains Mono` (monospace) — Used for numbers, dates, tags, and URLs.

---

## 4. Mobile & Motion Strategy
- **Mobile First Composition:** All grids collapse smoothly to single columns on small viewports (`<640px`). Touch targets adhere to minimum 44px boundaries. Zero horizontal scroll overflow.
- **Subtle Interactions:** Scroll reveals (`AnimateIn`), hero typewriter, and smooth accordion transitions. Respects `prefers-reduced-motion: reduce`.
