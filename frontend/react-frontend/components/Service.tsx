import React from "react";

interface ServiceProps {
  services: {
    title: string;
    description: string;
    image: string;
  }[];
  heading: string;
  paragraph: string;
}
interface Button {
  isButtonExists: Boolean

}
const Services: ServiceProps = {
  services: [
    {
      title: "Web Development",
      description: "Web development is the work involved ",
      image: "images/service1.png",
    },
    {
      title: "App Development",
      description: "Mobile app development is the act or process ",
      image: "images/service2.png",
    },
    {
      title: "SEO Optimization",
      description:
        "SEO is the process of improving to a website or a web page from search engines.",
      image: "images/service3.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Digital marketing is the component of marketing that utilizes internet and online based digital technologies.",
      image: "images/service4.png",
    },
  ],
  heading: "Service",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
interface ServiceProps {
  isButtonExist?: boolean;
}
const Service: React.FC<Button> = ({ isButtonExists }) => {
  return (
    <section className="bg-custom-blue py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{Services.heading}</h2>
          <div className="bg-custom-yellow h-1 w-20 mx-auto my-4 rounded-full"></div>
          <p>{Services.paragraph}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center my-8">
          {Services.services.map((service, index) => (
            <div
              className="flex flex-col items-center justify-center max-w-72 mb-4 mx-3 my-6"
              key={index}
            >
              <div className="flex items-center bg-white justify-center rounded-xl w-64 h-52">
                <img src={service.image} className="h-28 w-28" alt="" />
              </div>
              <div className="text-center">
                <h5 className="font-bold text-xl mb-2">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`flex justify-center my-8 ${isButtonExists ? "" : "hidden"}`}>
          <button className="bg-custom-yellow py-2 px-6 rounded-full">
            <a href="/services">Read More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
