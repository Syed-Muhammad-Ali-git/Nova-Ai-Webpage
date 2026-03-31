import React from "react";
import LandingCraftHeader from "../../components/header/LandingCraftHeader";
import LandingCraftFooter from "../../components/footer/landingCraft-footer";
import "../../assets/css/landingCraft-about.css";

const NovaAbout: React.FC = () => {
  return (
    <div className="lp-root">
      {/* ── HEADER ── */}
      <LandingCraftHeader />

      <main>
        <section className="lp-hero">
          <div
            className="lp-hero-content"
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <div className="lp-hero-badge fade-up">Our Mission</div>
            <h1
              className="lp-hero-title fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Democratizing <span className="highlight">Intelligence</span>
            </h1>
            <p
              className="lp-hero-desc fade-up"
              style={{ margin: "1.25rem auto 0", animationDelay: "0.2s" }}
            >
              LandingCraft was founded on the belief that cutting-edge
              artificial intelligence should be accessible to teams of all
              sizes, not just tech giants.
            </p>
          </div>
        </section>

        <section className="lp-features">
          <div className="lp-section-label">Our Story</div>
          <h2 className="lp-section-title">
            Empowering businesses with AI-driven Insights
          </h2>
          <div className="lp-features-grid">
            <div className="lp-feature-card">
              <div className="lp-feature-name">Our Vision</div>
              <p className="lp-feature-text">
                To create a world where every business, regardless of size, can leverage the power of advanced data analytics and AI to drive meaningful growth and innovation.
              </p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-name">Who We Are</div>
              <p className="lp-feature-text">
                We are a team of data scientists, engineers, and creatives passionate about solving complex problems. LandingCraft was born out of a desire to simplify the data landscape.
              </p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-name">What We Do</div>
              <p className="lp-feature-text">
                We provide a unified platform that turns raw operational data into actionable intelligence. With instant automation and predictive analytics, you stay ahead of the curve.
              </p>
            </div>
          </div>
        </section>

        <section className="lp-stats">
          {[
            { num: "2024", label: "Year Founded" },
            { num: "5+", label: "Global Offices" },
            { num: "10K+", label: "Happy Customers" },
          ].map((s) => (
            <div className="lp-stat" key={s.label}>
              <div className="lp-stat-num">{s.num}</div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </section>
      </main>

      <LandingCraftFooter />
    </div>
  );
};

export default NovaAbout;
