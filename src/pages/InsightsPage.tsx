import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { olderPosts, posts } from '@/data/site'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'

const tagFilters = ['All Articles', 'Sustainability', 'Digital Craft', 'Typography', 'Philosophy'] as const

export function InsightsPage() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<(typeof tagFilters)[number]>('All Articles')

  const featured = posts[0]

  const filtered = useMemo(() => {
    return posts.slice(1).filter((p) => {
      const matchesQ =
        !query.trim() ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase())
      const matchesTag = tag === 'All Articles' || p.tag === tag
      return matchesQ && matchesTag
    })
  }, [query, tag])

  return (
    <main className="container section">
      <section style={{ marginBottom: 'var(--section-gap)' }}>
        <span className="label-sm" style={{ color: 'var(--primary)' }}>
          ARCHIVE OF THOUGHTS
        </span>
        <h1 className="display-lg" style={{ maxWidth: '46rem', marginTop: '0.75rem' }}>
          Curated reflections on design, nature, and the digital craft.
        </h1>
        <div className="meander" style={{ marginTop: '2rem', marginBottom: 0 }} />
      </section>

      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--gutter)',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '3rem',
        }}
      >
        <div className="search-field" style={{ flex: '1 1 280px', maxWidth: '420px' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>
            search
          </span>
          <input
            type="search"
            placeholder="Search insights..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search insights"
          />
        </div>
        <div className="cluster">
          {tagFilters.map((t) => (
            <button
              key={t}
              type="button"
              className={`pill-filter${tag === t ? ' pill-filter--active' : ''}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="stack-lg">
        <article
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <MediaPlaceholder
            frame="arch"
            aspect="16 / 9"
            gradient="linear-gradient(120deg, rgba(140,154,132,0.35) 0%, rgba(221,236,223,0.75) 100%)"
          />
          <div>
            <div className="row" style={{ gap: '0.75rem', marginBottom: '1rem', color: 'var(--tertiary)' }}>
              <time className="label-sm">{featured.date.toUpperCase()}</time>
              <span className="label-sm">•</span>
              <span className="label-sm">{featured.readMinutes} MIN READ</span>
            </div>
            <h2 className="headline-lg" style={{ marginBottom: '1rem' }}>
              {featured.title}
            </h2>
            <p className="body-lg muted" style={{ marginBottom: '1.75rem' }}>
              {featured.excerpt}
            </p>
            <Link to={`/insights/${featured.slug}`} className="link-inline label-sm" style={{ letterSpacing: '0.12em' }}>
              READ STORY
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </article>

        <div className="meander" style={{ opacity: 0.35 }} />

        {filtered.map((p) => (
          <div key={p.slug}>
            <article
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.5rem',
                paddingBlock: '1.25rem',
              }}
            >
              <time className="label-sm" style={{ color: 'var(--tertiary)' }}>
                {p.date.toUpperCase()}
              </time>
              <div style={{ gridColumn: 'span 2', minWidth: 0 }}>
                <Link to={`/insights/${p.slug}`} style={{ color: 'inherit' }}>
                  <h3 className="headline-sm" style={{ marginBottom: '0.35rem' }}>
                    {p.title}
                  </h3>
                  <p className="body-md muted" style={{ margin: 0 }}>
                    {p.excerpt}
                  </p>
                </Link>
              </div>
              <span className="label-sm" style={{ color: 'var(--tertiary)', justifySelf: 'end' }}>
                {p.readMinutes} MIN READ
              </span>
            </article>
            <div className="meander" style={{ marginBlock: 0, opacity: 0.2 }} />
          </div>
        ))}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--gutter)',
            marginTop: '2rem',
          }}
        >
          {olderPosts.map((o) => (
            <Link
              key={o.slug + o.date}
              to={`/insights/${o.slug}`}
              className="panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                color: 'inherit',
                transition: 'background 240ms ease',
              }}
            >
              <div>
                <time className="label-sm" style={{ color: 'var(--tertiary)' }}>
                  {o.date.toUpperCase()}
                </time>
                <h4 className="headline-sm" style={{ marginTop: '0.75rem' }}>
                  {o.title}
                </h4>
              </div>
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)', alignSelf: 'flex-end' }}>
                north_east
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: 'var(--section-gap)',
          padding: 'clamp(2rem, 6vw, 6rem)',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--secondary-container)',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '640px', marginInline: 'auto' }}>
          <h2 className="headline-lg" style={{ color: 'var(--on-secondary-container)' }}>
            Join the slow feed.
          </h2>
          <p className="body-lg" style={{ color: 'color-mix(in srgb, var(--on-secondary-container) 92%, transparent)' }}>
            Occasional insights on design and craft—delivered with intentionality.
          </p>
          <form
            className="row"
            style={{ marginTop: '1.75rem', justifyContent: 'center' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="input-underline"
              type="email"
              placeholder="email@example.com"
              aria-label="Email"
              style={{
                flex: '1 1 220px',
                maxWidth: '320px',
                borderRadius: '999px',
                border: 'none',
                background: 'color-mix(in srgb, var(--surface-container-lowest) 65%, transparent)',
                padding: '1rem 1.25rem',
              }}
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
