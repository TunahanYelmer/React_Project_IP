import React from 'react';

const Slider: React.FC = () => {
  return (
    <section className="slider_section ">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>
                      The best marketing
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Contact Us
                      </a>
                      <a href="" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/static/images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>
                      The best marketing
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Contact Us
                      </a>
                      <a href="" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/static/images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>
                      The best marketing
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Contact Us
                      </a>
                      <a href="" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="/static/images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;