import React, { useState, useEffect } from "react";
import organicgarten from "./organicgarten.png";
import lilyvalley from "./lilyvalley.png";
import rainbow from "./rainbowtravels.png";

const images = [organicgarten, lilyvalley, rainbow];

function Featured() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="featured-clients-slideshow">
      <h2>Our Featured Clients</h2>
      <button className="prev-slide" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-slide" onClick={nextSlide}>
        &#10095;
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`featured-slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Featured;
