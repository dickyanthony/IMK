import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import IMK from "./screens/IMK";
import About from "./screens/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screens/IMK" element={<IMK />} />
        <Route path="/screens/About" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
