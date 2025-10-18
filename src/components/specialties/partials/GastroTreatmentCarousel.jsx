import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GastroTreatmentCarousel = () => {
  const settings = {
    dots: false,
    arrows: true,
    prevArrow: (
      <button type="button" className="slick-prev">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    ),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const treatments = [
    {
      icon: "/assets/img/gastro-slider-icon-01.png",
      title: "Colonoscopy",
      desc: `We offer advanced, pain-free colonoscopy using high-definition 
      endoscopic technology for accurate diagnosis and early detection. 
      Our expert gastro specialists ensure safe, comfortable procedures 
      with quick recovery and precise results for better digestive health.`,
    },
    {
      icon: "/assets/img/gastro-slider-icon-02.png",
      title: "Endoscopy",
      desc: `We offer advanced, pain-free colonoscopy using high-definition 
      endoscopic technology for accurate diagnosis and early detection. 
      Our expert gastro specialists ensure safe, comfortable procedures 
      with quick recovery and precise results for better digestive health.`,
    },
    {
      icon: "/assets/img/gastro-slider-icon-03.png",
      title: "Polypectomy",
      desc: `We offer advanced, pain-free colonoscopy using high-definition 
      endoscopic technology for accurate diagnosis and early detection. 
      Our expert gastro specialists ensure safe, comfortable procedures 
      with quick recovery and precise results for better digestive health.`,
    },
    {
      icon: "/assets/img/gastro-slider-icon-01.png",
      title: "Colonoscopy",
      desc: `We offer advanced, pain-free colonoscopy using high-definition 
      endoscopic technology for accurate diagnosis and early detection. 
      Our expert gastro specialists ensure safe, comfortable procedures 
      with quick recovery and precise results for better digestive health.`,
    },
    {
      icon: "/assets/img/gastro-slider-icon-02.png",
      title: "Endoscopy",
      desc: `We offer advanced, pain-free colonoscopy using high-definition 
      endoscopic technology for accurate diagnosis and early detection. 
      Our expert gastro specialists ensure safe, comfortable procedures 
      with quick recovery and precise results for better digestive health.`,
    },
    {
      icon: "/assets/img/gastro-slider-icon-03.png",
      title: "Polypectomy",
      desc: `We offer advanced, pain-free colonoscopy using high-definition 
      endoscopic technology for accurate diagnosis and early detection. 
      Our expert gastro specialists ensure safe, comfortable procedures 
      with quick recovery and precise results for better digestive health.`,
    },
  ];

  return (
    <section className="pt-5 text-center gastro-section">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <div className="row mb-3">
            <div className="col-12 my-5">
                <h2 className="section-title text-capitalize mb-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                    Expert Gastro Treatment & Advanced Surgeries
                </h2>
            </div>
        </div>

        <Slider {...settings}>
          {treatments.map((item, index) => (
            <div key={index}>
              <div className="gastro-single-item">
                <div className="gastro-icon-wrapper">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 invert brightness-0"
                    />
                </div>
                <h3 className="gastro-item-title">{item.title}</h3>
                <p className="gastro-item-para">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GastroTreatmentCarousel;
