import React from "react";
import "./App.css";
// import Card from "./components/Card/Card";
import NavBar from "./components/Navbar/Navbar";
// import Carousel from "./components/Carousel/Carousel";
import Slider from "./components/Slider/Slider";
import Tab from "./components/Tab/Tab";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Tab />
    </div>
  );
}

export default App;
