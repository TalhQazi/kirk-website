import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Home from "./pages/Home";
import Institutions from "./pages/Institutions";
import Patent from "./pages/Patent";
import Privacy from "./pages/Privacy";
import Product from "./pages/Product";
import Story from "./pages/Story";
import Support from "./pages/Support";
import Terms from "./pages/Terms";

function AppShell() {
  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <>
      {showHeader ? <Header /> : null}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/story" element={<Story />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/patent" element={<Patent />} />
        </Routes>
      </main>
      <footer>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}
        >
          <div>
            <div className="muted">KIRK™ is a trademark.</div>
            <div className="muted">© 2025</div>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="/patent">Patent</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
