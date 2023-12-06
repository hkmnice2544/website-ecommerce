import React, { useState, useEffect } from "react";
import Image from "next/image";
import imgbn from "../../../public/Img/Homepage/Banner.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically transition to the next slide
      nextSlide();
    }, 1); // Adjust the interval (in milliseconds) according to your preference

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const showSlide = (n: number) => {
    const slides = document.getElementsByClassName("carousel-item");

    if (n > slides.length) {
      setCurrentSlide(1);
    } else if (n < 1) {
      setCurrentSlide(slides.length);
    } else {
      setCurrentSlide(n);
    }
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image className="w-full" src={imgbn} alt={""} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <Image className="w-full" src={imgbn} alt={""} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        {/* ... Slide 3 content ... */}
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        {/* ... Slide 4 content ... */}
      </div>
    </div>
  );
};

export default Carousel;
