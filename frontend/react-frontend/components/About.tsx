"use client";
import React, { useEffect } from "react";
import { useDataLayerValue } from "../context/DataContext";
import { State, Action } from "../context/reducer";
import Image from "next/image";
import aboutImage from "../static/images/about-img2.png";
import { fetchAboutDataAndDispatch } from "../api/api";

interface About {
  _id: string;
  description: string;
  image: string;
  read: string;
  title: string;
}

interface Props {
  isButtonExists: boolean;
}

function isValidAbout(about: About) {
  return (
    about._id && about.description && about.image && about.read && about.title
  );
}

const About: React.FC<Props> = ({ isButtonExists }) => {
  const [{ aboutArray }, dispatch]: [State, React.Dispatch<Action>] =
    useDataLayerValue();
  useEffect(() => {
    fetchAboutDataAndDispatch(dispatch).then(() => {
      if (aboutArray) {
      } else {
        console.log("aboutArray is undefined");
      }
    });
  }, [dispatch]);

  const validAbouts = aboutArray && aboutArray.filter(isValidAbout);

  return (
    <section className="container flex justify-center items-center m-5 mt-0 mb-0 p-8 mx-auto ">
      <div className="container">
        <div className="flex ">
          <div className="flex  justify-center mr-0 items-center w-full   ">
            <Image src={aboutImage} height={500} width={500} alt="" />
          </div>
          {validAbouts && validAbouts[0] && (
            <div className="flex flex-col justify-center items-start  ml-0 w-full ">
              <div className="text-black font-extrabold  flex text-start m-4 text-4xl">
                <h2>{validAbouts[0].title}</h2>
                <h3 className="bg-custom-yellow rounded-full h-8 w-8 ml-3"></h3>
              </div>

              <p className=" text-base text-black m-4 text-start">
                {validAbouts[0].description}
              </p>

              <div className={` ${isButtonExists ? "" : " invisible"}`}>
                {" "}
                <button className="flex bg-custom-yellow rounded-full h-10 p-2 m-4">
                  Read More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
