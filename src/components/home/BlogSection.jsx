import React from "react";

const BlogSection = () => (
  <section className="blog-overall-section py-5">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="section-title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">Lifeline Blogs</h2>
          <p className="section-subtitle" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
            Check out our latest scoops on healthcare
          </p>
        </div>
      </div>
      {/* Featured Blog */}
      <div className="blog-section">
        <div className="featured-blog">
          <img data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100" src="/assets/img/blog-featured-img.png" alt="Featured Blog" />
          <div className="featured-overlay" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
            <div>
              <h2>India’s Weighty Future:</h2>
              <p>A Wake-Up Call on World Obesity Day</p>
              <span>By Dr. Anirudh Rajkumar</span>
            </div>
            <div className="d-flex align-items-end justify-content-center">
              <a href="#" className="btn">CLICK HERE</a>
            </div>
          </div>
        </div>
        {/* Side Blogs */}
        <div className="side-blogs">
          {[100, 300, 500].map((delay, idx) => (
            <div className="side-blog" key={idx} data-sal="slide-up" data-sal-duration="1000" data-sal-delay={delay}>
              <img src="/assets/img/blog-list-img.png" alt="Blog" />
              <div className="side-blog-content">
                <h3>
                  <a href="#">Your Body, Your Power: <br /> <span>Accelerating Women's Health Action</span></a>
                </h3>
                <div className="d-flex justify-content-between">
                  <span><i>By Dr. JS Rajkumar</i></span>
                  <button className="open-btn">OPEN</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-5">
          <a href="#" className="about-btn" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">Read More Articles</a>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
