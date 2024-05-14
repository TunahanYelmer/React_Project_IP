import React from "react";
import Image from "next/image";
import workImage from "../static/images/work-img.png";
import workIcon1 from "../static/images/work-i1.png";
import workIcon2 from "../static/images/work-i2.png";

interface Work {
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}

interface WorkProps {
  works: Work[];
}

const works = [
  {
    title: "Design",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    service_title: "Service Title",
    service_description: "Service Description",
    read: "Read More",
    image: "/static/images/work-img.png",
  },
  {
    title: "Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    service_title: "Service Title",
    service_description: "Service Description",
    read: "Read More",
    image: "/static/images/work-img.png",
  },
];

const Work = () => {
  return (
    <div className="container mx-auto px-8 py-16 flex  bg-white lg:flex-row sm:flex-col  items-center justify-center">
      <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
        <h2 className="font-extrabold text-4xl text-center lg:text-left mb-4">
          How We Work!
        </h2>
        <p className="text-center lg:text-left text-lg text-gray-800 mb-8">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        {works.map((work, index) => (
          <div
            key={index}
            className="shadow-lg border-gray-200 p-4 mb-8 rounded-lg"
          >
            <div className="flex items-center">
              <div className="">
                <Image src={workIcon1} height={50} width={50} alt="" />
              </div>
              <h3 className="text-xl font-semibold ml-4 text-gray-800">
                {work.title}
              </h3>
            </div>
            <div className="mt-4">
              <p className="mt-2 text-gray-600">{work.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold">{work.service_title}</h4>
                <p>{work.service_description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-1/2">
        <Image src={workImage} height={350} width={550} alt="" />
      </div>
    </div>
  );
};

export default Work;
