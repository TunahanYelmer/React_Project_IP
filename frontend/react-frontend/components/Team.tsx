import React from 'react';

interface TeamProps {}

const Team: React.FC<TeamProps> = () => {
  return (
    <section className="team_section bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="heading_container mb-8">
          <h2 className="text-3xl font-medium mb-2">Meet The Team</h2>
          <p className="text-gray-500">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className="team_container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="box b-1">
            <div className="img-box">
              <img
                src="/static/images/t-1.png"
                alt=""
                className="w-full rounded-t-md"
              />
            </div>
            <div className="detail-box bg-white p-4 rounded-b-md">
              <h5 className="text-xl font-medium mb-2">Yokit Den</h5>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="social_box mt-4">
                <a href="">
                  <img
                    src="/static/images/fb.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/twitter.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/linkedin.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/insta.png"
                    alt=""
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="box b-2">
            <div className="img-box">
              <img
                src="/static/images/t-2.png"
                alt=""
                className="w-full rounded-t-md"
              />
            </div>
            <div className="detail-box bg-white p-4 rounded-b-md">
              <h5 className="text-xl font-medium mb-2">Morde Den</h5>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="social_box mt-4">
                <a href="">
                  <img
                    src="/static/images/fb.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/twitter.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/linkedin.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/insta.png"
                    alt=""
                className="inline-block"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="box b-3">
            <div className="img-box">
              <img
                src="/static/images/t-3.png"
                alt=""
                className="w-full rounded-t-md"
              />
            </div>
            <div className="detail-box bg-white p-4 rounded-b-md">
              <h5 className="text-xl font-medium mb-2">Marry Doki</h5>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="social_box mt-4">
                <a href="">
                  <img
                    src="/static/images/fb.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/twitter.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/linkedin.png"
                    alt=""
                    className="inline-block mr-2"
                  />
                </a>
                <a href="">
                  <img
                    src="/static/images/insta.png"
                    alt=""
                    className="inline-block"
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

export default Team;