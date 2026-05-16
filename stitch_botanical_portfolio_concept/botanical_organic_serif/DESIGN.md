---
name: Botanical Organic Serif
colors:
  surface: '#eefdf0'
  surface-dim: '#cfded1'
  surface-bright: '#eefdf0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e8f8ea'
  surface-container: '#e3f2e4'
  surface-container-high: '#ddecdf'
  surface-container-highest: '#d7e6d9'
  on-surface: '#121e16'
  on-surface-variant: '#444841'
  inverse-surface: '#26332b'
  inverse-on-surface: '#e6f5e7'
  outline: '#757870'
  outline-variant: '#c5c8bf'
  surface-tint: '#55624f'
  primary: '#55624f'
  on-primary: '#ffffff'
  primary-container: '#8c9a84'
  on-primary-container: '#263221'
  inverse-primary: '#bccbb3'
  secondary: '#8b4e3b'
  on-secondary: '#ffffff'
  secondary-container: '#fdad96'
  on-secondary-container: '#793f2d'
  tertiary: '#665d52'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f9488'
  on-tertiary-container: '#342d24'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e7ce'
  primary-fixed-dim: '#bccbb3'
  on-primary-fixed: '#131e0f'
  on-primary-fixed-variant: '#3e4a38'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb59f'
  on-secondary-fixed: '#380d02'
  on-secondary-fixed-variant: '#6f3726'
  tertiary-fixed: '#eee0d3'
  tertiary-fixed-dim: '#d1c4b8'
  on-tertiary-fixed: '#211a12'
  on-tertiary-fixed-variant: '#4e453c'
  background: '#eefdf0'
  on-background: '#121e16'
  surface-variant: '#d7e6d9'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Sans Three
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans Three
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Source Sans Three
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style

This design system is a digital ode to the natural world, balancing the raw tactility of organic materials with the refined precision of high-end editorial design. It is built for a personal portfolio that positions itself within the "sustainable luxury" space—evoking feelings of calm, intentionality, and sophisticated warmth. 

The aesthetic style is a hybrid of **Minimalism** and **Tactile Design**, characterized by:
- **Organic Softness:** Every interaction and surface utilizes generous radii and flowing, non-linear transitions.
- **Editorial Intent:** High-contrast typography pairings and expansive whitespace mimic the pacing of a premium art publication.
- **Natural Texture:** A pervasive, subtle paper-grain overlay provides a physical quality to the digital screen, reducing the clinical feel of standard UI.

## Colors

The palette is derived from a botanical garden at dusk, grounded in earthy neutrals and vegetal greens.

- **Primary (Sage):** Used for soft accents, active states, and decorative structural elements.
- **Secondary (Terracotta):** Reserved strictly for "Interactive Pops" or high-priority Calls to Action to provide a warm, clay-like contrast.
- **Neutral (Deep Forest):** The primary color for all typography and iconography, ensuring high legibility while remaining softer than pure black.
- **Surfaces:** The background uses a warm Alabaster to reduce eye strain, while "Soft Clay" and "Light Stone" are used to differentiate content tiers without relying on heavy borders.

## Typography

The typographic hierarchy establishes a rhythmic, editorial feel. 

- **Headings:** Utilize Playfair Display. Italicize specific "expressive" words within a headline (e.g., "The *art* of slow living") to introduce a human, calligraphic touch.
- **Body:** Source Sans Three provides a clean, humanist contrast to the serif headings, ensuring long-form case studies remain highly readable.
- **Labels:** Use Small Caps with wide tracking (+0.15em) for category tags and metadata to create a structured, organized appearance.

## Layout & Spacing

This design system employs a **Fixed Grid** approach for desktop and a **Fluid Grid** for mobile.

- **Desktop:** A 12-column grid with a maximum container width of 1280px. Use generous 64px outer margins to frame content like a gallery wall.
- **Rhythm:** Spacing between sections is intentionally large (120px) to encourage slow scrolling and content absorption.
- **Dividers:** Instead of standard horizontal rules, use thin (1px) meandering lines that mimic root systems or vine growth to separate major narrative blocks.

## Elevation & Depth

Hierarchy is achieved through subtle tonal shifts and transparency rather than aggressive shadows.

- **The Paper Base:** The entire UI is covered with a 3% opacity grain texture overlay, fixed to the viewport to provide a tactile "tooth" to the design.
- **Glassmorphism:** The global header uses a high-blur (20px) backdrop filter with a semi-transparent Alabaster (#F9F8F4CC) fill on scroll, allowing content to bleed through softly.
- **Shadows:** When depth is required (e.g., a floating card), use a "Forest Mist" shadow. This is an ultra-diffused shadow with a slight Deep Forest (#2D3A31) tint at 5-8% opacity. No hard edges.
- **Tonal Layering:** Objects at a higher elevation use the "Light Stone" surface instead of white, creating a stacked, physical effect.

## Shapes

The shape language is strictly organic and non-industrial.

- **Radii:** A standard 24px (rounded-3xl) radius is applied to all cards and containers to eliminate harsh corners. 
- **Buttons:** All interactive buttons must be pill-shaped (fully rounded).
- **Media Frames:** Photography and video placeholders should utilize "Arch" frames (rounded top, flat bottom) or asymmetrical "blob" shapes to reinforce the botanical narrative. Avoid standard rectangles at all costs.

## Components

- **Buttons:** Pill-shaped. Primary buttons use the Terracotta (#C27B66) background with Alabaster text. Secondary buttons use a Sage outline (1.5px) with Sage text.
- **Cards:** 24px corner radius. Use the "Soft Clay" surface (#DCCFC2) with a 1px "Stone" border (#E6E2DA). Ensure padding is generous (minimum 32px).
- **Inputs:** Soft stone background with a bottom-only border. Labels sit above in the Small Caps style.
- **Icons:** Use 1.5px thin-stroke icons. Icons should never be filled; they should remain airy and linear.
- **Selection Controls:** Checkboxes and radios should be custom-styled to match the Primary Sage color, with the radio button utilizing a "concentric circle" design (a dot within a ring).
- **Navigation:** Underline active links with a hand-drawn-style meandering line instead of a straight 1px stroke.
- **Media Placeholders:** Strictly NO photography of people. Use abstract botanical motifs, textured gradients, or arch-framed landscape/nature photography.