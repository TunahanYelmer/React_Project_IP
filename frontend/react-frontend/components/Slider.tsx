"use client";
import React, { useState, useEffect } from "react";
import { useDataLayerValue } from "../context/DataContext";
import { State, Action } from "../context/reducer";
import Image from "next/image";
import arrowLeft from "../static/images/left-angle.png";
import arrowRight from "../static/images/right-angle.png";
import { fetchSliderDataAndDispatch } from "../api/api";

interface Slider {
  title: string;
  description: string;
  contact_link: string;
  quote_link: string;
  image: string;
}

function isValidSlide(slide: Slider) {
  return (
    slide.title &&
    slide.description &&
    slide.contact_link &&
    slide.quote_link &&
    slide.image
  );
}

const Slider: React.FC = () => {
  const [{ sliderArray }, dispatch]: [State, React.Dispatch<Action>] =
    useDataLayerValue();
  const [current, setCurrent] = useState(0);
  const [translation, setTranslation] = useState(0);

  useEffect(() => {
    fetchSliderDataAndDispatch(dispatch).then(() => {});
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const validSlides = sliderArray && sliderArray.filter(isValidSlide);

  const nextImage = () => {
    if (sliderArray) {
      const nextIndex = (current + 1) % sliderArray.length;
      setCurrent(nextIndex);
      setTranslation(-100 * nextIndex);
    }
  };

  const prevImage = () => {
    if (sliderArray) {
      const prevIndex = current === 0 ? sliderArray.length - 1 : current - 1;
      setCurrent(prevIndex);
      setTranslation(-100 * prevIndex);
    }
  };

  return (
    <div className="container items-center justify-center mx-auto p-48">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center overflow-hidden relative">
        {sliderArray && (
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(${translation}%)`,
              width: `${sliderArray.length * 100}%`,
            }}
          >
            {sliderArray &&
              sliderArray.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row flex-shrink-0 w-full md:w-1/2 justify-center items-center"
                  style={{ width: "100%" }}
                >
                  <div className="flex flex-col px-4 relative max-h-350 max-w-550">
                    <div className="flex text-7xl font-bold md:text-3xl mb-8">
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
                  <div className="flex justify-center flex-shrink relative w-full size-min:w-96 md:w-550 h-350">
                    <Image
                      src={`/static/images/${slide.image}`}
                      height={350}
                      width={550}
                      alt=""
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="flex justify-center w-full mx-auto items-center">
        <button
          className="flex justify-center items-center bg-custom-yellow rounded-full w-11 h-11"
          onClick={prevImage}
        >
          <Image src={arrowLeft} alt="Previous" width={10} height={10} />
        </button>
        <button
          className="flex justify-center items-center transform -translate-y-1/2 bg-custom-yellow rounded-full w-11 h-11"
          onClick={nextImage}
        >
          <Image src={arrowRight} alt="Next" width={10} height={10} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
