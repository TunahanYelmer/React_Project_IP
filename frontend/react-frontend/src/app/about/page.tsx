import React from "react";
import Header from "../../../components/Header";
import AboutComponent from "../../../components/About";
import Contact from "../../../components/Contact";
import Info from "../../../components/Info";
import Footer from "../../../components/Footer";
import footerBg from "../../../static/images/footer-bg.png";
import { DataProvider } from "../../../context/DataContext";

const AboutPage: React.FC = () => {
  return (
    <DataProvider>
      <div>
        <div className="bg-custom-blue">
          <Header />
        </div>
        <div className="bg-white py-0 my-0 h-full ">
          <AboutComponent isButtonExists={false} />
        </div>

        <div className="bg-footer-bg bg-white pt-60 bg-cover bg-no-repeat">
          <Contact />
          <Info />
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
};

export default AboutPage;
