import React from "react";

const MapSection = () => (
  <section className="map-section">
    <iframe
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="100"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124362.63779728182!2d80.08127299726561!3d13.078105699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52667fb51df4c1%3A0xda54eb8cae181334!2sLifeline%20Multispeciality%20Hospitals!5e0!3m2!1sen!2sin!4v1760338324185!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
);

export default MapSection;
