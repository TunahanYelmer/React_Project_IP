import React from "react";

const Work = () => {
  return (
    <section className="work_section bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="heading_container text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-2">
            How We Work!
          </h2>
          <p className="text-gray-600 text-lg">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-12">
          <div className="col-md-6 md:w-1/2">
            <div className="detail_container">
              <div className="box b-1 mb-6">
                <div className="top-box flex items-center">
                  <div className="icon-box mr-4">
                    <img src="/static/images/work-i1.png" alt="" />
                  </div>
                  <h5 className="text-xl font-semibold">
                    We Generate A Good Idea First
                  </h5>
                </div>
                <div className="bottom-box">
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                  </p>
                </div>
              </div>
              <div className="box b-1">
                <div className="top-box flex items-center">
                  <div className="icon-box mr-4">
                    <img src="/static/images/work-i2.png" alt="" />
                  </div>
                  <h5 className="text-xl font-semibold">
                    Then We Start Applying Ideas
                  </h5>
                </div>
                <div className="bottom-box">
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 md:w-1/2">
            <div className="img-box">
              <img
                src="/static/images/work-img.png"
                alt=""
                className="md:w-3/4 mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="btn-box text-center mt-10">
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;