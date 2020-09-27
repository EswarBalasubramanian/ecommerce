import React, { useState } from "react";
import "./Tab.scss";

function Tabs(props) {
  const [selected, setSelected] = useState(props.selected || 0);

  function handleChange(index) {
    setSelected(index);
  }

  return (
    <div>
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
      <Panel title="first">This is the first panel</Panel>
      <Panel title="second">This is the second panel</Panel>
      <Panel title="third">This is the third panel</Panel>
    </Tabs>
  );
}

export default Tab;
