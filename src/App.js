import React from "react";
import CitiesSlider from "./components/Slideshow/CitiesSlider";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Tour from "./components/Tour/Tour";
import Blog from "./components/Blog/Blog";
import Gallery from "./components/Gallery/Gallery";
import Pages from "./components/Pages/Pages";
import Slide2 from "./components/Slideshow/Slide2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const slides = [
    {
      city: "Paris",
      country: "France",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg",
    },
    {
      city: "Singapore",
      country: "Singapore",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg",
    },
    {
      city: "Prague",
      country: "Czech Republic",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg",
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg",
    },
    {
      city: "Moscow",
      country: "Russia",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg",
    },
  ];

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/test" element={<Slide2 />} />
        </Routes>
      </Router>
      <CitiesSlider slides={slides} />
    </div>
  );
}

export default App;
