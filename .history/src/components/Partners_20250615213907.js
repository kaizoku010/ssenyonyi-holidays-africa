import React from "react";
import "../styles/Partners.css";
import P1 from "../media/p1.png"
import P1 from "../media/p2.png"
import P3 from "../media/p3.png"
import P4 from "../media/p4.png"
import P1 from "../media/p1.png"

const Partners = () => {
const Test = "https://res.cloudinary.com/dnko3bvt0/image/upload/fl_preserve_transparency/v1748506763/test_qaobiu.jpg?_s=public-apps"

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2>TRUSTED PARTNERS</h2>
        <div className="partners-logos">
          <div className="partner-logo">
            <img className="patner-logo" src={Test} />
          </div>
          <div className="partner-logo">
            <img className="patner-logo" src={Test} />{" "}
          </div>
          <div className="partner-logo">
            <img className="patner-logo" src={Test} />{" "}
          </div>
          <div className="partner-logo">
            <img className="patner-logo" src={Test} />{" "}
          </div>
          <div className="partner-logo">
            <img className="patner-logo" src={Test} />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
