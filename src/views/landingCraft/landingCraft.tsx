import React, { useEffect, useRef } from "react";
import "../../assets/css/landingCraft.css";

const ProductLanding: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".lp-feature-card");
    const timeoutsRef = { ids: [] as number[] };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const id = window.setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "translateY(0)";
            }, i * 120);
            timeoutsRef.ids.push(id as unknown as number);
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

    return () => {
      observer.disconnect();
      timeoutsRef.ids.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <>
      <div className="lp-root">
        {/* ── HEADER ── */}
        <header className="lp-header">
          <div
            className="lp-logo"
            style={{ cursor: "pointer" }}
            onClick={() => window.location.replace("/landingCraft")}
          >
            Landing<span>Craft</span>
          </div>
          <nav>
            <ul className="lp-nav">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="/landingCraft/about">About</a>
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
              The Platform <br />
              Built for <span className="highlight">Real Results</span>
            </h1>
            <p className="lp-hero-desc">
              LandingCraft turns your raw data into intelligent decisions.
              Automate workflows, predict outcomes, and scale your operations —
              all from one unified dashboard.
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
                  <div className="lp-device-label">LandingCraft Dashboard</div>
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
                Connect any tool in your stack and let LandingCraft handle the
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
                Landing<span>Craft</span>
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
                  <a href="mailto:hello@landingcraft.ai">
                    hello@landingcraft.ai
                  </a>
                </div>
                <div className="lp-contact-item">
                  <span>📞</span>
                  <a href="tel:+1-800-LANDING-1">+1 (800) 526-3464</a>
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
            <p>© 2026 LandingCraft, Inc. All rights reserved.</p>
            <p>Privacy Policy · Terms of Service · Cookie Settings</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductLanding;
