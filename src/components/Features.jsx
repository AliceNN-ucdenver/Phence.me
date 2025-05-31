
import React, { useState } from 'react';
import img1 from '../assets/images/01.jpg';
import img2 from '../assets/images/02.jpg';
import img3 from '../assets/images/03.jpg';
import img4 from '../assets/images/04.jpg';
import img5 from '../assets/images/05.jpg';
import img6 from '../assets/images/06.jpg';
import '../assets/css/styles.css';

const features = [
  {
    id: 1,
    iconClass: 'f1',
    title: 'Get notified when your loved ones need you',
    img: img1,
  },
  {
    id: 2,
    iconClass: 'f2',
    title: 'Privately track location data',
    img: img2,
  },
  {
    id: 3,
    iconClass: 'f3',
    title: 'Keep your contacts aware of your status',
    img: img3,
  },
  {
    id: 4,
    iconClass: 'f4',
    title: 'Stay connected to your loved ones in healthcare facilities',
    img: img4,
  },
  {
    id: 5,
    iconClass: 'f5',
    title: 'Keep update of any crime activity in your area',
    img: img5,
  },
  {
    id: 6,
    iconClass: 'f6',
    title: 'Store photos and other media on our secured servers',
    img: img6,
  },
  {
    id: 7,
    iconClass: 'f7',
    title: 'All in one secure customer communication',
    img: img3, // Using img3 as placeholder for communication
  },
];

const Features = () => {
  const [active, setActive] = useState(3); // 4th feature is default (index 3)

  return (
    <section className="section-space features gray">
      <div id="apps" className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="apps-holder">
              <div className="apps-links-holder col-lg-8 col-md-8 col-sm-7 col-xs-12">
                <h2 className="section-heading">Phence.me features</h2>
                {features.map((f, idx) => (
                  <div
                    key={f.id}
                    className={`app-icon-holder app-icon-holder${f.id} ${active === idx ? 'opened' : ''}`}
                    data-id={f.id}
                    onMouseOver={() => setActive(idx)}
                    onClick={() => setActive(idx)}
                    tabIndex={0}
                    role="button"
                    aria-label={f.title}
                  >
                    <i className={`icon ${f.iconClass} app-icon`}></i>
                    <span className="app-title">{f.title}</span>
                  </div>
                ))}
              </div>
              <div className="apps-details-holder col-lg-4 col-md-4 col-sm-5 col-xs-12">
                <div className="app-details">
                  {features.map((f, idx) => (
                    <div
                      key={f.id}
                      className={`app-details${f.id} app-details-item${active === idx ? ' show-details' : ''}`}
                      style={{ display: active === idx ? 'block' : 'none' }}
                    >
                      <div className="app-text">
                        <img src={f.img} alt={f.title} />
                        <div className="image-overlay">
                          <h4>Protect your loved ones</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
