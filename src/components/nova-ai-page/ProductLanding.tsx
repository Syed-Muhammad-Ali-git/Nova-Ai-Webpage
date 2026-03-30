import React, { useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --surface2: #1a1a26;
    --accent: #6c63ff;
    --accent2: #ff6584;
    --accent3: #43e97b;
    --text: #f0f0ff;
    --muted: #8888aa;
    --border: rgba(108, 99, 255, 0.2);
    --glow: 0 0 40px rgba(108, 99, 255, 0.3);
  }

  .lp-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── HEADER ── */
  .lp-header {
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(20px);
    background: rgba(10, 10, 15, 0.85);
    border-bottom: 1px solid var(--border);
    padding: 0 5vw;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .lp-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lp-logo span {
    color: var(--accent3);
    -webkit-text-fill-color: var(--accent3);
  }

  .lp-nav {
    display: flex;
    gap: 2rem;
    align-items: center;
    list-style: none;
  }

  .lp-nav a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s;
  }

  .lp-nav a:hover { color: var(--text); }

  .lp-cta-btn {
    background: linear-gradient(135deg, var(--accent), #8b5cf6);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: opacity 0.2s, transform 0.2s;
  }

  .lp-cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }

  /* ── HERO ── */
  .lp-hero {
    min-height: calc(100vh - 68px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
    padding: 6rem 5vw;
    position: relative;
    overflow: hidden;
  }

  .lp-hero::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    pointer-events: none;
  }

  .lp-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(108, 99, 255, 0.12);
    border: 1px solid var(--border);
    border-radius: 100px;
    padding: 0.35rem 1rem;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--accent);
    margin-bottom: 1.5rem;
    animation: fadeUp 0.6s ease both;
  }

  .lp-badge-dot {
    width: 6px; height: 6px;
    background: var(--accent3);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .lp-hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1.5px;
    animation: fadeUp 0.6s 0.1s ease both;
  }

  .lp-hero-title .highlight {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lp-hero-desc {
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.75;
    margin-top: 1.25rem;
    max-width: 480px;
    animation: fadeUp 0.6s 0.2s ease both;
  }

  .lp-hero-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
    animation: fadeUp 0.6s 0.3s ease both;
  }

  .lp-btn-primary {
    background: linear-gradient(135deg, var(--accent), #8b5cf6);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.85rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: var(--glow);
  }

  .lp-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 60px rgba(108,99,255,0.5);
  }

  .lp-btn-secondary {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 0.85rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s, background 0.2s;
  }

  .lp-btn-secondary:hover {
    border-color: var(--accent);
    background: rgba(108,99,255,0.08);
  }

  /* ── PRODUCT IMAGE ── */
  .lp-hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeUp 0.6s 0.2s ease both;
  }

  .lp-product-card {
    position: relative;
    width: 100%;
    max-width: 460px;
    aspect-ratio: 4/3;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), var(--glow);
  }

  .lp-product-img {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    position: relative;
  }

  .lp-product-img::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse at 30% 20%, rgba(108,99,255,0.25) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(255,101,132,0.15) 0%, transparent 50%);
  }

  .lp-device-mockup {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .lp-device-screen {
    width: 180px;
    height: 120px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }

  .lp-device-icon {
    font-size: 3rem;
    filter: drop-shadow(0 0 20px rgba(108,99,255,0.8));
  }

  .lp-device-label {
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(255,255,255,0.7);
    letter-spacing: 2px;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }

  .lp-img-tag {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(67,233,123,0.15);
    border: 1px solid rgba(67,233,123,0.3);
    border-radius: 100px;
    padding: 0.3rem 0.8rem;
    font-size: 0.72rem;
    color: var(--accent3);
    font-weight: 600;
    z-index: 2;
  }

  /* ── STATS STRIP ── */
  .lp-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 3rem 5vw;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    flex-wrap: wrap;
  }

  .lp-stat {
    text-align: center;
  }

  .lp-stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lp-stat-label {
    color: var(--muted);
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }

  /* ── FEATURES ── */
  .lp-features {
    padding: 7rem 5vw;
  }

  .lp-section-label {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  .lp-section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    letter-spacing: -1px;
    max-width: 540px;
    margin-bottom: 4rem;
  }

  .lp-features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .lp-feature-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2.5rem 2rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
    cursor: default;
  }

  .lp-feature-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0;
    transition: opacity 0.3s;
  }

  .lp-feature-card:hover {
    transform: translateY(-6px);
    border-color: rgba(108,99,255,0.4);
  }

  .lp-feature-card:hover::before { opacity: 1; }

  .lp-feature-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  .lp-fi-1 { background: rgba(108,99,255,0.15); }
  .lp-fi-2 { background: rgba(255,101,132,0.15); }
  .lp-fi-3 { background: rgba(67,233,123,0.15); }

  .lp-feature-name {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .lp-feature-text {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.7;
  }

  /* ── FOOTER ── */
  .lp-footer {
    background: var(--surface);
    border-top: 1px solid var(--border);
    padding: 4rem 5vw 2rem;
  }

  .lp-footer-top {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .lp-footer-brand p {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.7;
    margin-top: 1rem;
    max-width: 260px;
  }

  .lp-footer-col h4 {
    font-family: 'Syne', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    color: var(--text);
  }

  .lp-footer-col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .lp-footer-col a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.88rem;
    transition: color 0.2s;
  }

  .lp-footer-col a:hover { color: var(--text); }

  .lp-footer-divider {
    height: 1px;
    background: var(--border);
    margin-bottom: 1.75rem;
  }

  .lp-footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .lp-footer-bottom p {
    color: var(--muted);
    font-size: 0.83rem;
  }

  .lp-footer-contact {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .lp-contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--muted);
    font-size: 0.85rem;
  }

  .lp-contact-item a {
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .lp-contact-item a:hover { color: var(--accent); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .lp-hero {
      grid-template-columns: 1fr;
      padding: 3rem 5vw;
      min-height: auto;
      text-align: center;
    }

    .lp-hero-desc { margin: 1.25rem auto 0; }
    .lp-hero-actions { justify-content: center; }
    .lp-hero-visual { order: -1; }
    .lp-product-card { max-width: 340px; }

    .lp-features-grid {
      grid-template-columns: 1fr;
    }

    .lp-footer-top {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .lp-nav { display: none; }
    .lp-stats { gap: 2rem; }
  }

  @media (max-width: 560px) {
    .lp-footer-top { grid-template-columns: 1fr; }
    .lp-footer-bottom { flex-direction: column; text-align: center; }
    .lp-hero-title { font-size: 2rem; }
    .lp-stats { gap: 1.5rem; }
    .lp-stat-num { font-size: 1.5rem; }
  }
`;

const ProductLanding: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".lp-feature-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "translateY(0)";
            }, i * 120);
          }
        });
      },
      { threshold: 0.1 },
    );
    cards.forEach((c) => {
      (c as HTMLElement).style.opacity = "0";
      (c as HTMLElement).style.transform = "translateY(30px)";
      (c as HTMLElement).style.transition =
        "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(c);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="lp-root">
        {/* ── HEADER ── */}
        <header className="lp-header">
          <div
            className="lp-logo"
            style={{ cursor: "pointer" }}
            onClick={() => window.location.replace("/")}
          >
            Nova<span>AI</span>
          </div>
          <nav>
            <ul className="lp-nav">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <button className="lp-cta-btn">Get Started →</button>
        </header>

        {/* ── HERO ── */}
        <section className="lp-hero" ref={heroRef}>
          <div className="lp-hero-content">
            <div className="lp-hero-badge">
              <span className="lp-badge-dot" />
              Now in Public Beta — Try for Free
            </div>
            <h1 className="lp-hero-title">
              The AI Platform <br />
              Built for <span className="highlight">Real Results</span>
            </h1>
            <p className="lp-hero-desc">
              NovaAI turns your raw data into intelligent decisions. Automate
              workflows, predict outcomes, and scale your operations — all from
              one unified dashboard.
            </p>
            <div className="lp-hero-actions">
              <button className="lp-btn-primary">Start Free Trial</button>
              <button className="lp-btn-secondary">Watch Demo ▶</button>
            </div>
          </div>

          {/* Product Image */}
          <div className="lp-hero-visual">
            <div className="lp-product-card">
              <div className="lp-product-img">
                <div className="lp-device-mockup">
                  <div className="lp-device-screen">
                    <span className="lp-device-icon">🧠</span>
                  </div>
                  <div className="lp-device-label">NovaAI Dashboard</div>
                </div>
                <div className="lp-img-tag">● Live</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="lp-stats">
          {[
            { num: "50K+", label: "Active Users" },
            { num: "99.9%", label: "Uptime SLA" },
            { num: "3.2×", label: "Avg. Productivity Gain" },
            { num: "140+", label: "Integrations" },
          ].map((s) => (
            <div className="lp-stat" key={s.label}>
              <div className="lp-stat-num">{s.num}</div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── FEATURES ── */}
        <section className="lp-features" id="features">
          <div className="lp-section-label">What We Offer</div>
          <h2 className="lp-section-title">Three pillars that set us apart</h2>
          <div className="lp-features-grid">
            <div className="lp-feature-card">
              <div className="lp-feature-icon lp-fi-1">⚡</div>
              <div className="lp-feature-name">Instant Automation</div>
              <p className="lp-feature-text">
                Build complex multi-step workflows in minutes — no code needed.
                Connect any tool in your stack and let NovaAI handle the
                repetitive work so your team can focus on what matters.
              </p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-icon lp-fi-2">🔮</div>
              <div className="lp-feature-name">Predictive Analytics</div>
              <p className="lp-feature-text">
                Go beyond dashboards. Our models analyze historical patterns and
                surface actionable forecasts before problems arise — giving you
                a true competitive edge.
              </p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-icon lp-fi-3">🔒</div>
              <div className="lp-feature-name">Enterprise-Grade Security</div>
              <p className="lp-feature-text">
                SOC 2 Type II certified, end-to-end encrypted, and compliant
                with GDPR & HIPAA. Your data never trains our models — it stays
                yours, always.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="lp-footer" id="contact">
          <div className="lp-footer-top">
            <div className="lp-footer-brand">
              <div className="lp-logo">
                Nova<span>AI</span>
              </div>
              <p>
                Intelligent automation for modern teams. We make AI accessible,
                reliable, and genuinely useful.
              </p>
              {/* Contact Information */}
              <div
                className="lp-footer-contact"
                style={{ marginTop: "1.25rem" }}
              >
                <div className="lp-contact-item">
                  <span>📧</span>
                  <a href="mailto:hello@novaai.io">hello@novaai.io</a>
                </div>
                <div className="lp-contact-item">
                  <span>📞</span>
                  <a href="tel:+1-800-NOVA-AI">+1 (800) 668-2-24</a>
                </div>
                <div className="lp-contact-item">
                  <span>📍</span>
                  <span>San Francisco, CA 94105</span>
                </div>
              </div>
            </div>

            <div className="lp-footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#!">Features</a>
                </li>
                <li>
                  <a href="#!">Integrations</a>
                </li>
                <li>
                  <a href="#!">Pricing</a>
                </li>
                <li>
                  <a href="#!">Changelog</a>
                </li>
              </ul>
            </div>

            <div className="lp-footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Careers</a>
                </li>
                <li>
                  <a href="#!">Press</a>
                </li>
              </ul>
            </div>

            <div className="lp-footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#!">Docs</a>
                </li>
                <li>
                  <a href="#!">Status</a>
                </li>
                <li>
                  <a href="#!">Community</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lp-footer-divider" />

          <div className="lp-footer-bottom">
            <p>© 2026 NovaAI, Inc. All rights reserved.</p>
            <p>Privacy Policy · Terms of Service · Cookie Settings</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductLanding;
