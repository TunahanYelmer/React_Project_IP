import React from 'react';

interface Props {
  aboutContent: string;
}

const About: React.FC<Props> = ({ aboutContent }) => {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="/images/about-img2.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p>{aboutContent}</p>
              <a href=""> Read More </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;