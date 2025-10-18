const doctors = [
  {
    name: "Dr. JS Rajkumar",
    title: (<>Chairman & Chief Robotic & <br /> Laparoscopic Surgeon</>),
    experience: "38 Years of Experience",
    qualifications: (<>
        M.S, F.I.C.S, Dip. N.B. (SURG.), F.R.C.S. (ENG.), F.R.C.S. (EDIN.), 
    F.R.C.S. (GLASGOW), <br /> F.R.C.S. (IRELAND), F.I.M.S, F.A.I.S, F.R.M.S. (LONDON), 
    F.A.E. (GASTRO), F.A.C.G. (USA), <br /> F.I.C.A (USA), F.I.A.G.E.S, Dip MIS. (FR.)
    </>),
    image: "/assets/img/doctors-01.png",
  },
  {
    name: "Dr. Anirudh Rajkumar",
    title: (<>Adv. Robotic & Laparoscopic <br /> Surgeon</>),
    experience: "12 Years of Experience",
    qualifications: (<>MBBS, MS (GENERAL SURGERY), DNB (SURGERY), <br /> FMAS, DMAS, MRCS, FIBC (BARIATRIC)</>),
    image: "/assets/img/doctors-02.png",
  },
];

const Doctors = () => {
  return (
    <section className="doctors-section">
      <div className="container">
        {doctors.map((doc, index) => (
          <div className={`single-doctor-card ${index === doctors.length - 1 ? 'last-element' : ''}`} key={index}
          data-sal="fade" data-sal-duration="1000" data-sal-delay={index * 200}>
            <div className="d-flex align-items-center gap-3">
                <div className="single-doctor-image">
                    <img src={doc.image} alt={doc.name} />
                </div>
                <div className="single-doctor-info">
                    <h3>{doc.name}</h3>
                <div className="d-flex align-items-center gap-5 mb-4">
                    <p className="single-doctor-designation mb-0">{doc.title}</p>
                    <div className="experience">
                        <span className="divider"></span>
                        <span className="years">{doc.experience}</span>
                    </div>
                </div>
                <p className="qualifications">{doc.qualifications}</p>
                </div>
            </div>
            <div className="my-5 ps-5">
              <div className="buttons">
                <button className="btn-outline">Know More</button>
                <button className="btn-filled">Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;