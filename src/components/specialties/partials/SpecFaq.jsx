import React from "react";

const faqs = [
  {
    question: "Inflammatory Bowel Disease – Crohn’s & Ulcerative Colitis",
    answer: "To schedule an appointment with Dr. J.S. Rajkumar, you can visit the official hospital website or contact our patient services at +91-XXXXXXXXXX. You may also use our app to book an appointment directly.",
    delay: 100
  },
  {
    question: "Appendicitis",
    answer: "Yes, Dr. J.S. Rajkumar frequently consults in Hyderabad. He is available for appointments at Lifeline Hospital, located in Banjara Hills, Hyderabad. You can call the hospital for availability or check the website for the most up-to-date schedule.",
    delay: 200
  },
  {
    question: "Gallstones (Cholelithiasis)",
    answer: "Lifeline Hospital is most renowned for its advanced cardiac care and exceptional surgical procedures. With state-of-the-art equipment and a dedicated team of specialists, we have been a leader in providing heart-related treatments, including cardiac surgery and diagnostics.",
    delay: 300
  },
  {
    question: "Colorectal Cancer",
    answer: "The visiting hours at Lifeline Hospital are from 9:00 AM to 8:00 PM, Monday through Saturday. Please note that visiting hours may vary based on the patient's condition and doctor's advice. We recommend contacting the hospital to confirm the visiting schedule.",
    delay: 400
  },
  {
    question: "Hemorrhoids",
    answer: "Yes, Lifeline Hospital has a 24/7 emergency department equipped to handle all types of medical emergencies. Our team of skilled emergency physicians and support staff is always available to provide immediate care.",
    delay: 500
  }
];

const SpecFaq = () => (
  <section className="spec-faq-section py-5 mt-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 d-flex justify-content-center">
                <div className="specFaqImgWrapper">
                    <img src="/assets/img/spec-faq-img.png" alt="spec-faq-img" />
                </div>
            </div>
            <div className="col-lg-7">
                <div className="row mb-4">
                    <div className="col-12">
                    <h2 className="section-title text-start text-capitalize" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        Understanding <br /> Gastrointestinal Disorders – <br /> Causes & Risks Explained!
                    </h2>
                    </div>
                </div>
                <div className="accordion accordion-flush" id="SpecFaqAccordion">
                    {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index} data-sal="slide-up" data-sal-duration="1000" data-sal-delay={faq.delay}>
                        <h2 className="accordion-header">
                        <button className={`accordion-button ${index !== 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded={index === 0} aria-controls={`flush-collapse${index}`}>
                            {faq.question}
                        </button>
                        </h2>
                        <div id={`flush-collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} data-bs-parent="#SpecFaqAccordion">
                        <div className="accordion-body px-0">{faq.answer}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  </section>
);

export default SpecFaq;
