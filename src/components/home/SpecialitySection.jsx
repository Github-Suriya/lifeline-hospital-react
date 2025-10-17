import React from "react";
import Slider from "react-slick";

const specialities = [
  { img: "/assets/img/spacial-icon-01.png", title: "Gastroenterology", subtitle: "Care for the reproductive system, like a mother care for a child." },
  { img: "/assets/img/spacial-icon-02.png", title: "Orthopedics", subtitle: "We provide full-fledged care for disorders in the skeletal system." },
  { img: "/assets/img/spacial-icon-03.png", title: "Neurology", subtitle: "Care for the brain, nervous system, spinal cord and blood vessels." },
  { img: "/assets/img/spacial-icon-04.png", title: "Cardiology", subtitle: "Leaders in heart care, offering advanced diagnostics and personalized treatments." },
];

const SpecialitySection = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: <button className="slick-prev"><i className="fa-solid fa-chevron-left"></i></button>,
    nextArrow: <button className="slick-next"><i className="fa-solid fa-chevron-right"></i></button>,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="progress-section speciality-section py-5">
      <div className="container">
        <div className="col-12 mb-5 text-center">
          <h2 className="section-title">Lifeline Specialities</h2>
          <p className="section-subtitle">A New Form of Personalized Care</p>
        </div>

        <Slider {...settings}>
          {specialities.map((item, index) => (
            <div key={index}>
              <div className="progress-card" data-sal="slide-up" data-sal-duration="1000">
                <div className="progress-img-wrapper mb-4">
                  <img src={item.img} alt={item.title} />
                </div>
                <h2 className="progress-title">{item.title}</h2>
                <p className="progress-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="col-12 text-center mt-5">
          <a href="#" className="about-btn">View All Specialities</a>
        </div>
      </div>
    </section>
  );
};

export default SpecialitySection;
