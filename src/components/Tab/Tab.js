import React, { useState } from "react";
import "./Tab.css";
import Card from "../Card/Card";

function TabBig(props) {
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
          <Card
            title="Oil"
            imageUrl="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price={35}
          />
          <Card
            title="Onion"
            imageUrl="https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price={65}
          />
          <Card
            title="Cola"
            imageUrl="https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            price={15}
          />
          <Card
            title="Soap"
            imageUrl="https://images.unsplash.com/photo-1558616180-d76238959a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price={50}
          />
          <Card
            title="Medicine"
            imageUrl="https://images.unsplash.com/photo-1565071783280-719b01b29912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price={90}
          />
          <Card
            title="Blueberry"
            imageUrl="https://images.unsplash.com/photo-1501879297843-b73e7b09c6eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            price={20}
          />
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
