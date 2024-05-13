"use client";
import React from "react";
import Image from "next/image";
import { useDataLayerValue } from "../context/DataContext";
import whiteTelephone from "/static/images/telephone-white.png";
import envelopWhite from "/static/images/envelope-white.png";
import infoYoutube from "/static/images/info-youtube.png";
import infoLinkedin from "/static/images/info-linkedin.png";
import infoTwitter from "/static/images/info-twitter.png";
import infoFb from "/static/images/info-fb.png";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  const { state, dispatch } = useDataLayerValue();

  return (
    <section className="container mx-auto flex flex-col md:flex-row  sm:item-center  justify-between py-4">
      <div className=" md:w-1/4">
        <div className="  max-w-64">
          <h3 className="font-bold text-3xl">SEOTECH</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking
          </p>
        </div>
      </div>
      <div className=" justify-center md:w-1/4">
        <h4 className="text-2xl ">Basic Links</h4>
        <ul className="text-base text-left">
          <li className="flex items-center  mb-2">
            <h1
              className={`w-4 h-4 rounded-full ${
                state.route === "Home" ? "bg-custom-yellow p-1" : ""
              }`}
            ></h1>
            Home
          </li>
          <li className="flex items-center  mb-2">
            <h2
              className={`w-4 h-4 rounded-full ${
                state.route === "About" ? "bg-custom-yellow" : ""
              }`}
            ></h2>
            About
          </li>
          <li className="flex items-center  mb-2">
            <h3
              className={`w-4 h-4 rounded-full ${
                state.route === "Service" ? "bg-custom-yellow p-1" : ""
              }`}
            ></h3>
            Services
          </li>
          <li className="flex items-center  mb-2">
            <h4 className="w-4 h-4 rounded-full "></h4> Contact
          </li>
        </ul>
      </div>
      <div className="md:w-1/4">
        <h5 className="text-2xl mb-4">Contact Details</h5>
        <div className="flex m-2">
          <Image src={whiteTelephone} height={15} width={15} alt="" />
          <p></p>
        </div>
        <div className="flex m-2">
          <Image src={envelopWhite} height={20} width={20} alt="" />
          <p></p>
        </div>
      </div>
      <div className="md:w-1/4">
        <h6 className="text-2xl mb-4">NEWSLETTER</h6>
        <div className="  max-w-64">
          {" "}
          <div className="">
            <input
              className="bg-custom-blue border p-2 w-full placeholder:Email placeholder-gray-500"
              placeholder="Email"
            ></input>
          </div>
          <div className="flex bg-custom-yellow  items-center mt-4 justify-center text-center rounded-md">
            <button className="p-2 text-center" type="submit">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className=" item-center flex m-5">
          <div className="flex p-2">
            <a>
              <Image src={infoFb} height={20} width={30} alt="" />
            </a>
          </div>
          <div className="flex p-2">
            <a>
              <Image src={infoTwitter} height={20} width={30} alt="" />
            </a>
          </div>
          <div className="flex p-2">
            <a>
              <Image src={infoLinkedin} height={20} width={30} alt="" />
            </a>
          </div>
          <div className="flex p-2">
            <a>
              <Image src={infoYoutube} height={20} width={30} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
