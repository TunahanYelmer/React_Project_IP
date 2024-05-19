"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { fetchWorkDataAndDispatch } from "../api/api";
import { useDataLayerValue } from "../context/DataContext";
import { State, Action } from "../context/reducer";
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

const Work = () => {
  const [{ workArray }, dispatch]: [State, React.Dispatch<Action>] =
    useDataLayerValue();

  useEffect(() => {
    const fetchData = async () => {
      await fetchWorkDataAndDispatch(dispatch);
    };

    fetchData();
  }, [dispatch]);

  if (!workArray || workArray.length === 0) {
    return <div>Work data is not available</div>;
  }

  return (
    <div className="container mx-auto px-8 py-16 flex  bg-white lg:flex-row sm:flex-col  items-center justify-center">
      <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
        <h2 className="font-extrabold text-4xl text-center text-black lg:text-left mb-4">
          {workArray ? workArray[0].title : "How We Work!"}
        </h2>
        <p className="text-center lg:text-left text-lg text-gray-800 mb-8">
          {workArray
            ? workArray[0].description
            : "" ||
              "We are a team of professionals who are dedicated to providing the best services to our clients."}
        </p>
        {workArray.map((work, index) => (
          <div
            key={index}
            className="shadow-lg border-gray-200 p-4 mb-8 rounded-lg"
          >
            <div className="flex items-center">
              <div className="">
                <Image
                  src={`/static/images/${work.image}`}
                  height={50}
                  width={50}
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold ml-4 text-gray-800">
                {work.service_title}
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
