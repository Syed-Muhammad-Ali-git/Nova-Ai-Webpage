import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Menu, Close } from "@mui/icons-material";
import "../../assets/css/landingCraft.css";

const LandingCraftHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/landingCraft" && location.pathname === "/landingCraft")
      return true;
    if (path === "/landingCraft/about" && location.pathname.includes("about"))
      return true;
    return false;
  };

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
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
        
        {/* Desktop Nav */}
        <nav className="lp-desktop-nav">
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
          className="lp-header-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button className="lp-cta-btn lp-back-btn" onClick={() => navigate("/dashboard")}>
            ← Back to eSTOKKYAM
          </button>
          <button className="lp-cta-btn lp-get-started-btn">Get Started →</button>
          
          <IconButton 
            className="lp-mobile-menu-btn"
            onClick={() => setIsMenuOpen(true)} 
            sx={{ color: "var(--text)" }}
          >
            <Menu />
          </IconButton>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <div 
        className={`lp-mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: isMenuOpen ? 0 : "-120vh",
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "var(--surface)",
          zIndex: 2000,
          transition: "top 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          padding: "2rem"
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            color: "var(--text)"
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <Close />
        </IconButton>
        
        <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
          <a
            href="/landingCraft#features"
            style={{ color: "var(--text)", textDecoration: "none", fontSize: "1.2rem", fontWeight: 600 }}
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="/landingCraft/about"
            style={{ color: "var(--text)", textDecoration: "none", fontSize: "1.2rem", fontWeight: 600 }}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            style={{ color: "var(--text)", textDecoration: "none", fontSize: "1.2rem", fontWeight: 600 }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button 
            className="lp-cta-btn" 
            style={{ width: "100%", maxWidth: "300px" }}
          >
            Get Started →
          </button>
          
          <button 
            className="lp-cta-btn lp-btn-secondary lp-mobile-back-btn" 
            style={{ width: "100%", maxWidth: "300px", marginTop: "1rem" }}
            onClick={() => { setIsMenuOpen(false); navigate("/dashboard"); }}
          >
            ← Back to eSTOKKYAM
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingCraftHeader;
