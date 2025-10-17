import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-lg-0 py-3 d-flex justify-content-lg-start justify-content-center">
            <div
              className="about-image"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="100"
            >
              <img src="/assets/img/about_img.webp" alt="about" />
            </div>
          </div>
          <div className="col-lg-6 py-lg-0 py-3 d-flex align-items-center justify-content-center">
            <div
              className="about-content"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="200"
            >
              <p>
                Dr. J S Rajkumar, fondly known as Dr. JSR, was a studious and
                enthusiastic medical student, who won 32 Gold medals and the
                Johnston best outgoing student award at the Madras Medical
                College. He received four medical specializations from the
                Royal College of Surgeons in the United Kingdom.
              </p>
              <p>
                Dr. JSR's academic journey began at the prestigious Madras
                Medical College, where he earned widespread recognition for his
                dedication to both his studies and patients.
              </p>
              <a href="#" className="about-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;