import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ForFirms from "./pages/ForFirms";
import Waitlist from "./pages/Waitlist";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import BrowseProjects from "./pages/BrowseProjects";
import Login from "./pages/Login";
import FirmSignup from "./pages/FirmSignup";
import FirmLogin from "./pages/FirmLogin";

/**
 * Root application component.
 *
 * Owns the client-side router and maps URL paths to top-level pages.
 * Currently serves only the landing page at `/`; additional pages
 * (browse projects, dashboards, auth, etc.) get their own `<Route>`
 * entries here as they're built.
 *
 * `ScrollToTop` is mounted once here so every route — current and
 * future — resets scroll position on navigation automatically.
 */

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-firms" element={<ForFirms />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/firm-signup" element={<FirmSignup />} />
        <Route path="/firm-login" element={<FirmLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
