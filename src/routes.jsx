import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Features from "./components/home/Features";
import Prices from "./components/home/Prices";
import Footer from "./components/Footer";
import Terms from "./components/pages/Terms";
import Lgpd from "./components/pages/Lgpd";
import Cookies from "./components/pages/Cookies";
import Cadastro from "./components/pages/Cadastro";
import Login from "./components/pages/Login";
import MenuLateral from "./components/dashboardsComponents/MenuLateral";
import Geral from "./components/dashboardsComponents/dashboardPaginas/Geral";
import AssessoresPainel from "./components/dashboardsComponents/dashboardPaginas/AssessoresPainel";

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

        <Route
          path="/lgpd-notification"
          element={
            <>
              <Header />
              <Lgpd />
              <Footer />
            </>
          }
        />

        <Route
          path="/cookies-policy"
          element={
            <>
              <Header />
              <Cookies />
              <Footer />
            </>
          }
        />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/master-users/:id/dashboard" element={<Geral />} />
        <Route
          path="/master-users/:id/dashboard/aba-assessores"
          element={<AssessoresPainel />}
        />
        <Route
          path="/menu-lateral-preview"
          element={
            <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
              <MenuLateral masterUserId="demo-123" />
              <main style={{ marginLeft: 260, padding: 40 }}>
                <h1 style={{ margin: 0, fontSize: 28 }}>
                  Preview do Menu Lateral
                </h1>
                <p style={{ color: "#64748b" }}>
                  Essa tela existe apenas para visualizar o componente no
                  navegador.
                </p>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
