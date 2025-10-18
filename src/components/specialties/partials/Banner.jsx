const Banner = () => {
  return (
    <section className="gastro-care-banner">
      <div className="container">
        {/* Text Content */}
        <div className="text-content">
          <h1>Expert Gastro Care</h1>
          <p>
            At Lifeline Hospital, our Gastroenterology specialists provide
            advanced diagnosis and treatment for digestive health issues. From
            acid reflux to liver disorders, we ensure personalized care with
            cutting-edge technology.
          </p>

          <div className="button-group">
            <a href="tel:9677222333" className="btn btn-secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.556 12.845c-1.25-.614-2.583-1.075-3.962-1.343a.75.75 0 00-.813.43l-.444 1.11a10.887 10.887 0 01-4.688-4.688l1.11-.444a.75.75 0 00.43-.813c-.268-1.38-.73-2.712-1.343-3.962a.75.75 0 00-.735-.488L4.62 3.033a.75.75 0 00-.749.613A17.935 17.935 0 0019.61 20.125a.75.75 0 00.613-.749l.38-1.495a.75.75 0 00-.488-.735z"></path>
              </svg>
              96 77 222 333
            </a>
            <a href="#" className="btn btn-secondary">
              Book Appointment
            </a>
          </div>
        </div>

        {/* Image and Orbit Icons */}
        <div className="image-content">
          <div className="orbit-container">
            <img
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Surgical procedure"
              className="main-image"
            />

            {/* Orbit Icons */}
            <div className="icon-wrapper icon-1">
                <img src="/assets/img/spacialities-icon-05.png" alt="spacialities-icon-05" />
            </div>

            <div className="icon-wrapper icon-2">
                <img src="/assets/img/spacialities-icon-06.png" alt="spacialities-icon-06" />
            </div>

            <div className="icon-wrapper icon-3">
                <img src="/assets/img/spacialities-icon-03.png" alt="spacialities-icon-03" />
            </div>

            <div className="icon-wrapper icon-4">
                <img src="/assets/img/spacialities-icon-03.png" alt="spacialities-icon-03" />
            </div>

            <div className="icon-wrapper icon-5">
                <img src="/assets/img/spacialities-icon-04.png" alt="spacialities-icon-04" />
            </div>

            <div className="icon-wrapper icon-6">
                <img src="/assets/img/spacialities-icon-01.png" alt="spacialities-icon-01" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;