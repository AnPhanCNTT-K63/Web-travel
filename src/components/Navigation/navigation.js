import Home from "../Home/Home";
import Tour from "../Tour/Tour";
import Blog from "../Blog/Blog";
import Gallery from "../Gallery/Gallery";
import Pages from "../Pages/Pages";
import Slide2 from "../Slideshow/Slide2";
import CitiesSlider from "../Slideshow/CitiesSlider";
import slides from "../Slideshow/CitiesSlider-infoList";
import { Route, Routes, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/test" element={<Slide2 />} />
      </Routes>
      {location.pathname === "/" && <CitiesSlider slides={slides} />}
    </>
  );
}

export default Navigation;
