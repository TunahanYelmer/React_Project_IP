import React from "react";
import Image from "next/image";
import aboutImage from "../static/images/about-img2.png";

interface Props {
  isButtonExists: boolean;
}
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const About: React.FC<Props> = ({ isButtonExists }) => {
  return (
    <section className="container flex justify-center items-center m-5 mt-0 mb-0 p-8 mx-auto ">
      <div className="container">
        <div className="flex ">
          <div className="flex  justify-center mr-0 items-center w-full   ">
            <Image src={aboutImage} height={500} width={500} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start  ml-0 w-full ">
            <div className="text-black font-extrabold  flex text-start m-4 text-4xl">
              <h2>About Us</h2>
              <h3 className="bg-custom-yellow rounded-full h-8 w-8 ml-3"></h3>
            </div>
            <p className=" text-base text-black m-4 text-start">
              {aboutContent}
            </p>
            <div className={` ${isButtonExists ? "" : " invisible"}`}>
              {" "}
              <button className="flex bg-custom-yellow rounded-full h-10 p-2 m-4">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
