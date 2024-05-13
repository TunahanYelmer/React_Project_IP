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
    <div className="container  flex-col flex  mx-auto justify-center items-center">
      <div className="flex flex-col mr-24 pr-60 mb-12">
        <div className="flex   justify-start items-center">
          <h2 className="font-extrabold text-black text-4xl">How We Work!</h2>
          <div className="bg-custom-yellow w-8 h-8 rounded-full mx-4"></div>
        </div>

        <p className="text-black mb-4">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex ">
        {" "}
        <div className=" flex  flex-col  w-550 m-8">
          {works.map((work, index) => (
            <div
              key={index}
              className=" shadow-lg border-gray-200 p-4  m-4 rounded-lg"
            >
              <div className="flex items-center ">
                {" "}
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
        <div className="">
          <Image src={workImage} height={350} width={550} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
