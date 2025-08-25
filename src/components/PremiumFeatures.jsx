"use client"

import { useState } from "react"
import cardOne from "../assets/card1.jpg"
import cardTwo from "../assets/card2.jpg"
import cardThree from "../assets/card3.jpg"
const PremiumFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const sectionStyles = {
    container: {
      width: "100%",
      padding: "0px 60px",
      backgroundColor: "#000000",
      position: "relative",
      overflow: "hidden",
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },
    heading: {
      fontSize: "3.5rem",
      fontWeight: "900",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      lineHeight: "1.1",
      marginBottom: "24px",
      textAlign: "center",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "1.3rem",
      fontWeight: "400",
      lineHeight: "1.6",
      marginBottom: "60px",
      color: "#e5e7eb",
      textAlign: "center",
      maxWidth: "600px",
      margin: "0 auto 60px auto",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "30px",
      marginBottom: "60px",
    },
    featureCard: {
      background: "linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
      border: "1px solid rgba(96, 165, 250, 0.2)",
      borderRadius: "16px",
      padding: "40px 30px",
      textAlign: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    featureCardHover: {
      transform: "translateY(-8px)",
      borderColor: "rgba(96, 165, 250, 0.4)",
    },
    featureTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "15px",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
    featureDescription: {
      fontSize: "1rem",
      color: "#d1d5db",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    featurePrice: {
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "#60a5fa",
      marginBottom: "20px",
    },
    ctaButton: {
      background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
      color: "#ffffff",
      border: "none",
      borderRadius: "8px",
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
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
      width: "2px",
      height: "2px",
      backgroundColor: "#60a5fa",
      borderRadius: "50%",
      opacity: 0.4,
      animation: "twinkle 4s ease-in-out infinite alternate",
    },
    cardOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)",
      borderRadius: "16px",
      zIndex: 1,
    },
    cardContent: {
      position: "relative",
      zIndex: 2,
    },
  }

  const keyframes = `
    @keyframes twinkle {
      0% { opacity: 0.2; }
      100% { opacity: 0.8; }
    }
    
    @media (max-width: 768px) {
      .premium-container {
        padding: 80px 30px !important;
      }
      .premium-heading {
        font-size: 2.5rem !important;
      }
      .premium-subtitle {
        font-size: 1.1rem !important;
      }
      .premium-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
    }
    
    @media (max-width: 480px) {
      .premium-heading {
        font-size: 2rem !important;
      }
      .premium-card {
        padding: 30px 20px !important;
      }
    }
  `

  const features = [
    {
      id: 1,
      title: "Advanced 3D Models",
      description: "Experience planets in stunning 3D detail with interactive rotation and zoom capabilities.",
      price: "$9.99/month",
      backgroundImage: cardOne,
    },
    {
      id: 2,
      title: "Real-Time Space Data",
      description: "Access live astronomical data, satellite positions, and space weather updates.",
      price: "$14.99/month",
      backgroundImage: cardTwo,
    },
    {
      id: 3,
      title: "Virtual Observatory",
      description: "Control virtual telescopes and view real space imagery from observatories worldwide.",
      price: "$19.99/month",
      backgroundImage: cardThree,
    },
  ]

  const generateParticles = () => {
    const particles = []
    for (let i = 0; i < 15; i++) {
      particles.push(
        <div
          key={i}
          style={{
            ...sectionStyles.particle,
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

  const handleFeatureClick = (featureId) => {
    console.log(`[v0] Premium feature ${featureId} clicked`)
  }

  return (
    <>
      <style>{keyframes}</style>
      <section className="premium-container" style={sectionStyles.container}>
        {/* Animated particles */}
        <div style={sectionStyles.particles}>{generateParticles()}</div>

        <div style={sectionStyles.content}>
          <h2 className="premium-heading" style={sectionStyles.heading}>
            Premium Explorer
          </h2>

          <p className="premium-subtitle" style={sectionStyles.subtitle}>
            Unlock advanced features and take your space exploration to the next level with professional-grade tools and
            real-time data.
          </p>

          <div className="premium-grid" style={sectionStyles.featuresGrid}>
            {features.map((feature) => (
              <div
                key={feature.id}
                className="premium-card"
                style={{
                  ...sectionStyles.featureCard,
                  backgroundImage: `url(${feature.backgroundImage})`,
                  ...(hoveredFeature === feature.id ? sectionStyles.featureCardHover : {}),
                }}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div style={sectionStyles.cardOverlay}></div>

                <div style={sectionStyles.cardContent}>
                  <h3 style={sectionStyles.featureTitle}>{feature.title}</h3>
                  <p style={sectionStyles.featureDescription}>{feature.description}</p>
                  <div style={sectionStyles.featurePrice}>{feature.price}</div>
                  <button
                    style={{
                      ...sectionStyles.ctaButton,
                      ...(hoveredFeature === feature.id
                        ? {
                            transform: "scale(1.05)",
                            boxShadow: "0 8px 25px rgba(96, 165, 250, 0.3)",
                          }
                        : {}),
                    }}
                  >
                    Upgrade Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PremiumFeatures
