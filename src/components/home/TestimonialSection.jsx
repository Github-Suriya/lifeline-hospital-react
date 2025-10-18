import React from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";

const testimonials = [
  {
    name: "Gowthami VM",
    stars: 5,
    content: (
      <>
        I admitted my mother for total thyroidectomy surgery. Dr. Aadarsh Raghavan is very good endocrine surgeon. Kind, friendly and expert in thyroid surgery. My mother's voice is normal after surgery.
        <br />Management, nursing, housekeeping, canteen services everything good.
        <br />Cost also affordable.
      </>
    ),
  },
  {
    name: "Mageshbabu R",
    stars: 5,
    content: (
      <>
        I am giving 5 🌟 ratings. I have undergone <br /> hernia operation in lifeline hospital.
        <br />🌟 Well experienced Surgeon & doctor's.
        <br />🌟 staffs & sisters are very kind and very support.
        <br />🌟 Neet and clean 👌
        <br />🌟 higen & taste food provided
        <br />🌟 low cast treatment.
      </>
    ),
  },
  {
    name: "Uma Suresh",
    stars: 5,
    content: (
      <>
        Just because of the personal care, best treatment and unshakable faith on Dr JSR I go for treatment to Lifeline hospital.
        <br />The best. I go there like a daughter goes to her mother's house with confidence, love and affection.
        <br />On 6.2.2025 for the first time I met Dr K. R. Dharmendra.
        <br />Dr KRD and Dr Anirudh are also like Dr JSR.
      </>
    ),
  },
  {
    name: "Mageshbabu R",
    stars: 5,
    content: (
      <>
        I am giving 5 🌟 ratings. I have undergone <br /> hernia operation in lifeline hospital.
        <br />🌟 Well experienced Surgeon & doctor's.
        <br />🌟 staffs & sisters are very kind and very support.
        <br />🌟 Neet and clean 👌
        <br />🌟 higen & taste food provided
        <br />🌟 low cast treatment.
      </>
    ),
  },
];


const TestimonialSection = () => {
  const location = useLocation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <button className="slick-prev"><i className="fa-solid fa-chevron-left"></i></button>,
    nextArrow: <button className="slick-next"><i className="fa-solid fa-chevron-right"></i></button>,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  
  const isSpecialtiesPage = location.pathname.toLowerCase().includes("specialties");

  return (
    <section className="testimonial-section">
      <div className="container position-relative">
        <h2 className="section-title">{isSpecialtiesPage ? (<>Lifeline Hospital Through the <br /> Eyes of Our Patients</>) : "As told by our Patients"}</h2>
        <p className="section-subtitle">Patients Corner</p>

        <Slider {...settings} className="testimonial-wrapper">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index} data-sal="slide-up" data-sal-duration="1000">
              <h3>{item.name}</h3>
              <div className="stars">{"★".repeat(item.stars)}</div>
              <p>{item.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
