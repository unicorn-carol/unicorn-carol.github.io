# Stitch prompt — Personal portfolio website prototype (Botanical / Organic Serif) — **Desktop Web**

Use this document as a single prompt for Stitch. Generate a **clickable, high-fidelity UI prototype for desktop web** (not mobile, not app UI) for a **personal portfolio / digital business card** site.

**Canvas / viewport (mandatory):** Design every screen at **desktop width** — target **1440px** wide frames (acceptable range **1280–1600px**). Use a **multi-column editorial layout** with generous side margins (for example, a content container around **1120–1200px** inside the frame, or full-bleed sections with a clear inner container). The presentation must read as **wide web**, not a phone shell.

**Do not** default to narrow phone widths, phone aspect ratios, mobile-first single-column “app” layouts, or hamburger-only navigation as the primary chrome.

**No photography:** **Do not use photography, illustrations of people, avatars, or portrait placeholders.** Replace all “image” areas with **abstract shapes**, **empty arch frames**, **soft gradients**, **simple line icons**, or **muted blocks**—the prototype must read clearly **without any pictures**.

---

## Role (how you should think and deliver)

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Before designing, build a mental model of the product:

- This is a **flat IA** (max ~3 levels deep): Home, Projects (+ detail), About, Blog/Insights (+ article), Contact.
- Optimize for **trust, clarity, and editorial polish**—not generic startup UI.
- The prototype is **desktop web**: wide composition, **horizontal top navigation**, roomy grids, and **hover** as a primary interaction cue. It must still be **accessible** (keyboard focus states, visible focus rings, comfortable click targets, readable type sizes) and **internally consistent** with the design system below.

Ask yourself what the prototype must prove: navigation, hierarchy, content modules, primary flows (CTA → projects, card → detail, list → article), and believable empty states—**without relying on images**.

---

## Product intent (from the site brief)

**Positioning:** A premium digital business card + portfolio + writing space.

**Brand keywords:** Professional, cutting-edge, minimalist, human-centric.

**Audience:** Potential employers, collaborators, peers, readers in tech/arts communities.

**Core promise:** Strong visual expression + clear information architecture that builds **personal brand trust**.

**Hero identity note (content, not imagery):** The site introduces **Carol** as a **lifelong learner**.

**Value props to surface (as copy modules, not icons of people):** fintech, product management, lifestyle entrepreneurship, and “science meets mysticism” (phrased tastefully in English if needed).

---

## Information architecture & screens to generate

### Global chrome

**Header (sticky) — desktop web:**

- Left: **Logo / wordmark** (text-based is fine). Click returns Home.
- Right: **horizontal text links** — **Projects**, **About**, **Blog** (or “Insights”), **Contact** — plus a compact **Sign in / primary** pill only if it fits the story (optional).
- Far right utilities: **Language toggle** + **theme toggle** (see note below).
- **No hamburger menu** in the primary chrome (this is not a mobile prototype).
- Behavior: After **50px scroll**, header background becomes **glassmorphism** (blur + subtle translucent surface).

**Footer:**

- Copyright, placeholder for **ICP/filing line** (generic lorem legal line is OK).
- Social links row: **LinkedIn, GitHub, Xiaohongshu** (labels OK; no brand-logo policing needed in prototype).
- **Back to top** control.

**Flows / links (prototype interactions):**

- Hero primary CTA → **Projects**.
- Project card → **Project detail** screen.
- Blog row/card → **Article reading** screen.
- External links (e.g., GitHub) → indicate “opens in new tab” in UI copy or annotation.

### 1) Home

Sections top-to-bottom:

1. **Hero:** Headline + short intro line + primary CTA (to Projects) + secondary CTA optional (to About/Contact). **No portrait.**
2. **Value props:** 3–4 compact statements (chips or mini-cards).
3. **Featured works:** **2–3 project preview tiles**. Each tile uses **non-photo placeholders** (arch/blob frame with empty fill + project title + 1-line blurb + tags).
4. **Latest insights:** 3 list items (date, title, reading time excerpt line).

### 2) Projects

1. **Filters / tabs:** e.g., Product design / Frontend / Research (adjust labels as needed).
2. **Grid:** Project cards: title, 1–2 line summary, tags, date — **no thumbnails with photos** (use abstract placeholder blocks).
3. **Project detail template:** sections for Context, Challenge, Solution, Outcomes, **Tools used** (as a tidy tag cluster). Use diagrams-as-placeholder (simple blocks/lines), not screenshots/photos.

### 3) About

1. **Bio:** story-like layout using **2-column editorial** text on wide screens.
2. **Experience:** **interactive-looking timeline** (clear states: hover/selected year). Roles/education entries as text.
3. **Skill stack:** “toolbox” visualization — **no face/avatar**. Use grouped tags, soft meters, or abstract radial layout.

### 4) Blog / Insights

1. **Search + tags** row.
2. **Reading list:** table/list with **date**, **title**, **estimated read time**.
3. **Article view:** reading mode with a **two-pane layout**: main article column + **sticky right TOC** (or sticky left TOC—pick one and keep it consistent). Markdown can be represented as structured text blocks (headings, paragraphs, quote, code block placeholder).

### 5) Contact

1. **Quick links** to social profiles (same set as footer).
2. **Short inquiry form:** name, email, message, submit — minimal fields, calm layout.

---

## Visual system to apply (Botanical / Organic Serif)

### Design philosophy

A **digital ode to nature**: soft, sophisticated, intentional; warmth and tactility over cold tech precision. Calm, curated, artisanal, “sustainable luxury” editorial vibe. Organic softness: **round corners**, flowing shapes, **generous whitespace**.

### Color tokens (light mode baseline)

Use these as the prototype’s primary palette (dark mode optional; if shown, keep it equally muted—no neon):

- **Background:** `#F9F8F4` (warm alabaster / rice paper)
- **Foreground / primary text:** `#2D3A31` (deep forest green)
- **Primary / accent:** `#8C9A84` (sage green)
- **Muted surfaces:** `#DCCFC2` (soft clay / mushroom)  
  Cards may also be `#FFFFFF` or `#F2F0EB` with subtle borders `#E6E2DA` (stone)
- **Interactive pop / CTA accent:** `#C27B66` (terracotta)

### Typography

- **Headings:** **Playfair Display** (Google font). Weight **600/700**. Use **italic emphasis** on a key word in major headlines.
- **Body:** **Source Sans 3** (Google font). Weight **400/500**.
- Headlines should be **large and airy** at desktop scale (think **very grand hero type**); keep generous line-height and comfortable measure (line width) for body text in a wide column.

### Shapes, elevation, texture (non-negotiable details)

- **Radii:** very round — cards ~**24px** (`rounded-3xl` spirit), buttons **pill** (`rounded-full`), image placeholders can be **arch tops** or **organic blobs** (still **empty**, no photos).
- **Shadows:** extremely soft, diffused (forest green tinted, low alpha)—no harsh drops.
- **Paper grain overlay (critical):** include a subtle **full-screen noise/grain overlay** at very low opacity to create tactile “paper” warmth (the prototype should *show* this layer in the spec/preview, even if simplified).
- Optional depth: **light backdrop blur** on overlay surfaces (e.g., quote panel), consistent with premium editorial UI.

### Components (style rules)

- **Primary button:** pill, background **deep forest** with light text; hover shifts subtly toward **terracotta** or slightly lightens.
- **Secondary button:** transparent with **1px sage border**, sage text.
- Button label typography: **uppercase**, **wide tracking**, small size.
- **Cards:** rounded-3xl, soft border optional, hover: slight lift + shadow bloom (annotate motion intent).
- **Inputs:** underline style **or** pill fields on **warm off-white** fill; focus ring **sage** (not harsh blue).

### “Not generic” layout moves (still without photos)

- **Arch / blob placeholders** instead of rectangles for “media” slots.
- **Overlapping typography** allowed: headline slightly overlaps soft background shapes (not photos).
- **Decorative vine/root lines**: thin 1px meandering dividers between sections.
- **Staggered grids:** in multi-column desktop grids, offset every second card slightly vertically for an organic rhythm (still aligned to a sensible overall grid).

### Iconography

- Prefer **thin-stroke** icon style (conceptually like Lucide @ **1.5** stroke). Color: forest or sage. Don’t trap icons in heavy boxes—use soft circular pads if needed.

### Motion intent (annotate in prototype notes)

- Slow, eased, fluid: **300ms** for small UI, **500–700ms** for cards/sections, **up to 1000ms** for large spatial moves.
- Scroll reveal: gentle **fade + slide up** with stagger.
- Hover: cards lift; placeholder “media” scales slightly; links can use **underline grow from center**.
- **No janky snapping.**

### Layout scale for desktop web (mandatory)

- **Whitespace is sacred** on large screens: use **generous vertical section spacing** (the spirit of `py-24`–`py-32` at desktop) and wide gutters.
- **Grids** should use **2–4 columns** where appropriate on web (featured work, project grid, insights cards), not a single stacked column.
- **Hero** may be **split layout** (text + abstract placeholder panel) to use horizontal real estate.
- **Hover behaviors** should be explicitly visible in the prototype (states or notes): cards lift, links underline, subtle scale on placeholder shapes.

---

## Hard constraints for Stitch output

1. **No images** of people; **no avatars**; **no stock photography**. Use **abstract** placeholders only.
2. Produce **desktop web frames only** (no mobile variants, no phone mockups). Cover at minimum: **Home, Projects, Project detail, Article, About, Contact** — each at **~1440px** wide (or within **1280–1600px**).
3. Keep IA **flat** and navigation consistent across pages.
4. Apply the **Botanical / Organic Serif** tokens above as the single visual truth (supersedes any earlier generic “Inter-only” direction).

---

## Deliverable format

Produce **wide (desktop) labeled frames** with clear component hierarchy, realistic copy placeholders (professional English), and short **annotation callouts** where motion, glass header behavior, grain overlay, staggered grids, and hover interactions should appear.

**Anti-pitfall:** If anything in your generation pipeline biases toward **narrow/mobile layouts**, override it: keep the **1440-class** canvas, **horizontal nav**, and **multi-column** compositions.
