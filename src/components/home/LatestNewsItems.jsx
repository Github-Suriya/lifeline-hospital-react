import React from "react";

const newsItems = [
  {
    img: "/assets/img/latest-news-01.png",
    title: (
      <>
        The Founders Day <br />
        Celebrating 28 Years of <br />
        Lifeline Hospitals
      </>
    ),
    date: "25th Jan 2025",
  },
  {
    img: "/assets/img/latest-news-02.png",
    title: (
      <>
        Blood Donation Camp <br />
        at Lifeline Hospitals
      </>
    ),
    date: "13th Feb 2025",
  },
  {
    img: "/assets/img/latest-news-03.png",
    title: (
      <>
        Dr. Anirudh Rajkumar <br />
        Best Obesity & Diabetes <br />
        Reversible Surgeon Award
      </>
    ),
    date: "6th March 2025",
  },
  {
    img: "/assets/img/latest-news-04.png",
    title: (
      <>
        Women's Day <br />
        Celebration at <br />
        Lifeline Hospitals
      </>
    ),
    date: "8th March 2025",
  },
];

const LatestNewsItems = () => (
  <section className="progress-section latest-news-second-section py-5">
    <div className="container position-relative">
      <div className="row latest-news-overall-wrapper">
        {newsItems.map((item, index) => (
          <div className="col-lg-3 mb-4" key={index}>
            <div
              className="single-news-wrapper"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay={100 + index * 200}
            >
              <img src={item.img} alt={`news-${index}`} />
              <div className="single-news-content ps-5">
                <p>{item.title}</p>
                <span>
                  <i>{item.date}</i>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 text-center mt-lg-5 mt-2 ln-btn-wrapper">
          <a href="#" className="about-btn">
            More News & Events
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LatestNewsItems;
