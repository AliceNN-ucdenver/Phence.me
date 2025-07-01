
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Features from './components/Features';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import DataSecurity from './components/DataSecurity';
import Team from './components/Team';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/responsive.css';
import './assets/css/banner-styles.css';
import './assets/css/styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Services />
            <Features />
            <Benefits />
            <UseCases />
            <DataSecurity />
            <Team />
            <AppDownload />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
