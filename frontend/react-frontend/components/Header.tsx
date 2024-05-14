"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import callIcon from "../static/images/call.png";
import { useDataLayerValue } from "../context/DataContext";

const Header = () => {
  const { state, dispatch } = useDataLayerValue(); // Destructure state and dispatch from the context value object

  const handleRouteOnClick = (route: string) => {
    dispatch({
      type: "SET_ROUTE",
      route: route,
    });
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-row justify-between items-center w-full p-3 text-white">
      <div className="justify-start">
        <Link href={"/"}>
          <span className="text-3xl font-sans font-bold">Seotech</span>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex justify-center mx-8">
          <Link href={"/"}>
            <li className="mx-4 my-3">
              <button
                className={`flex rounded-full ${
                  state.route === "Home"
                    ? "bg-custom-yellow"
                    : "hover:bg-custom-yellow"
                } p-2`}
                onClick={() => handleRouteOnClick("Home")}
              >
                <span>Home</span>
              </button>
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="mx-4 my-3">
              <button
                className={`flex rounded-full ${
                  state.route === "About"
                    ? "bg-custom-yellow"
                    : "hover:bg-custom-yellow"
                } p-2`}
                onClick={() => handleRouteOnClick("About")}
              >
                <span>About</span>
              </button>
            </li>
          </Link>
          <Link href={"/service"}>
            <li className="mx-4 my-3">
              <button
                className={`flex rounded-full ${
                  state.route === "Service"
                    ? "bg-custom-yellow"
                    : "hover:bg-custom-yellow"
                } p-2`}
                onClick={() => handleRouteOnClick("Service")}
              >
                <span>Service</span>
              </button>
            </li>
          </Link>
          <li className="mx-4 my-3">
            <button className="flex rounded-full hover:bg-custom-yellow p-2" onClick={scrollToContact}>
              <span>Contact Us</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <span className="mr-2">Call :</span>
        <span className="mr-2 truncate">+01 1234567890</span>
        <Image
          src={callIcon}
          height={15}
          width={15}
          alt="telephone Icon"
          className="mr-2"
        />
      </div>
    </header>
  );
};

export default Header;
