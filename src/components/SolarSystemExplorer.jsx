"use client"
import { useState } from "react"
import Planet from "./Planet"
import sunImage from "../assets/sun.png"
import mercuryImage from "../assets/mercury.png"
import venusImage from "../assets/venus.png"
import earthImage from "../assets/earth.png"
import marsImage from "../assets/mars.png"
import jupiterImage from "../assets/jupiter.png"
import saturnImage from "../assets/saturn.png"
import uranusImage from "../assets/uranus.png"
import neptuneImage from "../assets/neptune.png"
const SolarSystemExplorer = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const planets = [
    {
      id: "mercury",
      name: "Mercury",
      distance: 120, 
      size: 30, 
      color: "#8C7853",
      image: mercuryImage,
      facts: {
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "167°C (day) / -173°C (night)",
        dayLength: "176 Earth days",
      },
      funFacts: [
        "Mercury has no atmosphere, so there's no weather!",
        "A year on Mercury is only 88 Earth days long",
        "Mercury has ice at its poles despite being closest to the Sun",
        "It's the smallest planet in our solar system",
      ],
    },
    {
      id: "venus",
      name: "Venus",
      distance: 210, 
      size: 50, 
      color: "#FFA500",
      image: venusImage,
      facts: {
        diameter: "12,104 km",
        distance: "108.2 million km from Sun",
        temperature: "462°C (hottest planet)",
        dayLength: "243 Earth days",
      },
      funFacts: [
        "Venus spins backwards compared to most planets",
        "It rains sulfuric acid on Venus!",
        "Venus is the hottest planet, even hotter than Mercury",
        "One day on Venus is longer than its year",
      ],
    },
    {
      id: "earth",
      name: "Earth",
      distance: 310, 
      size: 55, 
      color: "#6B93D6",
      image: earthImage,
      facts: {
        diameter: "12,756 km",
        distance: "149.6 million km from Sun",
        temperature: "15°C average",
        dayLength: "24 hours",
      },
      funFacts: [
        "Earth is the only known planet with life",
        "71% of Earth's surface is covered by water",
        "Earth has one natural satellite: the Moon",
        "Our planet is 4.5 billion years old",
      ],
    },
    {
      id: "mars",
      name: "Mars",
      distance: 400,
      size: 40,
      color: "#CD5C5C",
      image: marsImage,
      facts: {
        diameter: "6,792 km",
        distance: "227.9 million km from Sun",
        temperature: "-65°C average",
        dayLength: "24.6 hours",
      },
      funFacts: [
        "Mars has the largest volcano in the solar system",
        "A day on Mars is almost the same as Earth",
        "Mars has two tiny moons: Phobos and Deimos",
        "Evidence suggests Mars once had rivers and lakes",
      ],
    },
    {
      id: "jupiter",
      name: "Jupiter",
      distance: 520,
      size: 160,
      color: "#D8CA9D",
      image: jupiterImage,
      facts: {
        diameter: "142,984 km",
        distance: "778.5 million km from Sun",
        temperature: "-110°C",
        dayLength: "9.9 hours",
      },
      funFacts: [
        "Jupiter is a giant gas ball - you can't land on it!",
        "Jupiter has over 80 moons, including 4 large ones",
        "The Great Red Spot is a storm bigger than Earth",
        "Jupiter acts like a cosmic vacuum cleaner, protecting inner planets",
      ],
    },
    {
      id: "saturn",
      name: "Saturn",
      distance: 680,
      size: 140,
      color: "#FAD5A5",
      image: saturnImage,
      facts: {
        diameter: "120,536 km",
        distance: "1.43 billion km from Sun",
        temperature: "-140°C",
        dayLength: "10.7 hours",
      },
      funFacts: [
        "Saturn's rings are made of ice and rock particles",
        "Saturn is less dense than water - it would float!",
        "Saturn has at least 146 known moons",
        "Its hexagonal storm at the north pole is mind-blowing",
      ],
    },
    {
      id: "uranus",
      name: "Uranus",
      distance: 830,
      size: 92,
      color: "#87CEEB",
      image: uranusImage,
      facts: {
        diameter: "51,118 km",
        distance: "2.87 billion km from Sun",
        temperature: "-195°C",
        dayLength: "17.2 hours",
      },
      funFacts: [
        "Uranus rotates on its side like a rolling ball",
        "It has faint rings that were discovered in 1977",
        "Uranus takes 84 Earth years to orbit the Sun",
        "It's the coldest planet in our solar system",
      ],
    },
    {
      id: "neptune",
      name: "Neptune",
      distance: 950,
      size: 85,
      color: "#4169E1",
      image: neptuneImage,
      facts: {
        diameter: "49,528 km",
        distance: "4.5 billion km from Sun",
        temperature: "-200°C",
        dayLength: "16.1 hours",
      },
      funFacts: [
        "Neptune has the strongest winds in the solar system",
        "It takes Neptune 165 Earth years to orbit the Sun",
        "Neptune was discovered through mathematical predictions",
        "It has 14 known moons, with Triton being the largest",
      ],
    },
  ]

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet)
  }

  const closeModal = () => {
    setSelectedPlanet(null)
  }

  const ui = {
    section: {
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#000000",
      overflow: "hidden",
      padding: "0px",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      color: "#ffffff",
    },
    titleWrap: { position: "relative", zIndex: 10, textAlign: "center", marginBottom: "64px" },
    title: {
      fontSize: "4rem",
      fontWeight: 900,
      margin: 0,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#cbd5e1",
      maxWidth: "720px",
      margin: "16px auto 0",
      padding: "0 16px",
      lineHeight: 1.7,
    },
    solarWrap: { position: "relative", zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center" },
    solarContainer: {
      position: "relative",
      width: "100vw",
      height: "400px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    sunWrap: {
      position: "absolute",
      left: "-250px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 20,
      width: "450px",
      height: "600px",
    },
    sunImage: {
      width: "450px",
      height: "600px",
      objectFit: "cover",
      borderRadius: "50% / 40%",
    },

    sun: {
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "radial-gradient(circle at 30% 30%, #fde68a, #f59e0b)",
      boxShadow: "0 0 40px rgba(251, 191, 36, 0.6)",
    },

    star: {
      position: "absolute",
      width: "2px",
      height: "2px",
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      opacity: 0.6,
      animation: "twinkle 3s infinite",
    },
    orbitLine: {
      position: "absolute",
      height: "1px",
      backgroundColor: "rgba(55,65,81,0.4)",
      width: "100%",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20" style={ui.section}>
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              ...ui.star,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16" style={ui.titleWrap}>
        <h2 style={ui.title}>SOLAR SYSTEM</h2>
        <p style={ui.subtitle}>Explore our cosmic neighborhood. Click on any planet to discover fascinating facts.</p>
      </div>

      {/* Solar System Container */}
      <div className="relative z-10 flex justify-center items-center" style={ui.solarWrap}>
        <div className="solar-system-container relative" style={ui.solarContainer}>
          {/* Horizontal Orbit Line */}
          <div style={ui.orbitLine} />

          {/* Sun */}
          <div style={ui.sunWrap}>
            <img src={sunImage} alt="Sun" style={ui.sunImage} />
          </div>

          {/* Planets */}
          {planets.map((planet) => (
            <Planet key={planet.id} planet={planet} onClick={() => handlePlanetClick(planet)} />
          ))}
        </div>
      </div>

      {selectedPlanet && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            animation: "fadeIn 0.3s ease-out",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              backgroundColor: "#000000",
              border: "2px solid #60a5fa",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(96, 165, 250, 0.3)",
              fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
              animation: "slideUp 0.4s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <div
              style={{
                position: "relative",
                padding: "40px",
                borderBottom: "1px solid rgba(96, 165, 250, 0.2)",
                background: `linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)`,
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "40px",
                  height: "40px",
                  border: "2px solid #60a5fa",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#60a5fa"
                  e.target.style.color = "#000000"
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 10px 30px rgba(96, 165, 250, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "#ffffff"
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "none"
                }}
              >
                ×
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <img
                  src={selectedPlanet.image}
                  alt={selectedPlanet.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "900",
                      margin: "0 0 8px 0",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: "1.1",
                    }}
                  >
                    {selectedPlanet.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "400",
                      color: "#e5e7eb",
                      letterSpacing: "0.01em",
                      margin: 0,
                    }}
                  >
                    The{" "}
                    {selectedPlanet.id === "earth"
                      ? "3rd"
                      : selectedPlanet.id === "venus"
                        ? "2nd"
                        : selectedPlanet.id === "mars"
                          ? "4th"
                          : selectedPlanet.id === "mercury"
                            ? "1st"
                            : selectedPlanet.id === "jupiter"
                              ? "5th"
                              : selectedPlanet.id === "saturn"
                                ? "6th"
                                : selectedPlanet.id === "uranus"
                                  ? "7th"
                                  : "8th"}{" "}
                    planet from the Sun
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: "40px" }}>
              {/* Basic Facts */}
              <div style={{ marginBottom: "40px" }}>
                <h4
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    color: "#60a5fa",
                    marginBottom: "24px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderBottom: "2px solid rgba(96, 165, 250, 0.3)",
                    paddingBottom: "12px",
                  }}
                >
                  Planetary Data
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {Object.entries(selectedPlanet.facts).map(([key, value]) => (
                    <div
                      key={key}
                      style={{
                        padding: "24px",
                        border: "1px solid rgba(96, 165, 250, 0.25)",
                        borderRadius: "12px",
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        backdropFilter: "blur(10px)",
                        cursor: "default",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Accent line */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "3px",
                          background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#94a3b8",
                          marginBottom: "12px",
                          textTransform: "uppercase",
                          fontWeight: "600",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div
                        style={{
                          fontSize: "1.25rem",
                          color: "#ffffff",
                          fontWeight: "700",
                          lineHeight: "1.3",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Facts */}
              <div>
                <h4
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    color: "#60a5fa",
                    marginBottom: "24px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderBottom: "2px solid rgba(96, 165, 250, 0.3)",
                    paddingBottom: "12px",
                  }}
                >
                  Scientific Insights
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {selectedPlanet.funFacts.map((fact, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "20px",
                        padding: "24px",
                        border: "1px solid rgba(96, 165, 250, 0.2)",
                        borderRadius: "12px",
                        backgroundColor: "rgba(15, 23, 42, 0.6)",
                        backdropFilter: "blur(8px)",
                        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                          fontWeight: "700",
                          boxShadow: "0 4px 12px rgba(96, 165, 250, 0.3)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            color: "#e2e8f0",
                            fontSize: "1.05rem",
                            lineHeight: "1.7",
                            margin: 0,
                            fontWeight: "400",
                          }}
                        >
                          {fact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .solar-system-container {
          perspective: 1000px;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default SolarSystemExplorer