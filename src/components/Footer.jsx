const Footer = () => {
  const footerStyles = {
    container: {
      width: "100%",
      backgroundColor: "#000000",
      borderTop: "1px solid #1f2937",
      position: "relative",
      overflow: "hidden",
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 60px 40px",
      position: "relative",
      zIndex: 2,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "60px",
      marginBottom: "60px",
    },
    section: {
      color: "#ffffff",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      marginBottom: "24px",
      background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: "5px",
    },
    link: {
      color: "#e5e7eb",
      textDecoration: "none",
      fontSize: "1rem",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    description: {
      color: "#e5e7eb",
      fontSize: "1rem",
      lineHeight: "1.6",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      marginBottom: "24px",
    },
    socialContainer: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    socialLink: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "44px",
      height: "44px",
      backgroundColor: "#1f2937",
      borderRadius: "50%",
      color: "#e5e7eb",
      textDecoration: "none",
      fontSize: "1.2rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    divider: {
      height: "1px",
      backgroundColor: "#1f2937",
      margin: "10px 0",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
    },
    copyright: {
      color: "#9ca3af",
      fontSize: "0.9rem",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
    bottomLinks: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
    },
    bottomLink: {
      color: "#9ca3af",
      textDecoration: "none",
      fontSize: "0.9rem",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    particles: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      pointerEvents: "none",
    },
    particle: {
      position: "absolute",
      width: "1px",
      height: "1px",
      backgroundColor: "#60a5fa",
      borderRadius: "50%",
      opacity: 0.4,
      animation: "twinkle 4s ease-in-out infinite alternate",
    },
  }

  const keyframes = `
    @keyframes twinkle {
      0% { opacity: 0.2; }
      100% { opacity: 0.8; }
    }
    
    .footer-link:hover {
      color: #60a5fa !important;
      transform: translateX(4px);
    }
    
    .social-link:hover {
      background-color: #60a5fa !important;
      color: #ffffff !important;
      transform: translateY(-2px);
    }
    
    .bottom-link:hover {
      color: #60a5fa !important;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        padding: 60px 30px 30px !important;
      }
      
      .footer-grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      
      .footer-bottom {
        flex-direction: column !important;
        text-align: center !important;
      }
      
      .bottom-links {
        justify-content: center !important;
      }
    }
    
    @media (max-width: 480px) {
      .footer-content {
        padding: 40px 20px 20px !important;
      }
      
      .section-title {
        font-size: 1.2rem !important;
      }
    }
  `
  const generateParticles = () => {
    const particles = []
    for (let i = 0; i < 15; i++) {
      particles.push(
        <div
          key={i}
          style={{
            ...footerStyles.particle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />,
      )
    }
    return particles
  }

  return (
    <>
      <style>{keyframes}</style>
      <footer style={footerStyles.container}>
        {/* Animated particles */}
        <div style={footerStyles.particles}>{generateParticles()}</div>

        <div className="footer-content" style={footerStyles.content}>
          <div className="footer-grid" style={footerStyles.grid}>
            {/* About Section */}
            <div style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>Cosmic Explorer</h3>
              <p style={footerStyles.description}>
                Embark on an extraordinary journey through the cosmos. Discover planets, stars, and the mysteries of our
                solar system with cutting-edge interactive experiences.
              </p>
              <div style={footerStyles.socialContainer}>
                <a href="#" className="social-link" style={footerStyles.socialLink}>
                  f
                </a>
                <a href="#" className="social-link" style={footerStyles.socialLink}>
                  t
                </a>
                <a href="#" className="social-link" style={footerStyles.socialLink}>
                  i
                </a>
                <a href="#" className="social-link" style={footerStyles.socialLink}>
                  y
                </a>
              </div>
            </div>

            {/* Explore Section */}
            <div style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>Explore</h3>
              <ul style={footerStyles.linkList}>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Solar System
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Planets
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Galaxies
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Space Missions
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Astronomy
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>Resources</h3>
              <ul style={footerStyles.linkList}>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Educational Content
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Research Papers
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Space News
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Interactive Tools
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Downloads
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>Support</h3>
              <ul style={footerStyles.linkList}>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Help Center
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Contact Us
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Community
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Feedback
                  </a>
                </li>
                <li style={footerStyles.linkItem}>
                  <a href="#" className="footer-link" style={footerStyles.link}>
                    Bug Reports
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div style={footerStyles.divider}></div>

          <div className="footer-bottom" style={footerStyles.bottom}>
            <p style={footerStyles.copyright}>© 2025 Cosmic Explorer. All rights reserved.</p>
            <div className="bottom-links" style={footerStyles.bottomLinks}>
              <a href="#" className="bottom-link" style={footerStyles.bottomLink}>
                Privacy Policy
              </a>
              <a href="#" className="bottom-link" style={footerStyles.bottomLink}>
                Terms of Service
              </a>
              <a href="#" className="bottom-link" style={footerStyles.bottomLink}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
