import { useState, type FormEvent } from 'react'
import { MediaPlaceholder } from '@/components/MediaPlaceholder'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="container section">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--gutter)',
          alignItems: 'start',
        }}
      >
        <div className="stack-lg">
          <div>
            <span className="label-sm" style={{ color: 'var(--primary)' }}>
              GET IN TOUCH
            </span>
            <h1 className="display-lg" style={{ marginTop: '0.75rem' }}>
              Let&apos;s sow seeds
            </h1>
            <p className="body-lg muted" style={{ maxWidth: '36ch' }}>
              Whether you have a budding idea or a fully-grown vision, I am here to help it flourish. Collaborations, inquiries, or a quiet
              conversation—all welcome.
            </p>
          </div>
          <div>
            <h3 className="headline-sm accent-terracotta" style={{ marginBottom: '0.75rem' }}>
              Follow the journey
            </h3>
            <div className="stack-sm">
              <a className="row body-md" href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ gap: '0.65rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>
                  diversity_2
                </span>
                <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>LinkedIn</span>
              </a>
              <a className="row body-md" href="https://github.com" target="_blank" rel="noreferrer" style={{ gap: '0.65rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>
                  code
                </span>
                <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>GitHub</span>
              </a>
              <a className="row body-md" href="https://xiaohongshu.com" target="_blank" rel="noreferrer" style={{ gap: '0.65rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>
                  spa
                </span>
                <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Xiaohongshu</span>
              </a>
            </div>
          </div>
          <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
            <MediaPlaceholder
              frame="blob"
              aspect="4 / 3"
              gradient="linear-gradient(160deg, rgba(216,231,206,0.75) 0%, rgba(159,148,136,0.35) 100%)"
            />
          </div>
        </div>

        <div className="panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          {sent ? (
            <p className="body-lg" style={{ margin: 0 }}>
              Thank you—your note is recorded for this prototype. Connect via email for a real reply:{' '}
              <a href="mailto:hello@carol-design.com">hello@carol-design.com</a>
            </p>
          ) : (
            <form className="stack-lg" onSubmit={onSubmit}>
              <div className="stack-lg">
                <div>
                  <label className="label-sm muted" htmlFor="name">
                    NAME
                  </label>
                  <input className="input-underline" id="name" name="name" type="text" placeholder="Your full name" autoComplete="name" />
                </div>
                <div>
                  <label className="label-sm muted" htmlFor="email">
                    EMAIL
                  </label>
                  <input
                    className="input-underline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label className="label-sm muted" htmlFor="message">
                    MESSAGE
                  </label>
                  <textarea
                    className="input-underline"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share your thoughts or project details..."
                  />
                </div>
              </div>
              <div className="row-between" style={{ marginTop: '0.5rem' }}>
                <span className="row label-sm muted" style={{ gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    lock
                  </span>
                  Secured connection
                </span>
                <button type="submit" className="btn-primary">
                  Send Inquiry
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="meander" />
      <p className="body-md muted" style={{ textAlign: 'center' }}>
        Prefer email?{' '}
        <a href="mailto:hello@carol-design.com" className="accent-terracotta" style={{ fontWeight: 700 }}>
          hello@carol-design.com
        </a>
      </p>
    </main>
  )
}
