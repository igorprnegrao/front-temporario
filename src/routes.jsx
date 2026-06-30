import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Features from './components/home/Features';
import Prices from './components/home/Prices';
import Footer from './components/Footer';
import Terms from './components/pages/Terms';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Features />
              <Prices />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <>
              <Header />
              <Terms />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
              
