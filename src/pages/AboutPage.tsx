import { Link } from 'react-router-dom'

const timeline = [
  {
    range: '2021—Present',
    title: 'Lead Product Designer',
    org: 'Verdant Global',
    body: 'Spearheading the digital transformation of heritage sustainability brands, focusing on high-end editorial commerce platforms.',
  },
  {
    range: '2018—2021',
    title: 'Design Strategist',
    org: 'Ochre Creative Studio',
    body: 'Developed visual identities for boutique hotel groups and organic architectural firms across Southeast Asia.',
  },
  {
    range: '2015—2018',
    title: 'UI/UX Designer',
    org: 'Elemental Labs',
    body: 'Crafting complex dashboard systems for renewable energy monitoring with a focus on data visualization and accessibility.',
  },
  {
    range: '2013—2015',
    title: 'Junior Designer',
    org: 'Paper & Pixel',
    body: 'Early career focusing on typography-rich print layouts and the transition to responsive web frameworks.',
  },
] as const

const toolbox = [
  {
    icon: 'architecture',
    title: 'Visual Craft',
    tags: ['UI Design', 'Art Direction', 'Typography'],
  },
  {
    icon: 'psychology',
    title: 'Strategy',
    tags: ['UX Audit', 'Systems Thinking', 'Content'],
  },
  {
    icon: 'code',
    title: 'Development',
    tags: ['React', 'Design Systems', 'Prototyping'],
  },
] as const

export function AboutPage() {
  return (
    <main className="container section">
      <section style={{ marginBottom: 'var(--section-gap)' }}>
        <h1 className="display-lg" style={{ color: 'var(--primary)', maxWidth: '52rem' }}>
          Crafting intentional digital experiences through the lens of <span className="italic accent-terracotta">sustainable luxury</span>.
        </h1>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'var(--gutter)',
          alignItems: 'start',
        }}
      >
        <div>
          <div
            className="panel"
            style={{
              position: 'sticky',
              top: '6rem',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              display: 'grid',
              placeItems: 'center',
              padding: '2rem',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                border: '1px solid color-mix(in srgb, var(--outline-variant) 45%, transparent)',
                borderRadius: 'var(--radius-lg)',
                display: 'grid',
                placeItems: 'center',
                background: 'linear-gradient(145deg, rgba(85,98,79,0.08), transparent)',
              }}
            >
              <div
                style={{
                  width: '5.5rem',
                  height: '5.5rem',
                  borderRadius: '999px',
                  border: '2px solid color-mix(in srgb, var(--primary) 28%, transparent)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <span className="material-symbols-outlined lg" style={{ color: 'color-mix(in srgb, var(--primary) 45%, transparent)' }}>
                  eco
                </span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <p className="label-sm" style={{ color: 'var(--primary)' }}>
              BASED IN SHANGHAI
            </p>
            <p className="body-md muted" style={{ margin: 0, marginTop: '0.35rem' }}>
              Design Strategist &amp; Sustainable Living Advocate
            </p>
          </div>
        </div>

        <div className="stack-lg" style={{ maxWidth: '52rem' }}>
          <h2 className="headline-lg">The Philosophy</h2>
          <div className="stack-md body-lg muted">
            <p style={{ margin: 0 }}>
              My journey began at the intersection of tactile craft and digital precision. I believe that a user interface should feel as
              substantial as linen or sun-bleached stone. In a world of fleeting digital noise, I strive to create slow tech—interfaces
              that invite lingering, reflection, and calm.
            </p>
            <p style={{ margin: 0 }}>
              With experience across boutiques and global sustainability initiatives, I approach every project as a narrative environment:
              minimizing cognitive load while maximizing emotional resonance, and keeping the luxury of simplicity honest and usable.
            </p>
          </div>
          <div className="row">
            <Link to="/contact" className="btn-primary">
              Request portfolio PDF
            </Link>
            <Link to="/contact" className="btn-secondary">
              Work With Me
            </Link>
          </div>
        </div>
      </section>

      <div className="meander" />

      <section>
        <div className="row-between" style={{ marginBottom: '2rem' }}>
          <div>
            <span className="label-sm" style={{ color: 'var(--tertiary)' }}>
              CHRONOLOGY
            </span>
            <h2 className="headline-lg" style={{ marginTop: '0.35rem' }}>
              A Decade of Growth
            </h2>
          </div>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.range} className="timeline-card card-surface">
              <span className="headline-md" style={{ color: 'color-mix(in srgb, var(--primary) 35%, transparent)' }}>
                {item.range}
              </span>
              <h3 className="headline-sm" style={{ marginTop: '1rem' }}>
                {item.title}
              </h3>
              <p className="label-sm accent-terracotta" style={{ marginTop: '0.35rem' }}>
                {item.org}
              </p>
              <p className="body-md muted" style={{ marginTop: '0.75rem' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ position: 'relative', minHeight: '520px' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '300px',
              height: '300px',
              border: '1px solid color-mix(in srgb, var(--outline-variant) 35%, transparent)',
              borderRadius: '999px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              border: '1px solid color-mix(in srgb, var(--outline-variant) 18%, transparent)',
              borderRadius: '999px',
            }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '52rem', marginInline: 'auto' }}>
          <span className="label-sm" style={{ color: 'var(--tertiary)' }}>
            CAPABILITIES
          </span>
          <h2 className="headline-lg" style={{ marginTop: '0.5rem', marginBottom: '2.5rem' }}>
            The Skill Stack
          </h2>
          <div className="cluster" style={{ justifyContent: 'center' }}>
            {toolbox.map((box) => (
              <div
                key={box.title}
                className="card-surface"
                style={{ width: '100%', maxWidth: '280px', textAlign: 'left' }}
              >
                <span className="material-symbols-outlined lg" style={{ color: 'var(--primary)' }}>
                  {box.icon}
                </span>
                <h4 className="headline-sm" style={{ marginTop: '0.75rem' }}>
                  {box.title}
                </h4>
                <div className="cluster" style={{ marginTop: '0.75rem' }}>
                  {box.tags.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
