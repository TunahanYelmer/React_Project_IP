
import Image from "next/image";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Client from "../../components/Client";
import Contact from "../../components/Contact";
import Service from "../../components/Service";
import Team from "../../components/Team";
import Work from "../../components/Work";
import Info from "../../components/Info";
import Footer from "../../components/Footer";

export default function Home() {
  return (

    <div className="">
      <Header />
      <Slider />
      <Team />
      <Work />
      <Info />
      <Footer />
    </div>

  );
}
