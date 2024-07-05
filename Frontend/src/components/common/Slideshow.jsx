import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images, height }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="slideshow"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: height || '360px', // Fixed height
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Slideshow content can be added here */}
    </div>
  );
};

export default Slideshow;
