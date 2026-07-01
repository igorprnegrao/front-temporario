import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Features from './components/home/Features';
import Prices from './components/home/Prices';
import Footer from './components/Footer';
import Terms from './components/pages/Terms';
import Lgpd from './components/pages/Lgpd';
import Cookies from './components/pages/Cookies';
import Cadastro from './components/pages/Cadastro';
import Login from './components/pages/Login';

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

        <Route path="/lgpd-notification" element={
          <>
            <Header />
            <Lgpd />
            <Footer />
          </>
        } 
        />

        <Route path="/cookies-policy" element={
          <>
            <Header />
            <Cookies />
            <Footer />
          </>
        }
        />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
              
