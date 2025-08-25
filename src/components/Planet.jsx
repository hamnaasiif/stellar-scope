"use client"

const Planet = ({ planet, onClick }) => {
  const styles = {
    planet: {
      position: "absolute",
      cursor: "pointer",
      transform: "translate(-50%, -50%)",
      transition: "transform .3s ease",
      width: `clamp(${planet.size * 0.6}px, ${planet.size * 0.1}vw, ${planet.size}px)`,
      height: `clamp(${planet.size * 0.6}px, ${planet.size * 0.1}vw, ${planet.size}px)`,
      borderRadius: "50%",
    },
    planetImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },
    planetFallback: {
      width: "100%",
      height: "100%",
      backgroundColor: planet.color,
      borderRadius: "50%",
    },
    labelWrap: {
      position: "absolute",
      bottom: "-32px",
      left: "50%",
      transform: "translateX(-50%)",
      opacity: 0,
      transition: "opacity .3s ease",
      pointerEvents: "none",
    },
    label: {
      background: "rgba(17,24,39,0.9)",
      backdropFilter: "blur(4px)",
      padding: "clamp(2px, 0.5vw, 4px) clamp(6px, 1.2vw, 10px)",
      borderRadius: "8px",
      border: "1px solid #4b5563",
      color: "#ffffff",
      fontWeight: 700,
      whiteSpace: "nowrap",
      fontSize: "clamp(0.7rem, 1.2vw, 0.9rem)",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
  }

  const xPosition = planet.distance + clamp(100, planet.distance * 0.5, 200)

  return (
    <div
      className="planet"
      style={{
        ...styles.planet,
        left: `clamp(${xPosition * 0.6}px, ${xPosition * 0.1}vw, ${xPosition}px)`,
        top: "50%",
      }}
      onClick={() => onClick(planet)}
      onMouseEnter={(e) => {
        const wrap = e.currentTarget.querySelector(".label")
        if (wrap) wrap.style.opacity = 1
        e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.25)"
      }}
      onMouseLeave={(e) => {
        const wrap = e.currentTarget.querySelector(".label")
        if (wrap) wrap.style.opacity = 0
        e.currentTarget.style.transform = "translate(-50%, -50%)"
      }}
    >
      {planet.image ? (
        <img
          src={planet.image || "/placeholder.svg"}
          alt={planet.name}
          style={styles.planetImage}
          onError={(e) => {
            e.target.style.display = "none"
            e.target.nextSibling.style.display = "block"
          }}
        />
      ) : null}
      <div style={{ ...styles.planetFallback, display: planet.image ? "none" : "block" }} />

      {planet.id === "saturn" && (
        <>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-full opacity-60"
            style={{
              width: `clamp(${planet.size * 1.8 * 0.6}px, ${planet.size * 1.8 * 0.1}vw, ${planet.size * 1.8}px)`,
              height: `clamp(${planet.size * 0.4 * 0.6}px, ${planet.size * 0.4 * 0.1}vw, ${planet.size * 0.4}px)`,
              borderColor: planet.color,
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full opacity-40"
            style={{
              width: `clamp(${planet.size * 2.2 * 0.6}px, ${planet.size * 2.2 * 0.1}vw, ${planet.size * 2.2}px)`,
              height: `clamp(${planet.size * 0.5 * 0.6}px, ${planet.size * 0.5 * 0.1}vw, ${planet.size * 0.5}px)`,
              borderColor: planet.color,
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />
        </>
      )}

      <div className="label" style={styles.labelWrap}>
        <div style={styles.label}>{planet.name}</div>
      </div>
    </div>
  )
}

function clamp(min, val, max) {
  return Math.min(Math.max(min, val), max)
}

export default Planet
