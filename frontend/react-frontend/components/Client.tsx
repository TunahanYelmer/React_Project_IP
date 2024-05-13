import React from 'react';

interface ClientProps {
  clients: {
    image: string;
    name: string;
    description: string;
  }[];
  heading: string;
  paragraph: string;
}

const Client: React.FC<ClientProps> = ({ clients, heading, paragraph }) => {
  return (
    <section className=" bg-gray-100 px-8 py-12">
      <div className="container mx-auto">
        <div className="heading_container">
          <h2 className="text-3xl font-medium mb-4">{heading}</h2>
          <p className="mb-12">{paragraph}</p>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {clients.map((client, index) => (
              <div
                className={`carousel-item ${
                  index === 0 ? 'active' : ''
                } relative flex w-full`}
                key={index}
              >
                <div className="container mx-auto">
                  <div className="box flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="img-box w-40 h-40 rounded-full overflow-hidden mr-8 mb-8 lg:mb-0">
                      <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="detail-box">
                      <h6 className="text-xl font-medium mb-2">{client.name}</h6>
                      <p className="mb-4">{client.description}</p>
                      <img src="/images/quote.png" alt="" className="mb-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel_btn-container">
            <a
              className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border border-gray-400 hover:border-gray-500 hover:text-gray-500 active:bg-white/30 font-medium transition-colors duration-200 ease-in-out rounded-full"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="fill-current w-8 h-8"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18l-6-6 6-6 1.415 1.415L11.415 10l4.586 4.586-1.415 1.415z" />
              </svg>
            </a>
            <a
              className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border border-gray-400 hover:border-gray-500 hover:text-gray-500 active:bg-white/30 font-medium transition-colors duration-200 ease-in-out rounded-full"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
              <svg
                className="fill-current w-8 h-8"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18l6-6-6-6-1.415 1.415L10.585 10l-4.586 4.586 1.415 1.415z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;