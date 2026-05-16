import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '@/data/site'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'

const filters = ['All Work', 'Product Design', 'Frontend', 'Research'] as const

export function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>('All Work')

  const list = useMemo(() => {
    if (active === 'All Work') return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  return (
    <main className="container section">
      <header className="stack-md" style={{ marginBottom: 'var(--section-gap)' }}>
        <h1 className="headline-lg">Curated Projects</h1>
        <p className="body-lg muted" style={{ maxWidth: '42rem', margin: 0 }}>
          A collection of intentional digital experiences where ethics, aesthetics, and user-centric systems converge.
        </p>
      </header>

      <div className="cluster" style={{ marginBottom: '3rem' }}>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`pill-filter${active === f ? ' pill-filter--active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div
        className="stagger-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--gutter)',
        }}
      >
        {list.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="group" style={{ color: 'inherit' }}>
            <div className="panel" style={{ padding: '2rem', marginBottom: '1.25rem' }}>
              <MediaPlaceholder frame={p.frame} gradient={p.gradient} />
            </div>
            <span className="label-sm accent-terracotta" style={{ display: 'block' }}>
              {p.category.toUpperCase()} • {p.year}
            </span>
            <h3 className="headline-sm stack-sm" style={{ marginTop: '0.35rem' }}>
              {p.title}
            </h3>
            <p className="body-md muted">{p.summary}</p>
            <div className="cluster" style={{ marginTop: '0.75rem' }}>
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="meander" />
    </main>
  )
}
