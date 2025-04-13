
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [trail, setTrail] = useState<{ x: number, y: number, id: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const addTrailPoint = (x: number, y: number) => {
      setTrail(prevTrail => [...prevTrail, { x, y, id: Date.now() }]);
      setTimeout(() => {
        setTrail(prevTrail => prevTrail.slice(1));
      }, 200);
    };

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (trail.length < 5) {
        addTrailPoint(e.clientX, e.clientY);
      } else if (Math.abs(e.clientX - trail[trail.length - 1].x) > 10 || 
                 Math.abs(e.clientY - trail[trail.length - 1].y) > 10) {
        addTrailPoint(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.getAttribute('role') === 'button' ||
          target.classList.contains('hoverable')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [trail]);

  return (
    <>
      <div 
        className={`custom-cursor ${clicked ? 'scale-75' : ''} ${isHovering ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `scale(${clicked ? 0.75 : isHovering ? 1.5 : 1})`,
        }}
      />
      {trail.map((point, i) => (
        <div 
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 0.3 - (i * 0.05)
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
