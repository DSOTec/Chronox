import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard/index";
import Coach from "./pages/Dashboard/Coach";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coach" element={<Coach />} />
      </Routes>
    </Router>
  );
}

export default App;
