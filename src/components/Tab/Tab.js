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

  function openTab(index) {
    setTabNo(index);
  }

  return (
    <div className="tab--big">
      <div className="tab">
        <button
          className={tabNo === 1 ? "tablinks active" : "tablinks"}
          onClick={() => openTab(1)}
        >
          Best Seller
        </button>
        <button
          className={tabNo === 2 ? "tablinks active" : "tablinks"}
          onClick={() => openTab(2)}
        >
          Based on your search
        </button>
        <button
          className={tabNo === 3 ? "tablinks active" : "tablinks"}
          onClick={() => openTab(3)}
        >
          You may like
        </button>
      </div>
      <div className={tabNo === 1 ? "tabcontent active" : "tabcontent"}>
        <div className="content-container">
          {items.map((item, index)=>{
              return <Card 
                title={item.name}
                imageUrl={item.url}
                price={item.price}
                key={index}
              />
            })
          }
        </div>
      </div>

      <div className={tabNo === 2 ? "tabcontent active" : "tabcontent"}>
        {/* <h3>Paris</h3> */}
        <p>
          This deal is currently unavailable, but you can find more great deals
          soon.
        </p>
      </div>

      <div className={tabNo === 3 ? "tabcontent active" : "tabcontent"}>
        {/* <h3>Tokyo</h3> */}
        <p>
          This deal is currently unavailable, but you can find more great deals
          soon.
        </p>
      </div>
    </div>
  );
}

function TabSmall() {
  const [tabNo, setTabNo] = useState(1);

  function openTab(index) {
    setTabNo(index);
  }

  return (
    <div className="tab--small">
      <div className="tab">
        <button
          className={tabNo === 1 ? "tablinks active" : "tablinks"}
          onClick={() => openTab(1)}
        >
          Best Deals
        </button>
        {/* <button
          className={tabNo === 2 ? "tablinks active" : "tablinks"}
          onClick={() => openTab(2)}
        >
          Paris
        </button>
        <button
          className={tabNo === 3 ? "tablinks active" : "tablinks"}
          onClick={() => openTab(3)}
        >
          Tokyo
        </button> */}
      </div>

      <div className={tabNo === 1 ? "tabcontent active" : "tabcontent"}>
        {/* <h3>London</h3> */}
        <p>
          This deal is currently unavailable, but you can find more great deals
          soon.
        </p>
      </div>

      <div className={tabNo === 2 ? "tabcontent active" : "tabcontent"}>
        {/* <h3>Paris</h3> */}
        <p>
          This deal is currently unavailable, but you can find more great deals
          soon.
        </p>
      </div>

      <div className={tabNo === 3 ? "tabcontent active" : "tabcontent"}>
        {/* <h3>Tokyo</h3> */}
        <p>
          This deal is currently unavailable, but you can find more great deals
          soon.
        </p>
      </div>
    </div>
  );
}

export { TabBig };

export { TabSmall };
