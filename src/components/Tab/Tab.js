import React, { useState } from "react";
import "./Tab.scss";
// import Card from "../Card/Card";

function Tabs(props) {
  const [selected, setSelected] = useState(props.selected || 0);

  function handleChange(index) {
    setSelected(index);
  }

  return (
    <div className="tab-container-big">
      <ul className="inline">
        {props.children.map((elem, index) => {
          let style = index === selected ? "selected" : "";
          return (
            <li
              className={style}
              key={index}
              onClick={handleChange.bind(this, index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div className="tab">{props.children[selected]}</div>
    </div>
  );
}

function Panel(props) {
  return <div>{props.children}</div>;
}

function Tab() {
  return (
    <Tabs selected={0}>
      <Panel title="Best Seller">
        {/* <Card imageUrl="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" /> */}
      </Panel>
      <Panel title="Popular">This is the second panel</Panel>
      <Panel title="Based on your search">This is the third panel</Panel>
    </Tabs>
  );
}

export default Tab;
