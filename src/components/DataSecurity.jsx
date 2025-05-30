import React from 'react';
import nonDestructible from '../assets/svg/Non-Destructible-Data.svg';
import courtAdmissible from '../assets/svg/Court-Admissible-Data.svg';
import '../assets/css/styles.css';

const DataSecurity = () => (
  <section className="section-space data-sec pt-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12 center">
          <h2 className="section-heading mb-40">Take comfort in knowing your data is secure</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-md-offset-1 col-sm-8 col-sm-offset-0">
          <h2 className="fz-24">Non Destructible Data</h2>
          <p>Phenced data is streamed live to our servers where your data is secure. Under Phenced protocols, once captured, the data cannot be erased or edited in any way. Offenders cannot affect your data by destroying your phone or coercing you to get rid of your session data. Once on the Phenced servers, the data cannot be impacted or manipulated in any way by outside forces.</p>
        </div>
        <div className="col-md-3 col-sm-4 center">
          <img src={nonDestructible} alt="Non Destructible Data" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="bottomline"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-md-offset-1 col-sm-8 col-sm-offset-0">
          <h2 className="fz-24">Court Admissible Data</h2>
          <p>Phenced protocols were designed to store all data in a manner that adheres to the federal statutes for court admissibility via its patent pending process which maintains the chain of custody of your session data. This process was designed to assure the court that the data is intact and has not been edited or altered in any fashion.</p>
        </div>
        <div className="col-md-3 col-sm-4 center">
          <img src={courtAdmissible} alt="Court Admissible Data" />
        </div>
      </div>
    </div>
  </section>
);

export default DataSecurity;
