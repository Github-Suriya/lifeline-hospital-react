import React from "react";

const healthItems = [
  { img: "/assets/img/health-icon-01.png", title: "Cardiac Checkup" },
  { img: "/assets/img/health-icon-02.png", title: "Guthealth Checkup" },
  { img: "/assets/img/health-icon-01.png", title: "Wholebody Checkup" },
  { img: "/assets/img/health-icon-04.png", title: "Geriatric Checkup" },
];

const HealthCheckups = () => (
  <section className="progress-section health-icon-section py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 mb-5">
          <h2 className="section-title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
            Check Early, Stay Healthy
          </h2>
          <p className="section-subtitle" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
            Comprehensive Health check-ups
          </p>
        </div>

        {healthItems.map((item, index) => {
          const words = item.title.split(" ");
          return (
            <div className="col-lg-3" key={index}>
              <div className="progress-card" data-sal="slide-up" data-sal-duration="1000" data-sal-delay={100 + index * 200}>
                <div className="progress-img-wrapper mb-4">
                  <img src={item.img} alt={item.title} />
                </div>
                <h2 className="progress-title">
                  <a href="#">
                    {words.length >= 2 ? (
                      <>
                        {words[0]}<br />{words.slice(1).join(" ")}
                      </>
                    ) : (
                      item.title
                    )}
                  </a>
                </h2>
              </div>
            </div>
          );
        })}

        <div className="col-12 text-center mt-5">
          <a href="#" className="about-btn">More Health Checkups</a>
        </div>
      </div>
    </div>
  </section>
);

export default HealthCheckups;
