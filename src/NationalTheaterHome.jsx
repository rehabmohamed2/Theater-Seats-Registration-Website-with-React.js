// NationalTheaterHome.js
import React, { useEffect, useState } from 'react';
import './NationalTheaterHome.css';

const NationalTheaterHome = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    '../images/im12.jpg', // Update the path to your image in the public folder
   
    '/images/im15.jpg',
      '/images/im17.jpg',
    '/images/im16.jpg',
    '/images/im18.jpg',
    
    // Add more image paths as needed
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through images
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <div className="national-theater-home">
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      ></div>
      <div className="overlay">
        <header>
          <h1>Theatre for Everyone</h1>
          <p>Watch unforgettable shows across Egypt and around the world.</p>
        </header>
      </div>
    </div>
  );
};

export default NationalTheaterHome;
