import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard/index";
import Coach from "./pages/Dashboard/Coach";
import Health from "./pages/Dashboard/Health";
import Settings from "./pages/Dashboard/Settings";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/health" element={<Health />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
