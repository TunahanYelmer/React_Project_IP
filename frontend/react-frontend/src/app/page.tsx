import React from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import About from "../../components/About";
import Service from "../../components/Service";
import Team from "../../components/Team";
import Work from "../../components/Work";
import Contact from "../../components/Contact";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import { DataProvider } from "../../context/DataContext";

export default function Home() {
  return (
    <DataProvider>
      <div className="bg-white  ">
        <div className="bg-hero-bg  bg-cover bg-no-repeat">
          <Header />
          <Slider />
        </div>
        <About isButtonExists={true} />
        <Work />
        <Service />
        <Team />
        <div className="pt-60 bg-footer-bg bg-cover bg-no-repeat">
          <Contact />
          <Info />
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}
