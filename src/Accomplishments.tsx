import React, { useRef, useEffect } from 'react';
import './Accomplishments.css';

const Accomplishments: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft === 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      } else {
        scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="accomplishments-container">
      <h1>Goals & Accomplishments</h1>
      
      <div className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
          <div className="certifications-scroll" ref={scrollRef}>
            {/* Example of Credly badge embeds */}
            <div className="credly-badge">
              <iframe src="https://www.credly.com/badges/36c93887-ab85-4615-bc35-bea4f7181064" title="Credly Badge 1"></iframe>
            </div>
            <div className="credly-badge">
              <iframe src="https://www.credly.com/badges/a81169e4-13ce-49ae-a7a4-07ad68bce4d9/public_url" title="Credly Badge 2"></iframe>
            </div>
            <div className="credly-badge">
              <iframe src="https://www.credly.com/badges/436fccd1-d732-49ed-97fe-574bdadb35b3" title="Credly Badge 3"></iframe>
            </div>
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
        </div>
      </div>

      <div className="projects-goals">
        <h2>Current Work & Goals</h2>
        <p>Description to do.</p>
      </div>

      <div className="future-goals">
        <h2>Future Goals</h2>
        <p>Description to do.</p>
      </div>
    </div>
  );
};

export default Accomplishments;