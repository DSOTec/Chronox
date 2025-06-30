import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard/index";
import Coach from "./pages/Dashboard/Coach";
import Specialist from "./pages/Dashboard/Specialist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="specialist" element={<Specialist />} />
      </Routes>
    </Router>
  );
}

export default App;
