import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import { TabBig, TabSmall } from "./components/Tab/Tab";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <section className="tab__wrapper">
        <TabBig />
        <TabSmall />
      </section>
    </div>
  );
}

export default App;
