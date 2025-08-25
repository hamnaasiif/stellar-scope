import CTAButton from './CTAButton';
import heroImage from '../assets/h1.jpg'; // 👈 import the background image

const Hero = () => {
  const heroStyles = {
    container: {
      width: '100%',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      backgroundColor: '#000000'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      zIndex: 1
    },
    content: {
      position: 'relative',
      zIndex: 3,
      maxWidth: '800px',
      padding: '0 60px',
      color: '#ffffff',
      textAlign: 'left'
    },
    mainHeading: {
      fontSize: '4.5rem',
      fontWeight: '900',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.1',
      marginBottom: '24px',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'fadeInUp 1s ease-out'
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: '400',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.6',
      marginBottom: '40px',
      color: '#e5e7eb',
      letterSpacing: '0.01em',
      animation: 'fadeInUp 1s ease-out 0.3s both'
    },
    ctaContainer: {
      animation: 'fadeInUp 1s ease-out 0.6s both'
    },
    particles: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      pointerEvents: 'none'
    },
    particle: {
      position: 'absolute',
      width: '2px',
      height: '2px',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      opacity: 0.6,
      animation: 'twinkle 3s ease-in-out infinite alternate'
    }
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes twinkle {
      0% { opacity: 0.3; }
      100% { opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .main-heading {
        font-size: 3rem !important;
      }
      .subtitle {
        font-size: 1.2rem !important;
      }
      .content {
        padding: 0 30px !important;
        max-width: 100% !important;
      }
    }
    
    @media (max-width: 480px) {
      .main-heading {
        font-size: 2.5rem !important;
      }
      .subtitle {
        font-size: 1rem !important;
      }
    }
  `;

  const handleExploreClick = () => {
    console.log('Navigating to explore page...');
  };

  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push(
        <div
          key={i}
          style={{
            ...heroStyles.particle,
            left: `${Math.random() * 50}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <>
      <style>{keyframes}</style>
      <section style={heroStyles.container}>
        {/* Background Image */}
        <img src={heroImage} alt="Hero Background" style={heroStyles.backgroundImage} />
        
        {/* Animated particles */}
        <div style={heroStyles.particles}>
          {generateParticles()}
        </div>
        
        {/* Main Content */}
        <div className="content" style={heroStyles.content}>
          <h1 className="main-heading" style={heroStyles.mainHeading}>
            Explore the Universe
          </h1>
          
          <p className="subtitle" style={heroStyles.subtitle}>
            Discover space with us and embark on an incredible journey through the cosmos.
          </p>
          
          <div style={heroStyles.ctaContainer}>
            <CTAButton
              text="Start Exploring"
              onClick={handleExploreClick}
              href="#explore"
              variant="primary"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
