import React from "react";

const careHighlights = [
  { img: "/assets/img/care-icon-01.png", title: "Significant Weight Loss" },
  { img: "/assets/img/care-icon-04.png", title: "Boosted Confidence" },
  { img: "/assets/img/care-icon-02.png", title: "Improved Overall Health" },
  { img: "/assets/img/care-icon-02.png", title: "Improved Heart Health" },
  { img: "/assets/img/care-icon-03.png", title: "Controls Diabetes & Hypertension" },
  { img: "/assets/img/care-icon-06.png", title: "Ease Joint Pain & Breath Strain" },
];

const CareSection = () => {
  return (
    <section className="care-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2
              className="section-title"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="100"
            >
              Bariatric / Metabolic Care Excellence
            </h2>
            <p
              className="section-subtitle"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              Changing Lives, From Children to Adults, with Proven Results
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="care-image" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
              <img src="/assets/img/care-side-img.png" alt="care-side-img" />
            </div>
          </div>
          <div className="col-lg-5 pt-lg-5 pt-0">
            <div className="care-highlights row g-0" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
              {careHighlights.map((item, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="single-care-highlights">
                    <div className="icon">
                      <img src={item.img} alt={`care-icon-${index + 1}`} />
                    </div>
                    <p className="single-care-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 pt-lg-5 pt-0">
            <div className="care-content" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
              <p>
                At Lifeline Hospital, we are trusted as one of the leading centers for <b>Bariatric & Metabolic surgeries,</b> helping patients begin a healthier, happier life. With <b>500+ successful surgeries</b> and recognition as the Best Hospital for Bariatrics by Times Health Awards, our care speaks for itself. We are proud to have even changed the life of a <b>5-year-old child through a rare bariatric surgery.</b>
              </p>
              <a href="#" className="about-btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;