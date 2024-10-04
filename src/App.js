import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
