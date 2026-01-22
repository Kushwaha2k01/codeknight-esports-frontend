import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Shiptap from './component/shiptap/shiptap';
import Home from './component/home/home';
import About from './component/about/about';
import Services from './component/services/services';
import Team from './component/team/team';
import Collab from './component/collab/collab';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
import TermsAndConditions from './component/termsandconditions/TermsAndConditions';
import PrivacyPolicy from './component/privacypolicy/PrivacyPolicy';
import Career from './component/career/Career';
import ApplicationForm from './component/career/ApplicationForm';
import FAQ from './component/faq/faq';
import GameTestingPrices from './component/Gametestingprice/GameTestingPrices';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Shiptap />
              <Home />
              <About />
              <Services />
              <Team />
              <Collab />
              <Contact />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/game-testing-prices" element={<GameTestingPrices />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<ApplicationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
