"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrowLeft from "../static/images/left-angle.png";
import arrowRight from "../static/images/right-angle.png";

interface SliderProps {
  slides: Slider[];
}

interface Slider {
  title: string;
  description: string;
  contact_link: string;
  quote_link: string;
  image: string;
}

interface SliderProps {
  slides: Slider[];
}

interface Slider {
  title: string;
  description: string;
  contact_link: string;
  quote_link: string;
  image: string;
}
const slides = [
  {
    title: "The best marketing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking",
    contact_link: "https://example.com/contact1",
    quote_link: "https://example.com/quote1",
    image: "/static/images/slider-img.png",
  },
  {
    title: "Slide 2",
    description: "Description for slide 2",
    contact_link: "https://example.com/contact2",
    quote_link: "https://example.com/quote2",
    image: "/static/images/slider-img.png",
  },
  {
    title: "Slide 3",
    description: "Description for slide 3",
    contact_link: "https://example.com/contact3",
    quote_link: "https://example.com/quote3",
    image: "/static/images/slider-img.png",
  },
];
const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [translation, setTranslation] = useState(0);

  const nextImage = () => {
    const nextIndex = (current + 1) % slides.length;
    setCurrent(nextIndex);
    setTranslation(-100 * nextIndex);
  };

  const prevImage = () => {
    const prevIndex = current === 0 ? slides.length - 1 : current - 1;
    setCurrent(prevIndex);
    setTranslation(-100 * prevIndex);
  };

  return (
    <div className="container items-center justify-center mx-auto    p-48">
      <div className="container mx-auto flex items-center justify-center overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${translation}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="  flex flex-shrink-0 w-full justify-center items-center"
            >
              <div className="flex flex-col px-4  relative  max-h-350 max-w-550">
                <div className="flex text-7xl mb-8">
                  <h1>{slide.title}</h1>
                </div>
                <div className="text-base mb-4">{slide.description}</div>
                <div>
                  <button className="h-10 w-36 rounded-full bg-custom-yellow">
                    Contact Us
                    <a href={slide.contact_link}></a>
                  </button>
                </div>
              </div>
              <div className="  flex justify-center  relative  w-550 h-350 ">
                <Image
                  src={slide.image}
                  layout="fill"
                  object-Fit="cover"
                  alt=""
                />{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mx-auto items-center">
        <button
          className="flex justify-center items-center   bg-custom-yellow rounded-full w-11 h-11"
          onClick={prevImage}
        >
          <Image src={arrowLeft} alt="Previous" width={10} height={10} />
        </button>
        <button
          className="flex justify-center items-center  transform -translate-y-1/2 bg-custom-yellow rounded-full w-11 h-11"
          onClick={nextImage}
        >
          <Image src={arrowRight} alt="Next" width={10} height={10} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
