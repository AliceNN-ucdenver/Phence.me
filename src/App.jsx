
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
import ScrollToTop from './components/ScrollToTop';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/responsive.css';
import './assets/css/banner-styles.css';
import './assets/css/styles.css';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Features />
      <Benefits />
      <UseCases />
      <DataSecurity />
      <Team />
      <AppDownload />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
