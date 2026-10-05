import { Component, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "./App.css";
import { UIProvider } from "./context/ui";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import ReservationModal from "./components/ReservationModal";
import Home from "./pages/Home";
import DenneMenu from "./pages/DenneMenu";
import Menu from "./pages/Menu";
import Eventy from "./pages/Eventy";
import ONas from "./pages/ONas";
import Galeria from "./pages/Galeria";
import Kontakt from "./pages/Kontakt";
import Prehled from "./pages/Prehled";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        if (window.__lenis) window.__lenis.scrollTo(el, { offset: -100 });
        else el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { err: false };
  }
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    if (this.state.err)
      return (
        <div className="flex min-h-screen items-center justify-center bg-smotana p-8 text-center">
          <div>
            <p className="font-serif text-3xl text-leska-ink">Niečo sa v peci pripálilo</p>
            <p className="mt-2 text-sm text-leska-ink/60">Načítajte stránku znova, prosím.</p>
          </div>
        </div>
      );
    return this.props.children;
  }
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ErrorBoundary>
      <UIProvider>
        <BrowserRouter>
          <ScrollManager />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/denne-menu" element={<DenneMenu />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/eventy-a-svadby" element={<Eventy />} />
              <Route path="/o-nas" element={<ONas />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/prehled" element={<Prehled />} />
            </Routes>
          </main>
          <Footer />
          <MobileBar />
          <ReservationModal />
          <div className="grain no-print" aria-hidden="true" />
        </BrowserRouter>
      </UIProvider>
    </ErrorBoundary>
  );
}
