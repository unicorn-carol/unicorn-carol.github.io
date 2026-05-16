export type Project = {
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  summary: string
  tags: string[]
  frame: 'arch' | 'blob' | 'rect'
  gradient: string
  body: {
    context: string
    challenge: string
    solution: string
    outcomes: string
  }
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  readMinutes: number
  sections: { id: string; heading: string; paragraphs: string[] }[]
}

export const projects: Project[] = [
  {
    slug: 'ethereal-commerce',
    title: 'Ethereal Commerce',
    subtitle: 'Product Design • 2024',
    category: 'Product Design',
    year: '2024',
    summary: 'A high-end retail experience for sustainable textiles focused on tactile digital interactions.',
    tags: ['UX Research', 'Shopify'],
    frame: 'arch',
    gradient: 'linear-gradient(135deg, rgba(140,154,132,0.35) 0%, rgba(159,148,136,0.45) 100%)',
    body: {
      context: 'A heritage textile brand needed a digital flagship that matched the quiet confidence of its physical atelier.',
      challenge: 'Balance cinematic storytelling with fast, trustworthy checkout—without defaulting to loud ecommerce patterns.',
      solution: 'Editorial pacing, tactile surfaces, and a component system built around clarity, restraint, and accessible motion.',
      outcomes: 'Higher consideration-to-purchase intent in usability tests and a reusable pattern library for seasonal drops.',
    },
  },
  {
    slug: 'biophilic-systems',
    title: 'Biophilic Systems',
    subtitle: 'Research • 2023',
    category: 'Research',
    year: '2023',
    summary: 'Examining the psychological impact of natural patterns in dashboard design ecosystems.',
    tags: ['Cognitive Science', 'Data Viz'],
    frame: 'blob',
    gradient: 'linear-gradient(145deg, rgba(216,231,206,0.85) 0%, rgba(140,154,132,0.35) 55%, rgba(253,173,150,0.35) 100%)',
    body: {
      context: 'Operations teams spend hours in dense dashboards; small visual choices compound into fatigue.',
      challenge: 'Quantify which organic layout rhythms reduce perceived workload without harming task speed.',
      solution: 'A three-phase study pairing eye-tracking sessions with simplified prototype variants and scoring rubrics.',
      outcomes: 'A practical set of biomorphic spacing rules and chart skins adopted across two product squads.',
    },
  },
  {
    slug: 'lumina-framework',
    title: 'Lumina Framework',
    subtitle: 'Frontend • 2024',
    category: 'Frontend',
    year: '2024',
    summary: 'A React-based component library prioritizing accessibility and motion fluidity.',
    tags: ['Tailwind', 'TypeScript'],
    frame: 'arch',
    gradient: 'linear-gradient(160deg, rgba(221,236,223,0.95) 0%, rgba(85,98,79,0.22) 100%)',
    body: {
      context: 'Multiple products needed a shared visual language without copying generic “AI slop” UI templates.',
      challenge: 'Ship quickly while preserving WCAG AA contrast, focus order, and reduced-motion respect.',
      solution: 'Tokens-first styling, strict component contracts, and motion specs timed for calm, not novelty.',
      outcomes: 'Faster feature delivery with fewer one-off styles and fewer accessibility regressions in QA.',
    },
  },
  {
    slug: 'rooted-identity',
    title: 'Rooted Identity',
    subtitle: 'Product Design • 2023',
    category: 'Product Design',
    year: '2023',
    summary: 'Brand strategy and digital presence for a vertical farming initiative in urban spaces.',
    tags: ['Branding', 'Sustainability'],
    frame: 'blob',
    gradient: 'linear-gradient(180deg, rgba(159,148,136,0.4) 0%, rgba(216,231,206,0.55) 100%)',
    body: {
      context: 'A climate-tech startup needed credibility with municipalities and luxury hospitality buyers alike.',
      challenge: 'Speak credibly about science while staying warm, tactile, and editorial.',
      solution: 'A modular identity system: typographic grid, botanical geometry, and documentation for real-world signage.',
      outcomes: 'A coherent launch across web, investor deck, and field collateral within one design system.',
    },
  },
  {
    slug: 'canvas-engine',
    title: 'Canvas Engine',
    subtitle: 'Frontend • 2022',
    category: 'Frontend',
    year: '2022',
    summary: 'Experimental WebGL implementation of physical paper textures in browser interfaces.',
    tags: ['WebGL', 'Creative Coding'],
    frame: 'arch',
    gradient: 'linear-gradient(135deg, rgba(197,200,191,0.55) 0%, rgba(238,253,240,0.9) 100%)',
    body: {
      context: 'A prototype lab wanted to explore haptic-inspired visuals without shipping heavy video assets.',
      challenge: 'Keep performance stable on mid-range laptops while maintaining tactile richness.',
      solution: 'Layered shaders with adaptive quality, optional grain passes, and fallbacks to CSS textures.',
      outcomes: 'A demo kit used in two client workshops to align stakeholders on “slow tech” aesthetics.',
    },
  },
  {
    slug: 'ethical-ai-patterns',
    title: 'Ethical AI Patterns',
    subtitle: 'Research • 2024',
    category: 'Research',
    year: '2024',
    summary: 'Framework for designing transparent AI agents that respect human cognitive load.',
    tags: ['AI Ethics', 'HCI'],
    frame: 'blob',
    gradient: 'linear-gradient(120deg, rgba(121,63,45,0.18) 0%, rgba(140,154,132,0.28) 100%)',
    body: {
      context: 'Teams were shipping assistants that looked helpful but obscured data use and failure modes.',
      challenge: 'Make transparency feel premium—not legalistic—and keep flows short.',
      solution: 'Pattern cards for disclosure, recovery, and escalation; each paired with UI examples and content templates.',
      outcomes: 'Adopted as the review checklist for three shipping features and one public beta.',
    },
  },
  {
    slug: 'alabaster-archive',
    title: 'The Alabaster Archive',
    subtitle: '01 — Digital Experience',
    category: 'Digital Experience',
    year: '2024',
    summary: 'An exploration of minimal architectural forms translated into a tactile digital navigation system.',
    tags: ['Systems', 'Navigation'],
    frame: 'arch',
    gradient: 'linear-gradient(145deg, rgba(140,154,132,0.25) 0%, rgba(159,148,136,0.35) 100%)',
    body: {
      context: 'A cultural archive wanted browsing to feel calm, continuous, and grounded.',
      challenge: 'Avoid the “database UI” feeling while still supporting deep collections and faceted filters.',
      solution: 'A pacing model borrowed from editorial spreads: slow reveals, generous margins, and predictable wayfinding.',
      outcomes: 'Strong qualitative feedback from curators; measurable drop in “lost in navigation” tasks.',
    },
  },
  {
    slug: 'flora-form',
    title: 'Flora & Form',
    subtitle: '02 — Brand Identity',
    category: 'Brand Identity',
    year: '2023',
    summary: 'A tactile identity system for a sustainable architecture collective in Northern Scandinavia.',
    tags: ['Brand', 'Print'],
    frame: 'blob',
    gradient: 'linear-gradient(135deg, rgba(253,173,150,0.35) 0%, rgba(238,224,211,0.65) 100%)',
    body: {
      context: 'The collective’s work is physical—timber, light, snow—and the brand needed to echo that material honesty.',
      challenge: 'Create a flexible mark that works across tiny labels, large signage, and quiet digital spaces.',
      solution: 'Geometry derived from growth patterns, paired with strict typographic discipline and a small color chord.',
      outcomes: 'Launch-ready toolkit spanning motion rules, stationery, and a lightweight site system.',
    },
  },
]

export const posts: Post[] = [
  {
    slug: 'tactile-web-texture',
    title: 'The Tactile Web: Why Digital Design Needs Texture',
    excerpt:
      'Exploring the intersection of organic materials and digital interfaces, and why the future of UI is haptic-inspired and warm.',
    date: 'Oct 24, 2024',
    tag: 'Digital Craft',
    readMinutes: 12,
    sections: [
      {
        id: 'introduction',
        heading: 'Introduction',
        paragraphs: [
          'Texture is not decoration—it is a promise. It tells a user that a surface can be approached, that there is friction, depth, and intent.',
          'When everything is perfectly flat, interfaces begin to feel interchangeable. The tactile web asks for grain, rhythm, and temperature.',
        ],
      },
      {
        id: 'practice',
        heading: 'A practice, not a trend',
        paragraphs: [
          'Begin with tone: choose a palette that can carry shadow without turning muddy. Add restrained noise—not spectacle—and let typography carry the narrative.',
          'Motion should behave like light through leaves: slow, predictable, and easy to opt out of.',
        ],
      },
      {
        id: 'closing',
        heading: 'Closing notes',
        paragraphs: [
          'If you remember one thing: tactility is coherence. The same care you bring to spacing should appear in feedback states, focus rings, and empty states.',
        ],
      },
    ],
  },
  {
    slug: 'stillness-workflows',
    title: 'Finding Stillness in High-Performance Workflows',
    excerpt: 'A deep dive into intentional productivity and how minimalist environments foster creative breakthroughs.',
    date: 'Sep 15, 2024',
    tag: 'Philosophy',
    readMinutes: 6,
    sections: [
      {
        id: 'introduction',
        heading: 'Introduction',
        paragraphs: [
          'Performance culture often mistakes speed for clarity. Stillness is not absence—it is room for decisions to land correctly.',
        ],
      },
      {
        id: 'rituals',
        heading: 'Rituals that scale',
        paragraphs: [
          'The best teams build rituals: quieter reviews, fewer surfaces, and documentation that reads like a calm conversation.',
          'Protect attention like a finite resource—because it is.',
        ],
      },
    ],
  },
  {
    slug: 'editorial-shift-typography',
    title: 'The Editorial Shift: Typography as Architecture',
    excerpt:
      'How high-contrast serif pairings are reshaping the visual hierarchy of modern portfolio designs.',
    date: 'Aug 28, 2024',
    tag: 'Typography',
    readMinutes: 8,
    sections: [
      {
        id: 'introduction',
        heading: 'Introduction',
        paragraphs: [
          'Serif headings are not nostalgia. They are spatial: they carve columns, set tempo, and slow the eye where it matters.',
        ],
      },
      {
        id: 'pairing',
        heading: 'Pairing with discipline',
        paragraphs: [
          'Pair display serifs with a humanist sans for stamina. The pairing works when each role is disciplined—display stays display; text stays text.',
        ],
      },
    ],
  },
]

export const olderPosts = [
  { date: 'July 12', title: 'Sustainable Color Theory', slug: 'tactile-web-texture' },
  { date: 'June 30', title: 'Botanical Motifs in UI', slug: 'editorial-shift-typography' },
  { date: 'May 15', title: 'The Art of White Space', slug: 'stillness-workflows' },
] as const

export const valueProps = [
  {
    icon: 'eco',
    title: 'Organic Softness',
    body: 'Interactions designed with a natural flow—avoiding rigid grids when they fight human pacing.',
  },
  {
    icon: 'auto_stories',
    title: 'Editorial Intent',
    body: 'Typography and whitespace that mimic the rhythm of a premium publication, not a feed.',
  },
  {
    icon: 'texture',
    title: 'Natural Texture',
    body: 'Subtle grain and tonal layering to reduce clinical flatness and digital fatigue.',
  },
]

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function postBySlug(slug: string) {
  return posts.find((p) => p.slug === slug)
}
