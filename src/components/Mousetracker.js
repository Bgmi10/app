import React, { useEffect, useState } from 'react';

export const Mousetracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleEvent = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleEvent);

    return () => window.removeEventListener('mousemove', handleEvent);
  }, []);

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (
        position.x >= rect.left &&
        position.x <= rect.right &&
        position.y >= rect.top &&
        position.y <= rect.bottom
      ) {
        setTargetPosition({
          x: rect.left-5,
          y: rect.top,
          width: rect.width+10 ,
          height: rect.height,
        });
      }
    });
  }, [position]);

  const boxStyle = {
    position: 'absolute',
    width: `${targetPosition.width}px`,
    height: `${targetPosition.height}px`,
    backgroundColor: '#d3d3d3',
    borderRadius: '5px',
    transform: `translate(${targetPosition.x}px, ${targetPosition.y}px)`,
    transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease', // Smooth transition
    pointerEvents: 'none', 
    
     
  };

  return (
    <>
      <div style={boxStyle} ></div>
      <div className='m-2 flex fixed '>
        <h1 className='m-2 nav-item '>Home</h1>
        <h1 className='m-2 nav-item'>Contact us</h1>
        <h1 className='m-2 nav-item'>About us</h1>
        <h1 className='m-2 nav-item'>Policy</h1>
      </div>
     
    </>
  );
};
