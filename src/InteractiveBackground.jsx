import React, { useEffect } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  useEffect(() => {
    let interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    function handleMouseMove(event) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    // Start the animation when the component mounts
    move();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="interactive-background">
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              {/* ... your filter definition ... */}
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBackground;
