import { Link, Navigate, useParams } from 'react-router-dom'
import { projectBySlug } from '@/data/site'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? projectBySlug(slug) : undefined
  if (!project) return <Navigate to="/projects" replace />

  return (
    <main className="container section">
      <p className="label-sm muted">
        <Link to="/projects" className="link-inline" style={{ fontWeight: 600 }}>
          Projects
        </Link>{' '}
        / {project.title}
      </p>

      <header className="stack-md" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
        <h1 className="display-lg">{project.title}</h1>
        <p className="body-lg muted" style={{ margin: 0, maxWidth: '52ch' }}>
          {project.summary}
        </p>
        <div className="cluster">
          <span className="tag">{project.category}</span>
          <span className="tag">{project.year}</span>
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </header>

      <div style={{ maxWidth: '880px' }}>
        <div className="panel" style={{ padding: '2rem', marginBottom: 'var(--section-gap)' }}>
          <MediaPlaceholder frame={project.frame} gradient={project.gradient} aspect="16 / 9" />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'var(--gutter)',
        }}
      >
        <section className="card-surface">
          <h2 className="headline-sm">Context</h2>
          <p className="body-md muted" style={{ marginTop: '0.75rem' }}>
            {project.body.context}
          </p>
        </section>
        <section className="card-surface">
          <h2 className="headline-sm">Challenge</h2>
          <p className="body-md muted" style={{ marginTop: '0.75rem' }}>
            {project.body.challenge}
          </p>
        </section>
        <section className="card-surface">
          <h2 className="headline-sm">Solution</h2>
          <p className="body-md muted" style={{ marginTop: '0.75rem' }}>
            {project.body.solution}
          </p>
        </section>
        <section className="card-surface">
          <h2 className="headline-sm">Outcomes</h2>
          <p className="body-md muted" style={{ marginTop: '0.75rem' }}>
            {project.body.outcomes}
          </p>
        </section>
      </div>

      <div className="row" style={{ marginTop: '2.5rem' }}>
        <Link to="/projects" className="btn-secondary">
          ← All projects
        </Link>
        <Link to="/contact" className="btn-primary">
          Start a conversation
        </Link>
      </div>
    </main>
  )
}
