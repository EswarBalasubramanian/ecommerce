import React, { useState } from "react";
import "./Tab.css";
import Card from "../Card/Card";

function Tab(props) {
  const { size, tabHeadings, cardsContents } = props;
  const [tabNo, setTabNo] = useState(0);

  function openTab(index) {
    setTabNo(index);
  }

  return (
    <div className={size}>
      <div className="tab">
        {tabHeadings.map((heading, index) => {
          return (
            <button
              key={index}
              className={tabNo === index ? "tablinks active" : "tablinks"}
              onClick={() => openTab(index)}
            >
              {heading}
            </button>
          );
        })}
      </div>
      {cardsContents.map((cardsContent, index) => {
        return (
          <div className={tabNo === index ? "tabcontent active" : "tabcontent"}>
            <div className="content-container">
              {cardsContent.map((cardContent, index) => {
                return (
                  <Card
                    key={index}
                    title={cardContent.title}
                    imageUrl={cardContent.imageUrl}
                    price={cardContent.price}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tab;
