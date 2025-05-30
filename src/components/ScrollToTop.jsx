import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="return-to-top"
      className={`circle ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#00b9b9',
        width: '50px',
        height: '50px',
        display: isVisible ? 'block' : 'none',
        textDecoration: 'none',
        borderRadius: '35px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        zIndex: 1000
      }}
    >
      <i className="fa fa-chevron-up" style={{
        color: '#fff',
        margin: '0',
        position: 'relative',
        left: '16px',
        top: '13px',
        fontSize: '19px'
      }}></i>
    </div>
  );
};

export default ScrollToTop;
