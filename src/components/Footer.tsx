import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div style={{ maxWidth: '26rem' }}>
            <span className="headline-sm" style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.75rem' }}>
              Carol
            </span>
            <p className="body-md muted" style={{ marginBottom: '1.5rem' }}>
              Let&apos;s create something intentional. Open to collaborations with thoughtful teams and sustainable-focused
              brands.
            </p>
            <a href="mailto:hello@carol-design.com" className="accent-terracotta" style={{ fontWeight: 700 }}>
              hello@carol-design.com
            </a>
          </div>
          <div className="footer-grid">
            <div className="footer-col">
              <span className="label-sm">Connect</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://xiaohongshu.com" target="_blank" rel="noreferrer">
                Xiaohongshu
              </a>
            </div>
            <div className="footer-col">
              <span className="label-sm">Studio</span>
              <Link to="/about">About</Link>
              <Link to="/projects">Work</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <span className="label-sm">Archive</span>
              <Link to="/insights">Insights</Link>
              <Link to="/projects">Case Studies</Link>
              <button
                type="button"
                className="body-md"
                style={{ textAlign: 'left', color: 'var(--tertiary)' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Carol. Lifelong Learner.</span>
          <span>Hand-curated digital design.</span>
        </div>
      </div>
    </footer>
  )
}
