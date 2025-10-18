import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const doctors = [
  {
    img: "/assets/img/doctors-01.png",
    title: "CHAIRMAN & CHIEF ROBOTIC \n& LAPAROSCOPIC SURGEON",
    name: "Dr. JS Rajkumar",
    qualifications: "M.S., F.I.C.S., Dip. NB (Surg.), F.R.C.S. (ENG.), ...",
    expertise: [
      "Laparoscopic (Keyhole) Surgery",
      "Robotic-Assisted Surgery",
      "Bariatric & Metabolic Surgery",
      "Diabetic Surgery",
      "Stem Cell Therapy",
      "Google Glass-Assisted Surgery",
      "Gastrointestinal Disorders",
    ],
  },
  {
    img: "/assets/img/doctors-02.png",
    title: "ADV. ROBOTIC & LAPAROSCOPIC SURGEON",
    name: "Dr. Anirudh Rajkumar",
    qualifications:
      "MBBS, MS (General Surgery), DNB (Surgery), FMAS, DMAS, MRCS, FIBC (Bariatric)",
    expertise: [
      "Advanced Robotic & Laparoscopic Surgeries",
      "Complete Laparoscopic Surgeries",
      "Abdominal, trauma, and emergency surgeries",
      "Soft tissue, skin, and digestive tract procedures",
    ],
  },
  {
    img: "/assets/img/doctors-03.png",
    title: "ADV. ROBOTIC & LAPAROSCOPIC SURGEON",
    name: "Dr. K.R. Dharmendra",
    qualifications: "MBBS, MS, DNB, FMAS, DMAS, FICRS, FIAGES...",
    expertise: [
      "Basic and advanced laparoscopic surgery",
      "Varicose vein and hemorrhoid surgery",
      "Abdominal wall hernia surgeries",
    ],
  },
  {
    img: "/assets/img/doctors-04.png",
    title: "GENITO-URINARY SURGEON",
    name: "Prof. Ilamparuthi Chennakrishnan",
    qualifications: "MBBS, MS, MCh (Uro), DNB (Uro), F.I.C.S.",
    expertise: [
      "Urinary tract disorder treatment",
      "Kidney, bladder, prostate surgeries",
      "Minimally invasive & robotic procedures",
      "Kidney stone removal (laser, shock wave)",
      "Male infertility & reproductive health",
    ],
  },
  {
    img: "/assets/img/doctors-02.png",
    title: "ADV. ROBOTIC & LAPAROSCOPIC SURGEON",
    name: "Dr. Anirudh Rajkumar",
    qualifications:
      "MBBS, MS (General Surgery), DNB (Surgery), FMAS, DMAS, MRCS, FIBC (Bariatric)",
    expertise: [
      "Advanced Robotic & Laparoscopic Surgeries",
      "Complete Laparoscopic Surgeries",
      "Abdominal, trauma, and emergency surgeries",
      "Soft tissue, skin, and digestive tract procedures",
    ],
  },
  {
    img: "/assets/img/doctors-03.png",
    title: "ADV. ROBOTIC & LAPAROSCOPIC SURGEON",
    name: "Dr. K.R. Dharmendra",
    qualifications: "MBBS, MS, DNB, FMAS, DMAS, FICRS, FIAGES...",
    expertise: [
      "Basic and advanced laparoscopic surgery",
      "Varicose vein and hemorrhoid surgery",
      "Abdominal wall hernia surgeries",
    ],
  },
  ];

const DoctorsSection = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelectorAll(".doctor-card").forEach((card, index) => {
      card.setAttribute("data-sal", "slide-up");
      card.setAttribute("data-sal-duration", "1000");
      card.setAttribute("data-sal-delay", 100 + index * 200);
    });
  }, []);

  // Check if URL contains "specialties"
  const isSpecialtiesPage = location.pathname.toLowerCase().includes("specialties");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className={`doctors-section`}
    >
      <h2
        className={`section-title ${isSpecialtiesPage ? "text-capitalize mb-5" : ""}`}
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-delay="100"
      >
        {isSpecialtiesPage ? (<>Meet the Minds Behind Exceptional <br /> Gastro Care</>) : "OUR DOCTORS"}
      </h2>

      <p
        className="section-subtitle"
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-delay="300"
      >
        {isSpecialtiesPage
          ? ""
          : "Lifeline Multispeciality Consultants"}
      </p>

      <div className="container doctors-slider">
        <Slider {...settings}>
          {doctors.map((doc, idx) => (
            <div className="doctor-card" key={idx}>
              <img src={doc.img} alt={doc.name} className="doctor-img" />
              <div className="doctor-info">
                <h5>{doc.title}</h5>
                <h3>{doc.name}</h3>
                <p className="qualifications">{doc.qualifications}</p>
                <h4>Expertise in</h4>
                <ul>
                  {doc.expertise.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>
                <a href="#" className="book-appointment-btn">
                  BOOK APPOINTMENT
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="row pt-5">
        <div className="col-12">
          <Link
            to="/doctorslist"
            className="about-btn"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            {isSpecialtiesPage ? "VIEW ALL SPECIALISTS" : "MORE DOCTORS"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;