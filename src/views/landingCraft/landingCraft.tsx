import React, { useEffect, useRef } from "react";
import LandingCraftHeader from "../../components/header/LandingCraftHeader";
import LandingCraftFooter from "../../components/footer/landingCraft-footer";
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
        <LandingCraftHeader />

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

        {/* ── SAMPLE PRODUCT ── */}
        <section className="lp-features" id="sample-product" style={{ paddingTop: "0rem" }}>
          <div className="lp-section-label">Live Example</div>
          <h2 className="lp-section-title">See our technology in action</h2>
          
          <div style={{ maxWidth: "800px", margin: "0 auto", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", position: "relative", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
            <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", background: "radial-gradient(circle, rgba(67, 233, 123, 0.3) 0%, transparent 70%)" }}></div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, var(--accent), var(--accent2))", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                  📈
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "700" }}>Alpha Trade Monitor</h3>
                  <div style={{ fontSize: "0.85rem", color: "var(--accent3)" }}>● Real-time analysis</div>
                </div>
              </div>
              <button className="lp-btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>View Details</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Predicted ROI</div>
                <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--accent3)" }}>+24.5%</div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Risk Velocity</div>
                <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--accent2)" }}>0.014</div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.2)", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Confidence Score</div>
                <div style={{ fontSize: "1.8rem", fontWeight: "800" }}>98.2</div>
              </div>
            </div>

            <div style={{ height: "4px", background: "rgba(108, 99, 255, 0.2)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ width: "98.2%", height: "100%", background: "linear-gradient(90deg, var(--accent), var(--accent3))" }}></div>
            </div>
            <div style={{ textAlign: "right", marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--muted)" }}>Model processing complete</div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <LandingCraftFooter />
      </div>
    </>
  );
};

export default ProductLanding;
