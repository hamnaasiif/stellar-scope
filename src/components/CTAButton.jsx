"use client"

import { useState } from "react"

const CTAButton = ({ text = "Start Exploring", onClick, href = "#explore", className = "", variant = "primary" }) => {
  const [isHovered, setIsHovered] = useState(false)

  const buttonStyles = {
    primary: {
      padding: "clamp(12px, 2vw, 16px) clamp(20px, 4vw, 32px)",
      fontSize: "clamp(14px, 2.5vw, 18px)",
      fontWeight: "600",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      border: "2px solid #60a5fa",
      borderRadius: "8px",
      backgroundColor: isHovered ? "#60a5fa" : "transparent",
      color: isHovered ? "#000000" : "#ffffff",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
      position: "relative",
      overflow: "hidden",
      boxShadow: isHovered ? "0 10px 30px rgba(96, 165, 250, 0.3)" : "0 4px 15px rgba(0, 0, 0, 0.2)",
      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
    },
    secondary: {
      padding: "clamp(10px, 1.8vw, 14px) clamp(18px, 3.5vw, 28px)",
      fontSize: "clamp(12px, 2.2vw, 16px)",
      fontWeight: "500",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      border: "2px solid #ffffff",
      borderRadius: "6px",
      backgroundColor: isHovered ? "#ffffff" : "transparent",
      color: isHovered ? "#000000" : "#ffffff",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
    },
  }

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        ...buttonStyles[variant],
        ...className,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={text}
    >
      {text}

      {/* Animated background effect */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: isHovered ? 0 : "-100%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          transition: "left 0.6s ease",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </a>
  )
}

export default CTAButton
