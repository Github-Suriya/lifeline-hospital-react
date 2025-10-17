import React from "react";

const ProgressSection = () => {
  const progressData = [
    { img: "/assets/img/progress-icon-01.png", title: "No.1", subtitle: "in scarless & \n laparoscopic Surgeries", delay: 100 },
    { img: "/assets/img/progress-icon-02.png", title: "1200+", subtitle: "Bariatric & Metabolic \n Surgeries", delay: 200 },
    { img: "/assets/img/progress-icon-03.png", title: "200,000+", subtitle: "Day Care Surgeries", delay: 300 },
    { img: "/assets/img/progress-icon-01.png", title: "100,000+", subtitle: "Inpatient Surgeries", delay: 400 },
  ];

  return (
    <section className="progress-section py-5">
      <div className="container">
        <div className="row">
          {progressData.map((item, index) => (
            <div className="col-lg-3" key={index}>
              <div
                className="progress-card"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay={item.delay}
              >
                <div className="progress-img-wrapper mb-4">
                  <img src={item.img} alt={`progress-icon-${index + 1}`} />
                </div>
                <h2 className="progress-title">{item.title}</h2>
                <p className="progress-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;