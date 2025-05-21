import React from 'react';
import Test from "../media/test.png"
import '../styles/Partners.css';

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2>TRUSTED PARTNERS</h2>
        <div className="partners-logos">
          <div className="partner-logo">
<img className='patner-logo' src={Test}/>
          </div>
          <div className="partner-logo">
<img className='patner-logo' src={Test}/>          </div>
          <div className="partner-logo">
<img className='patner-logo' src={Test}/>          </div>
          <div className="partner-logo">
<img className='patner-logo' src={Test}/>          </div>
          <div className="partner-logo">
<img className='patner-logo' src={Test}/>          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
