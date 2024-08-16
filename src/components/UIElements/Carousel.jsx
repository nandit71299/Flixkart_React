import React from "react";
import { useEffect } from "react";

import "./Carousel.css";

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const goToNextSlide = () => {
    setCurrentIndex((prev) => {
      return prev === props.images.length - 1 ? 0 : prev + 1;
    });
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? props.images.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="carousel-container">
        <button className="left-arrow" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <div className="carousel-content">
          <img src={props.images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <button className="right-arrow" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
