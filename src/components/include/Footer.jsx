import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    document.querySelectorAll('.footer-list').forEach(list => {
      let delay = 50;
      list.querySelectorAll('li').forEach(li => {
        li.setAttribute('data-sal', 'slide-up');
        li.setAttribute('data-sal-duration', '1000');
        li.setAttribute('data-sal-delay', delay);
        delay += 50;
      });
    });
  }, []);

  return (
    <section className="footer-section">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3">
            <ul className="footer-list">
              <h3>Scarless Surgery</h3>
              <li><a href="#">Gallbladder Removal</a></li>
              <li><a href="#">Appendix Removal</a></li>
              <li><a href="#">Hernia Repair</a></li>
              <li><a href="#">Fundoplication</a></li>
              <li><a href="#">Bariatric Surgeries</a></li>
              <li><a href="#">Colorectal Surgeries</a></li>
              <li><a href="#">Small Bowel Surgery</a></li>
              <li><a href="#">Liver Surgery</a></li>
              <li><a href="#">Pancreatic Surgery</a></li>
              <li><a href="#">Spleen Removal</a></li>
              <li><a href="#">Adrenal Gland Removal</a></li>
              <li><a href="#">Nephrectomy</a></li>
              <li><a href="#">Urological Procedures</a></li>
              <li><a href="#">Gynecological Surgeries</a></li>
              <li><a href="#">Oncological Surgeries</a></li>
              <li><a href="#">Thoracic Surgeries</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <ul className="footer-list">
              <h3>Bariatric / Metabolic Surgery</h3>
              <li><a href="#">Sleeve Gastrectomy</a></li>
              <li><a href="#">Roux-en-Y Gastric Bypass</a></li>
              <li><a href="#">One Anastomosis Gastric Bypass</a></li>
              <li><a href="#">Lap Band Surgery</a></li>
              <li><a href="#">Biliopancreatic Diversion with</a></li>
              <li><a href="#">Duodenal Switch (BPD/DS)</a></li>
              <li><a href="#">Revision Bariatric Surgery</a></li>
              <li><a href="#">Intragastric Balloon</a></li>
              <li><a href="#">Endoscopic Sleeve Gastroplasty – ESG</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <ul className="footer-list">
              <h3>Surgical Gastroentrology</h3>
              <li><a href="#">Upper GI Surgeries</a></li>
              <li><a href="#">Esophagectomy</a></li>
              <li><a href="#">GERD / Acid reflux surgery</a></li>
              <li><a href="#">Total Gastrectomy</a></li>
              <li><a href="#">Heller’s Myotomy</a></li>

              <li style={{ fontWeight: "bold", textTransform: "uppercase", color: "white" }}>
                Hepato-Pancreato-Biliary (HPB)
              </li>

              <li><a href="#">Hepatectomy</a></li>
              <li><a href="#">Liver Cyst Removal</a></li>
              <li><a href="#">Cholecystectomy</a></li>
              <li><a href="#">Choledochal Cyst Excision</a></li>
              <li><a href="#">Biliary Reconstruction</a></li>
              <li><a href="#">Whipple’s Procedure</a></li>
              <li><a href="#">Distal Pancreatectomy Cystogastrostomy</a></li>
              <li><a href="#">Splenectomy</a></li>

              <li><a href="#">Colorectal Surgeries</a></li>
              <li><a href="#">Colectomy</a></li>
              <li><a href="#">Low Anterior Resection</a></li>
              <li><a href="#">Abdominoperineal Resection</a></li>
              <li><a href="#">Rectopexy</a></li>
              <li><a href="#">Ulcerative Colitis</a></li>
              <li><a href="#">Crohn’s Disease</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <ul className="footer-list">
              <h3>Surgical Gastroentrology</h3>
              <li><a href="#">Upper GI Surgeries</a></li>
              <li><a href="#">Esophagectomy</a></li>
              <li><a href="#">GERD / Acid reflux surgery</a></li>
              <li><a href="#">Total Gastrectomy</a></li>
              <li><a href="#">Heller’s Myotomy</a></li>

              <li style={{ fontWeight: "bold", textTransform: "uppercase", color: "white" }}>
                Hepato-Pancreato-Biliary (HPB)
              </li>

              <li><a href="#">Hepatectomy</a></li>
              <li><a href="#">Liver Cyst Removal</a></li>
              <li><a href="#">Cholecystectomy</a></li>
              <li><a href="#">Choledochal Cyst Excision</a></li>
              <li><a href="#">Biliary Reconstruction</a></li>
              <li><a href="#">Whipple’s Procedure</a></li>
              <li><a href="#">Distal Pancreatectomy Cystogastrostomy</a></li>
              <li><a href="#">Splenectomy</a></li>

              <li><a href="#">Colorectal Surgeries</a></li>
              <li><a href="#">Colectomy</a></li>
              <li><a href="#">Low Anterior Resection</a></li>
              <li><a href="#">Abdominoperineal Resection</a></li>
              <li><a href="#">Rectopexy</a></li>
              <li><a href="#">Ulcerative Colitis</a></li>
              <li><a href="#">Crohn’s Disease</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-4">
          <p className="copyright">
            Copyright © 2025 Lifeline Multi Speciality Hospitals Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
