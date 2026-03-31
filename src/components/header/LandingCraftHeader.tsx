import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/landingCraft.css";

const LandingCraftHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/landingCraft" && location.pathname === "/landingCraft")
      return true;
    if (path === "/landingCraft/about" && location.pathname.includes("about"))
      return true;
    return false;
  };

  return (
    <header
      className="lp-header"
      style={{ position: "sticky", top: 0, width: "100%", zIndex: 1000 }}
    >
      <div
        className="lp-logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/landingCraft")}
      >
        Landing<span>Craft</span>
      </div>
      <nav>
        <ul className="lp-nav">
          <li>
            <a
              href="/landingCraft#features"
              className={isActive("/landingCraft") ? "nav-active" : ""}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/landingCraft/about"
              className={isActive("/landingCraft/about") ? "nav-active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button className="lp-cta-btn" onClick={() => navigate("/dashboard")}>
          ← Back to &nbsp; eSTOKKYAM
        </button>
        <button className="lp-cta-btn">Get Started →</button>
      </div>
    </header>
  );
};

export default LandingCraftHeader;
