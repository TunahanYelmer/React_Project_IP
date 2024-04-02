import React from 'react';

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  return (
    <section className="info_section bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-2">
            <div className="info_logo">
              <h3 className="text-white">Seotech</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className="info_links">
              <h4 className="text-white">BASIC LINKS</h4>
              <ul className="list-unstyled">
                <li className="active">
                  <a className="text-white" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="info_contact">
              <h4 className="text-white">CONTACT DETAILS</h4>
              <a href="tel:+011234567890">
                <div className="flex items-center mb-2">
                  <img
                    src="/images/telephone-white.png"
                    width="12px"
                    alt=""
                  />
                  <p className="text-gray-300 ml-2">
                    +01 1234567890
                  </p>
                </div>
              </a>
              <a href="mailto:demo@gmail.com">
                <div className="flex items-center mb-2">
                  <img
                    src="/images/envelope-white.png"
                    width="18px"
                    alt=""
                  />
                  <p className="text-gray-300 ml-2">
                    demo@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="info_form">
              <h4 className="text-white">NEWSLETTER</h4>
              <form action="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white rounded-md py-2 px-3 mb-2 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-3 rounded-md w-full"
                >
                  Subscribe
                </button>
              </form>
              <div className="social_box mt-4">
                <a href="">
                  <img
                    src="/images/info-fb.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="/images/info-twitter.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="/images/info-linkedin.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="/images/info-youtube.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;