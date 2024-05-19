"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import callIcon from "../static/images/call.png";
import { State, Action } from "../context/reducer";
import { useDataLayerValue } from "../context/DataContext";
import { fetchContactDataAndDispatch } from "../api/api";

interface MenuItemProps {
  route: string;
  currentState: string;
  onClick: (route: string) => void;
  children: React.ReactNode; // Adding children prop
}

const Header: React.FC = () => {
  const [{ isMenuOpen, route, contactArray }, dispatch]: [
    State,
    React.Dispatch<Action>
  ] = useDataLayerValue();
  useEffect(() => {
    fetchContactDataAndDispatch(dispatch);
  }, []);

  const handleRouteOnClick = (route: string) => {
    dispatch({
      type: "SET_ROUTE",
      route: route,
    });
  };

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU", isMenuOpen: !isMenuOpen });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center w-full p-3 text-white">
      <div className="flex items-center">
        <Link href={"/"}>
          <span className="text-3xl font-sans font-bold cursor-pointer">
            Seotech
          </span>
        </Link>
      </div>
      <div
        className={`sm:flex ${isMenuOpen ? "block" : "hidden"} mt-4 sm:mt-0`}
      >
        <ul className="flex justify-center sm:mx-8">
          <MenuItem
            route=""
            currentState={route || "Home"}
            onClick={handleRouteOnClick}
          >
            Home
          </MenuItem>
          <MenuItem
            route="About"
            currentState={route || "Home"}
            onClick={handleRouteOnClick}
          >
            About
          </MenuItem>
          <MenuItem
            route="Service"
            currentState={route || "Home"}
            onClick={handleRouteOnClick}
          >
            Service
          </MenuItem>
          <li className="mx-4 my-3">
            <button
              className="flex rounded-full hover:bg-custom-yellow p-2"
              onClick={scrollToContact}
            >
              <span>Contact Us</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <span className="mr-2">Call :</span>
        <span className="mr-2 truncate">
          {contactArray?.[1]?.telephone ?? "05413657441"}
        </span>
        <Image
          src={callIcon}
          height={15}
          width={15}
          alt="telephone Icon"
          className="mr-2"
        />
      </div>
      <div className="sm:hidden">
        <button className="flex items-center" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  route,
  currentState,
  onClick,
  children,
}) => {
  const isActive = currentState === route;
  return (
    <Link href={`/${route.toLowerCase()}`}>
      <li className="mx-4 my-3">
        <button
          className={`flex rounded-full ${
            isActive ? "bg-custom-yellow" : "hover:bg-custom-yellow"
          } p-2`}
          onClick={() => onClick(route)}
        >
          {children}
        </button>
      </li>
    </Link>
  );
};

export default Header;
