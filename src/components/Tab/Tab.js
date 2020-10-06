import React, { useState } from "react";
import "./Tab.css";
import Card from "../Card/Card";

class Item{
  constructor(itemCode, name, price, url){
    this.itemCode = itemCode;
    this.name = name;
    this.price = price;
    this.url = url;
  }
}

function TabBig(props) {
  const items = [
    new Item(1, "Oil", 35, "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Item(2, "Onion", 65, "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Item(3, "Cola", 15, "https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"),
    new Item(4, "Soap", 50, "https://images.unsplash.com/photo-1558616180-d76238959a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Item(5, "Medicine", 90, "https://images.unsplash.com/photo-1565071783280-719b01b29912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Item(6, "Blueberry", 20, "https://images.unsplash.com/photo-1501879297843-b73e7b09c6eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
  ]

  const tabs = [
    {index: 1, title: "Best Seller"},
    {index: 2, title: "Based on your search"},
    {index: 3, title: "You may like"}
  ]
  
  const [tabNo, setTabNo] = useState(1);

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
