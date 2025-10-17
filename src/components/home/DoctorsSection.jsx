import React from "react";
import Slider from "react-slick";

const doctors = [
  {
    img: "/assets/img/doctors-01.png",
    position: "CHAIRMAN & CHIEF ROBOTIC & LAPAROSCOPIC SURGEON",
    name: "Dr. JS Rajkumar",
    qualification: "M.S., F.I.C.S., Dip. NB (Surg.), F.R.C.S. (ENG.), ...",
    expertise: ["Laparoscopic (Keyhole) Surgery", "Robotic-Assisted Surgery", "Bariatric & Metabolic Surgery", "Diabetic Surgery", "Stem Cell Therapy", "Google Glass-Assisted Surgery", "Gastrointestinal Disorders"]
  },
  {
    img: "/assets/img/doctors-02.png",
    position: "ADV. ROBOTIC & LAPAROSCOPIC SURGEON",
    name: "Dr. Anirudh Rajkumar",
    qualification: "MBBS, MS (General Surgery), DNB (Surgery), FMAS, DMAS, MRCS, FIBC (Bariatric)",
    expertise: ["Advanced Robotic & Laparoscopic Surgeries", "Complete Laparoscopic Surgeries", "Abdominal, trauma, and emergency surgeries", "Soft tissue, skin, and digestive tract procedures"]
  },
  {
    img: "/assets/img/doctors-03.png",
    position: "ADV. ROBOTIC & LAPAROSCOPIC SURGEON",
    name: "Dr. K.R. Dharmendra",
    qualification: "MBBS, MS, DNB, FMAS, DMAS, FICRS, FIAGES...",
    expertise: ["Basic and advanced laparoscopic surgery", "Varicose vein and hemorrhoid surgery", "Abdominal wall hernia surgeries"]
  },
  {
    img: "/assets/img/doctors-04.png",
    position: "GENITO-URINARY SURGEON",
    name: "Prof. Ilamparuthi Chennakrishnan",
    qualification: "MBBS, MS, MCh (Uro), DNB (Uro), F.I.C.S.",
    expertise: ["Urinary tract disorder treatment", "Kidney, bladder, prostate surgeries", "Minimally invasive & robotic procedures", "Kidney stone removal (laser, shock wave)", "Male infertility & reproductive health"]
  }
];

const DoctorsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <section className="doctors-section">
      <h2 className="section-title">OUR DOCTORS</h2>
      <p className="section-subtitle">Lifeline Multispeciality Consultants</p>

      <Slider {...settings}>
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.img} alt={doc.name} className="doctor-img" />
            <div className="doctor-info">
              <h5>{doc.position}</h5>
              <h3>{doc.name}</h3>
              <p className="qualifications">{doc.qualification}</p>
              <h4>Expertise in</h4>
              <ul>
                {doc.expertise.map((exp, i) => <li key={i}>{exp}</li>)}
              </ul>
              <a href="#" className="book-appointment-btn">BOOK APPOINTMENT</a>
            </div>
          </div>
        ))}
      </Slider>

      <div className="row pt-5">
        <div className="col-12">
          <a href="#" className="about-btn">MORE DOCTORS</a>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
