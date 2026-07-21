import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

/**
 * Root application component.
 *
 * Owns the client-side router and maps URL paths to top-level pages.
 * Currently serves only the landing page at `/`; additional pages
 * (browse projects, dashboards, auth, etc.) get their own `<Route>`
 * entries here as they're built.
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
