"use client"

const ExploreCard = ({ title, description, href = "#", image }) => {
  const styles = {
    card: {
      position: "relative",
      backgroundColor: "#0b0b0c",
      border: "1px solid #1f2937",
      borderRadius: "12px",
      padding: "clamp(16px, 3vw, 24px)",
      paddingBottom: "clamp(60px, 10vw, 88px)",
      overflow: "hidden",
      minHeight: "clamp(220px, 35vw, 280px)",
      height: "100%",
      color: "#e5e7eb",
      transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
      boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
    cardHover: {
      transform: "translateY(-4px)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
      borderColor: "#374151",
    },
    bgImage: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      zIndex: 0,
      filter: "contrast(1) saturate(1.05)",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.70) 100%)",
      zIndex: 1,
    },
    title: {
      fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
      fontWeight: 900,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      margin: 0,
      background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      zIndex: 2,
      position: "relative",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
    description: {
      marginTop: "12px",
      marginBottom: "20px",
      color: "#cbd5e1",
      lineHeight: 1.6,
      fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
      maxWidth: "48ch",
      zIndex: 2,
      position: "relative",
      letterSpacing: "0.01em",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
    cta: {
      display: "inline-block",
      padding: "clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 22px)",
      border: "2px solid #60a5fa",
      borderRadius: "8px",
      color: "#ffffff",
      textDecoration: "none",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      transition: "all .25s ease",
      background: "transparent",
      position: "absolute",
      left: "clamp(16px, 3vw, 24px)",
      bottom: "clamp(16px, 3vw, 24px)",
      zIndex: 2,
      fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
    ctaHover: {
      background: "#60a5fa",
      color: "#000000",
      boxShadow: "0 10px 30px rgba(96,165,250,.35)",
    },
  }

  let isHovered = false

  const handleMouseEnter = (e) => {
    isHovered = true
    e.currentTarget.style.transform = styles.cardHover.transform
    e.currentTarget.style.boxShadow = styles.cardHover.boxShadow
    e.currentTarget.style.borderColor = styles.cardHover.borderColor
  }

  const handleMouseLeave = (e) => {
    isHovered = false
    e.currentTarget.style.transform = styles.card.transform || ""
    e.currentTarget.style.boxShadow = styles.card.boxShadow
    e.currentTarget.style.borderColor = "#1f2937"
  }

  const handleCtaEnter = (e) => {
    e.currentTarget.style.background = styles.ctaHover.background
    e.currentTarget.style.color = styles.ctaHover.color
    e.currentTarget.style.boxShadow = styles.ctaHover.boxShadow
  }

  const handleCtaLeave = (e) => {
    e.currentTarget.style.background = styles.cta.background
    e.currentTarget.style.color = styles.cta.color
    e.currentTarget.style.boxShadow = "none"
  }

  return (
    <div style={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {image && <img src={image || "/placeholder.svg"} alt="" style={styles.bgImage} />}
      <div style={styles.overlay} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <a href={href} style={styles.cta} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>
        Explore
      </a>
    </div>
  )
}

export default ExploreCard
