import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hone from "./components/Hone";


// Import your page components
import Home from "./components/Home";
//import About from "./pages/About";

function App() {
  return (
    <div>
   <Hone />
     {/*
    <Router>
      <Routes>
        <Route path="/" element={< />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;