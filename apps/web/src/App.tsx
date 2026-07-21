import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ForFirms from "./pages/ForFirms";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
