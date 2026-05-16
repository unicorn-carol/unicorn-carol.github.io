import { Link } from 'react-router-dom'
import BlurText from '@/components/BlurText'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'
import { posts, projects, valueProps } from '@/data/site'

const featuredSlugs = ['alabaster-archive', 'flora-form'] as const

const handleAnimationComplete = () => {
  console.log('Animation completed!')
}

export function HomePage() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects

  const latest = posts.slice(0, 3)

  return (
    <main>
      <div className="container section">
        <section className="stack-lg" style={{ minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="label-sm accent-terracotta" style={{ marginBottom: '0.5rem' }}>
            Digital Curator &amp; Designer
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <BlurText
              text="Designing intentional spaces for the sustainable future of the digital world."
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="display-lg"
            />
          </div>
          <div className="row" style={{ marginTop: '2.5rem', gap: '2rem' }}>
            <Link to="/projects" className="btn-primary">
              View Selected Works
            </Link>
            <p className="body-lg muted" style={{ maxWidth: '22rem', margin: 0 }}>
              A practice rooted in slow design, tactile textures, and high-end editorial precision.
            </p>
          </div>
        </section>

        <section className="section-tight">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--gutter)',
            }}
          >
            {valueProps.map((vp) => (
              <div key={vp.title} className="card-surface">
                <span className="material-symbols-outlined lg" style={{ color: 'var(--primary)' }}>
                  {vp.icon}
                </span>
                <h3 className="headline-sm stack-sm" style={{ marginTop: '1.25rem' }}>
                  {vp.title}
                </h3>
                <p className="body-md muted" style={{ margin: 0, marginTop: '0.75rem' }}>
                  {vp.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="container">
        <div className="meander" />
      </div>

      <div className="container section">
        <section>
          <div className="row-between" style={{ marginBottom: '3rem' }}>
            <div>
              <p className="label-sm accent-terracotta" style={{ marginBottom: '0.35rem' }}>
                Narratives
              </p>
              <h2 className="headline-lg">Selected Projects</h2>
            </div>
            <Link to="/projects" className="link-inline body-md">
              Browse all archive
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  marginTop: i === 1 ? 'clamp(0px, 6vw, 4.5rem)' : undefined,
                }}
              >
                <MediaPlaceholder frame={p.frame} gradient={p.gradient} />
                <p className="label-sm accent-terracotta" style={{ marginTop: '1.25rem' }}>
                  {String(i + 1).padStart(2, '0')} — {p.category.toUpperCase()}
                </p>
                <h3 className="headline-md" style={{ marginTop: '0.35rem' }}>
                  {p.title}
                </h3>
                <p className="body-md muted" style={{ marginTop: '0.5rem', maxWidth: '36ch' }}>
                  {p.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--gutter)',
            }}
          >
            <div style={{ position: 'sticky', top: '7rem', alignSelf: 'start' }}>
              <h2 className="headline-lg">
                Latest
                <br />
                <span className="italic">Insights</span>
              </h2>
            </div>
            <div style={{ gridColumn: 'span 1' }}>
              {latest.map((post) => (
                <Link key={post.slug} to={`/insights/${post.slug}`} className="insight-row" style={{ color: 'inherit' }}>
                  <div>
                    <span className="label-sm muted">
                      {post.date.toUpperCase()} — {post.tag.toUpperCase()}
                    </span>
                    <h4 className="headline-sm" style={{ marginTop: '0.35rem' }}>
                      {post.title}
                    </h4>
                  </div>
                  <span className="material-symbols-outlined muted">arrow_outward</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
