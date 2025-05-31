
import React, { useState, useRef, useEffect } from 'react';
import travel from '../assets/images/travel.jpg';
import business from '../assets/images/business.jpg';
import family from '../assets/images/family.jpg';
import health from '../assets/images/health.jpg';
import dating from '../assets/images/dating.jpg';
import realEstate from '../assets/images/real-estate.jpg';
import university from '../assets/images/university.jpg';
import '../assets/css/styles.css';

const useCases = [
  { id: 'travel', title: 'Travel', img: travel, desc: "The world can be a dangerous place, but it doesn't have to stop you from exploring the world around you. Phenced understands that life is all about taking chances, trying new things, and making memories! So, whether you’re heading out on a day trip or backpacking around the world for a year, we've got you covered." },
  { id: 'business', title: 'Business', img: business, desc: 'Imagine a world where you can easily document handshake deals, capture any compliance and regulatory events, meeting notes in a secure way. In every business transaction there is a risk in verbal commitments to a transaction - ensure those deals and other important aspects of the meetings are captured (and legally binding).' },
  { id: 'family', title: 'Family', img: family, desc: 'Whether it’s an early morning run or walking home after dark, we’ve all experienced that uneasy feeling of looking over our shoulder. Phenced provides reassurance for life’s everyday situations and much needed help if an emergency arises.' },
  { id: 'healthcare', title: 'Healthcare', img: health, desc: 'Let Phenced worry about securely storing your therapy sessions, one-on-ones, and other important meetings. You can count on the security and tamper-proof technology in Phenced through its Court admissible patent approach and have peace of mind allowing you to focus on what is important - your patients.' },
  { id: 'dating', title: 'Dating', img: dating, desc: 'I love going out on blind dates, said no one ever. Let’s face it, dating can be a nightmare under the best of circumstances. And with most of us meeting online, safety has become an even bigger concern. So, before you leave the virtual world and go live, make sure you’re Phenced.' },
  { id: 'realestate', title: 'Real Estate', img: realEstate, desc: 'The real estate business puts more buyers and sellers in one-on-one situations with strangers, often in private or secluded locations. As a real estate agent, you’re constantly showing homes and properties to people you don’t know. Phenced offers a meaningful way to ensure your safety, while still doing what you love!' },
  { id: 'university', title: 'University', img: university, desc: 'Sending you off to college was perhaps the scariest moment in your parent’s life and quite possibly the happiest in yours. We get it, college offers freedom, amazing firsts, tailgating and so much more. Let Phenced reassure the parentals’ about your safety, while giving you the freedom to experience all that college has to offer!' },
];

const UseCases = () => {
  const [active, setActive] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleClick = (idx) => {
    setActive(idx);
    
    // Only scroll horizontally on desktop, not mobile
    if (window.innerWidth > 767 && scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`#img${idx + 1}`);
      if (activeElement) {
        const containerRect = scrollContainerRef.current.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        const scrollLeft = activeElement.offsetLeft - (containerRect.width / 2) + (elementRect.width / 2);
        
        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  // Auto-slide timer effect (disabled on mobile)
  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 767;
    
    if (checkMobile()) {
      return; // Don't auto-scroll on mobile since we're stacking vertically
    }
    
    const timer = setInterval(() => {
      setActive((prevActive) => {
        const nextActive = (prevActive + 1) % useCases.length;
        
        // Auto-scroll to the next item horizontally only on desktop
        setTimeout(() => {
          if (scrollContainerRef.current && !checkMobile()) {
            const activeElement = scrollContainerRef.current.querySelector(`#img${nextActive + 1}`);
            if (activeElement) {
              const containerRect = scrollContainerRef.current.getBoundingClientRect();
              const elementRect = activeElement.getBoundingClientRect();
              const scrollLeft = activeElement.offsetLeft - (containerRect.width / 2) + (elementRect.width / 2);
              
              scrollContainerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
              });
            }
          }
        }, 100);
        
        return nextActive;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-space area center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 center mb-50">
            <h2 className="section-heading">Whatever you do, Wherever you go, be safe and get peace of mind</h2>
          </div>
        </div>
        <div className="row areaicon">
          {useCases.map((uc, idx) => (
            <div key={uc.id} className="use-case-icon-wrapper">
              <div
                id={uc.id}
                className={`ib${active === idx ? ' activeicon' : ''}`}
                onClick={() => handleClick(idx)}
                tabIndex={0}
                role="button"
                aria-label={uc.title}
              >
                <i className="icon"></i>
                <span>{uc.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="row no-gutters" id="sliderss">
          <div 
            ref={scrollContainerRef}
            className="content demo-x areaimg" 
            style={{ 
              height: 700, 
              overflow: 'auto', 
              paddingLeft: '11%', 
              right: 0,
              overflowX: 'scroll',
              overflowY: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            <div style={{ display: 'flex', width: 'max-content' }}>
              {useCases.map((uc, idx) => (
                <div
                  key={uc.id}
                  id={`img${idx + 1}`}
                  className={`thumbnail ${uc.id}${active === idx ? ' activeimg' : ''}`}
                  style={{ 
                    float: 'left',
                    marginRight: '20px',
                    flexShrink: 0,
                    width: '400px'
                  }}
                >
                  <div className="caption-img">
                    <img src={uc.img} alt={uc.title} style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="caption">
                    <div className="desc"><h3>{uc.title}</h3><p>{uc.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
