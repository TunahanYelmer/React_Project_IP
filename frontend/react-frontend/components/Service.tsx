"use client";
import React, { useEffect } from "react";
import { fetchServiceDataAndDispatch } from "../api/api";
import Image from "next/image";
import { useDataLayerValue } from "../context/DataContext";
import { State, Action } from "../context/reducer";

interface ServiceProps {
  services: {
    title: string;
    description: string;
    image: string;
  }[];
  heading: string;
  paragraph: string;
}

interface ButtonProps {
  isButtonExists: boolean;
}

const Service: React.FC<ButtonProps> = ({ isButtonExists }) => {
  const [{ serviceArray }, dispatch]: [State, React.Dispatch<Action>] =
    useDataLayerValue();
  useEffect(() => {
    fetchServiceDataAndDispatch(dispatch)
      .then(() => {
        console.log("Service data fetched successfully");
      })
      .catch((error) => {
        console.error("Service data Undefined", error);
      });
  }, [dispatch]);

  return (
    <section className="bg-custom-blue py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            {serviceArray ? serviceArray[0].title : ""}
          </h2>
          <div className="bg-custom-yellow h-1 w-20 mx-auto my-4 rounded-full"></div>
          <p> {serviceArray ? serviceArray[0].description : ""}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center my-8">
          {serviceArray &&
            serviceArray.map((service, index) => (
              <div
                className="flex flex-col items-center justify-center max-w-72 mb-4 mx-3 my-6"
                key={index}
              >
                <div className="flex items-center bg-white justify-center rounded-xl w-64 h-52">
                  <Image
                    src={`/static/images/${service.image}`}
                    height={50}
                    width={50}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-xl mb-2">
                    {service.service_title}
                  </h5>
                  <p>{service.service_description}</p>
                </div>
              </div>
            ))}
        </div>
        <div
          className={`flex justify-center my-8 ${
            isButtonExists ? "" : "hidden"
          }`}
        >
          <button className="bg-custom-yellow py-2 px-6 rounded-full">
            <a href="/services">Read More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
