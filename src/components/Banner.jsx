import React from 'react';
import bannerm from '../assets/images/bannerm.png';
import bannerBg from '../assets/images/banner.jpg';
import googlePlay from '../assets/images/google-play.png';
import appStore from '../assets/images/app-store.png';
import '../assets/css/styles.css';

const Banner = () => (
  <section className="banner banner-section" style={{
    background: `url(${bannerBg}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }}>
    <div className="container">
      <div className="row bannertext">
        <div className="col-lg-3 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-0 col-xs-12 zi-9">
          <img src={bannerm} alt="Banner" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12 zi-9 pl-40">
          <h1>Enabling a world where people care for and protect each other</h1>
          <p>If protection, privacy and the security of loved ones matter to you, then meet Phenced.</p>
          <div className="pt-40" style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
            <a href="https://play.google.com/store/apps/details?id=com.rus.phencedapp" style={{display: 'inline-block'}}>
              <img src={googlePlay} alt="Google Play" style={{height: '60px', width: 'auto'}} />
            </a>
            <a href="https://itunes.apple.com/us/app/phenced-2-0/id1238316004?mt=8" style={{display: 'inline-block'}}>
              <img src={appStore} alt="App Store" style={{height: '60px', width: 'auto'}} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-overlay"></div>
  </section>
);

export default Banner;
