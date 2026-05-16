import { Link, Navigate, useParams } from 'react-router-dom'
import { postBySlug } from '@/data/site'

export function ArticlePage() {
  const { slug } = useParams()
  const post = slug ? postBySlug(slug) : undefined
  if (!post) return <Navigate to="/insights" replace />

  return (
    <main className="container section">
      <p className="label-sm muted">
        <Link to="/insights">Insights</Link>
        <span aria-hidden> / </span>
        {post.title}
      </p>

      <header className="stack-md" style={{ marginTop: '1rem', marginBottom: '2rem', maxWidth: '52rem' }}>
        <div className="row" style={{ color: 'var(--tertiary)', gap: '0.75rem' }}>
          <time className="label-sm">{post.date.toUpperCase()}</time>
          <span className="label-sm">•</span>
          <span className="label-sm">{post.readMinutes} MIN READ</span>
          <span className="label-sm">•</span>
          <span className="label-sm">{post.tag.toUpperCase()}</span>
        </div>
        <h1 className="display-lg">{post.title}</h1>
        <p className="body-lg muted" style={{ margin: 0 }}>
          {post.excerpt}
        </p>
      </header>

      <div className="article-layout">
        <article className="stack-lg">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="stack-md">
              <h2 className="headline-md">{section.heading}</h2>
              {section.paragraphs.map((para, i) => (
                <p key={`${section.id}-${i}`} className="body-lg muted" style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </section>
          ))}
          <blockquote className="site-quote body-lg">
            Slow reading is a feature. If this resonated, you might enjoy starting with texture tokens before typography scales.
          </blockquote>
          <code className="site-code">/* grain-overlay: fixed; opacity: 0.035; mix-blend-mode: multiply; */</code>
        </article>

        <aside className="toc" aria-label="Table of contents">
          <p className="label-sm" style={{ marginBottom: '0.75rem', color: 'var(--secondary)' }}>
            ON THIS PAGE
          </p>
          {post.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.heading}
            </a>
          ))}
        </aside>
      </div>

      <div className="row" style={{ marginTop: '3rem' }}>
        <Link to="/insights" className="btn-secondary">
          ← All insights
        </Link>
        <Link to="/contact" className="btn-primary">
          Continue the conversation
        </Link>
      </div>
    </main>
  )
}
