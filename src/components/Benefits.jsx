import React from 'react';
import protects from '../assets/images/protects.jpg';
import doImg from '../assets/images/do.jpg';
import be from '../assets/images/be.jpg';
import travel1 from '../assets/images/travel-1.jpg';
import '../assets/css/styles.css';

const Benefits = () => (
  <section className="benefits section-space">
    <div className="row no-gutters">
      <div className="col-md-3 col-sm-6 no-gutters">
        <div className="thumbnail">
          <div className="caption-img"><img src={protects} alt="Protect your loved ones" /></div>
          <div className="caption">
            <div className="desc">
              <p><span>Protect</span>your loved ones</p>
            </div>
          </div>
          <div className="img-overlay"></div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 no-gutters">
        <div className="thumbnail">
          <div className="caption-img"><img src={doImg} alt="Do safe business" /></div>
          <div className="caption">
            <div className="desc">
              <p><span>Do</span>safe business</p>
            </div>
          </div>
          <div className="img-overlay"></div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 no-gutters">
        <div className="thumbnail">
          <div className="caption-img"><img src={be} alt="Be connected always" /></div>
          <div className="caption">
            <div className="desc">
              <p><span>Be</span>connected always</p>
            </div>
          </div>
          <div className="img-overlay"></div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 no-gutters">
        <div className="thumbnail">
          <div className="caption-img"><img src={travel1} alt="Travel without fear" /></div>
          <div className="caption">
            <div className="desc">
              <p><span>Travel</span>without fear</p>
            </div>
          </div>
          <div className="img-overlay"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Benefits;
