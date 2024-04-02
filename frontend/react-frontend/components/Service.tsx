import React from 'react';

interface ServiceProps {
  services: {
    title: string;
    description: string;
    image: string;
  }[];
  heading: string;
  paragraph: string;
}

const Service: React.FC<ServiceProps> = ({ services, heading, paragraph }) => {
  return (
    <section className="service_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="service_container">
          {services.map((service, index) => (
            <div className="box" key={index}>
              <div className="img-box">
                <img src={service.image} alt="" />
              </div>
              <div className="detail-box">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a href="/services">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Service;