import React from 'react';
import '../assets/css/styles.css';

const Services = () => (
  <section className="service section-space center">
    <div className="container">
      <ul className="servicelist clearfix">
        <li className="col-md-4 col-sm-4 center">
          <i className="icon protect"></i>
          <h3>Protect</h3>
          <p>Protect yourself and your loved ones by knowing about their whereabouts</p>
        </li>
        <li className="col-md-4 col-sm-4 center">
          <i className="icon assist"></i>
          <h3>Assist</h3>
          <p>Assist in facilitating law enforcement and emergency situations</p>
        </li>
        <li className="col-md-4 col-sm-4 center">
          <i className="icon witness"></i>
          <h3>Witness</h3>
          <p>Document all aspects of an accident or crime scene and share them on cloud</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Services;
