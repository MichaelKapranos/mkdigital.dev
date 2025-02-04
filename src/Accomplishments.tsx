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
      <h1 className="accomplishments-title">Goals & Accomplishments</h1>
      
      <div className="certifications">
  <h2>Certifications</h2>
  <div className="certifications-wrapper">
    <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
    <div className="certifications-scroll" ref={scrollRef}>
      <div className="credly-badge">
        <a href="https://www.credly.com/badges/36c93887-ab85-4615-bc35-bea4f7181064" target="_blank" rel="noopener noreferrer">
          <img src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="Credly Badge 1" />
        </a>
      </div>
      <div className="credly-badge">
        <a href="https://www.credly.com/badges/436fccd1-d732-49ed-97fe-574bdadb35b3" target="_blank" rel="noopener noreferrer">
          <img src="https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="Credly Badge 3" />
        </a>
      </div>
      <div className="credly-badge">
        <a href="https://www.credly.com/badges/a81169e4-13ce-49ae-a7a4-07ad68bce4d9/public_url" target="_blank" rel="noopener noreferrer">
          <img src="https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png" alt="Credly Badge 2" />
        </a>
      </div>
    </div>
    <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
  </div>
</div>

      <div className="projects-goals">
        <h2>Current Work & Goals</h2>
        <p>
        -Complete my driving tests<br/>
        -Complete first K8s exam (KCNA)<br/>
        -Aws certified professional architect<br/>
        -Official title change to cloud Engineer(or similar)<br/>
        -Finish project, Magic Mirror<br/>
        -Make good progression on Project, Creating Minecraft<br/>
        -Making progress in CUR in AWS learning a bit more about cost optimisation <br/>
        -New AWS projects
        </p>
      </div>

      <div className="future-goals">
        <h2>Future Goals</h2>
        <p>
        -Buy a car <br/>
        -Completion of the kubestronaut title of 5 k8 certifications <br/>
        -Move in with my friend (new place/my place)<br/>
        -Create a stocks Machine learning model to play about with the technology<br/>
        -Learn more about the stock market<br/>
        -Data engineer certification in AWS<br/>
        -AI certification?
        </p>
      </div>
    </div>
  );
};

export default Accomplishments;