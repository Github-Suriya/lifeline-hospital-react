import React from "react";

const HealingSection = () => (
  <div className="health-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 row">
          <div className="col-12">
            <h2 className="section-title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
              Healing Without Scars
            </h2>
            <p className="section-subtitle" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
              Recovering With Confidence
            </p>
          </div>
          <div className="col-12">
            <p className="mb-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="500">
                Scarless surgery is a medical revolution, where procedures are performed through the tiniest incisions—often hidden within natural folds of the body—so scars fade away in just a few days. At Lifeline, our surgeons are leaders in minimally invasive surgery, ensuring patients recover with dignity, confidence, and peace of mind.
            </p>
            <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="700">
                What truly sets us apart is our innovation in single-port surgery through the belly button, making it possible to perform complex procedures with virtually no visible scar. Combined with reduced blood loss, shorter hospital stays, and faster healing, this approach represents the future of surgery. At Lifeline, every step is powered by advanced technology and guided by compassion, so you can focus on what truly matters—your recovery and your life.
            </p>
          </div>
          <div className="col-12 text-center mt-5">
            <a href="#" className="about-btn" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HealingSection;
