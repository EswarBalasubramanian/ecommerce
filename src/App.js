import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Tab from "./components/Tab/Tab";
import _cardsContents, { BigTabHeadings, SmallTabHeadings } from "./data/data";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <section className="tab__wrapper">
        <Tab
          size="tab--big"
          tabHeadings={BigTabHeadings}
          cardsContents={_cardsContents}
        />
        <Tab
          size="tab--small"
          tabHeadings={SmallTabHeadings}
          cardsContents={_cardsContents}
        />
      </section>
    </div>
  );
}

export default App;
