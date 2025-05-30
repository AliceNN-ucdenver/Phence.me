import React from 'react';
import googlePlay from '../assets/images/google-play.png';
import appStore from '../assets/images/app-store.png';
import '../assets/css/styles.css';

const AppDownload = () => (
  <section className="section-space appdownload">
    <div className="container">
      <div className="row">
        <div className="col-md-12 center">
          <h2 className="section-heading">Join Now</h2>
          <p>Download Phence.me to protect yourself & your family</p>
          <div className="pt-30">
            <div className="download-buttons-join" style={{display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center'}}>
              <a href="https://play.google.com/store/apps/details?id=com.rus.phencedapp">
                <img src={googlePlay} alt="Google Play" style={{height: '60px', width: 'auto'}} />
              </a>
              <a href="https://itunes.apple.com/us/app/phenced-2-0/id1238316004?mt=8">
                <img src={appStore} alt="App Store" style={{height: '60px', width: 'auto'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppDownload;
