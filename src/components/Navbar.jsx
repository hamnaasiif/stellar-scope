"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navStyles = {
    nav: {
      width: "100%",
      top: 0,
      left: 0,
      position: "fixed",
      padding: "0 0px",
      transition: "all 0.3s ease",
      backgroundColor: "#000000",
      color: "#ffffff",
      borderBottom: "1px solid #333",
      zIndex: 1000,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      padding: "0 clamp(16px, 4vw, 32px)",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      flex: "0 0 auto",
    },
    logo: {
      fontSize: "clamp(20px, 5vw, 28px)",
      fontWeight: "900",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#ffffff",
      margin: 0,
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(24px, 4vw, 48px)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      flex: "1",
      justifyContent: "flex-end",
    },
    navLink: {
      fontSize: "clamp(13px, 2.5vw, 15px)",
      fontWeight: "200",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "#ffffff",
      transition: "color 0.2s ease",
      cursor: "pointer",
      whiteSpace: "nowrap",
    },
    navLinkHover: {
      color: "#60a5fa",
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      flex: "0 0 auto",
    },
    mobileMenuButton: {
      display: "none",
      padding: "8px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: "#ffffff",
      transition: "background-color 0.2s ease",
    },
    mobileNav: {
      display: "none",
      padding: "clamp(16px, 4vw, 24px)",
      backgroundColor: "#000000",
      borderTop: "1px solid #374151",
      transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
      transition: "transform 0.3s ease",
    },
    mobileNavLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "clamp(12px, 3vw, 16px)",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    mobileNavLink: {
      fontSize: "clamp(14px, 3.5vw, 16px)",
      fontWeight: "200",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "#ffffff",
      transition: "color 0.2s ease",
      cursor: "pointer",
      padding: "8px 0",
      borderBottom: "1px solid #374151",
    },
  }

  const mediaStyles = `
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
      .mobile-menu-button {
        display: block !important;
      }
      .mobile-nav {
        display: block !important;
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
      }
      .nav-container {
        height: 56px !important;
      }
    }
    
    @media (max-width: 480px) {
      .nav-container {
        height: 52px !important;
      }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      .nav-links {
        gap: 32px !important;
      }
    }
    
    @media (max-width: 320px) {
      .logo {
        font-size: 18px !important;
      }
    }
  `

  const [hoveredLink, setHoveredLink] = useState(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <style>{mediaStyles}</style>
      <nav style={navStyles.nav}>
        <div className="nav-container" style={navStyles.container}>
          {/* Logo */}
          <div style={navStyles.logoContainer}>
            <div className="logo" style={navStyles.logo}>
              StellarScope
            </div>
          </div>

          {/* Navigation Links */}
          <div className="desktop-nav nav-links" style={navStyles.navLinks}>
            {["Home", "Explore", "About", "Contact us"].map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                style={{
                  ...navStyles.navLink,
                  ...(hoveredLink === index ? navStyles.navLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div style={navStyles.rightSection}>
            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              style={{
                ...navStyles.mobileMenuButton,
                backgroundColor: isMobileMenuOpen ? "#374151" : "transparent",
              }}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transition: "transform 0.2s ease" }}
              >
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="mobile-nav"
          style={{
            ...navStyles.mobileNav,
            display: "block",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            width: "100%",
            maxHeight: isMobileMenuOpen ? "300px" : "0",
            overflow: "hidden",
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: "none",
            transition: "all 0.3s ease",
            backgroundColor: "#000000",
            borderTop: "1px solid #374151",
            zIndex: 999,
          }}
        >
          <div style={navStyles.mobileNavLinks}>
            {["Home", "Explore", "About", "Contact us"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                style={navStyles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
