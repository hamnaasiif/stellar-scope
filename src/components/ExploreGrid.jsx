import ExploreCard from './ExploreCard';
import galaxyImg from '../assets/galaxy.jpg';
import planetImg from '../assets/planet.jpg';
import missionsImg from '../assets/missions.jpg';
import telescopeImg from '../assets/telescope.jpg';
import deepSpaceImg from '../assets/deep-space.jpg';
import newsImg from '../assets/news.jpg';

const ExploreGrid = () => {
  const container = {
    wrapper: {
      width: '100%',
      backgroundColor: '#000000',
      borderTop: '1px solid #111827',
      position: 'relative'
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 60px',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      position: 'relative'
    },
    heading: {
      fontSize: '2.75rem',
      fontWeight: 900,
      margin: 0,
      marginBottom: '28px',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    sub: {
      color: '#e5e7eb',
      marginTop: 0,
      marginBottom: '36px',
      lineHeight: 1.7,
      fontSize: '1.1rem',
      maxWidth: '70ch',
      letterSpacing: '0.01em',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '24px'
    },
    gridResponsive: `
      @media (max-width: 1024px) {
        .explore-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      }
      @media (max-width: 640px) {
        .explore-grid { grid-template-columns: 1fr !important; padding: 60px 30px !important; }
      }
    `
  };

   const items = [
    {
      title: 'Galaxies',
      description: 'Dive into the vast structures that shape our universe.',
      image: galaxyImg
    },
    {
      title: 'Planets',
      description: 'Explore rocky worlds, gas giants, and everything in between.',
      image: planetImg
    },
    {
      title: 'Missions',
      description: 'Follow historic and current missions pushing human knowledge.',
      image: missionsImg
    },
    {
      title: 'Telescopes',
      description: 'Learn how to observe the night sky like a pro.',
      image: telescopeImg
    },
    {
      title: 'Deep Space',
      description: 'Go beyond our galaxy and into the cosmic web.',
      image: deepSpaceImg
    },
    {
      title: 'News',
      description: 'Catch up with the latest discoveries and breakthroughs.',
      image: newsImg
    }
  ];
  
  return (
    <section style={container.wrapper}>
      <style>{container.gridResponsive}</style>
      <div style={container.inner}>
        <h2 style={container.heading}>Discover the Wonders of Space</h2>
        <p style={container.sub}>Your Gateway to the Cosmos: Explore galaxies, decode deep space, and catch the freshest cosmic updates.</p>
        <div className="explore-grid" style={container.grid}>
          {items.map((item) => (
            <ExploreCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              href={`/#${item.title.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreGrid;


