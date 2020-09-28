import React, { useState } from "react";
import "./Card.css";
import { Button } from "../buttons";

function Card(props) {
  const imageUrl = props.imageUrl;
  //   const title = props.title;
  const price = props.price;

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className="card">
      {/* <p>{title}</p> */}

      <div class="row">
        <div class="col-1-of-2">
          <img className="card__image" src={imageUrl} alt="cardImage" />
        </div>
        <div class="col-1-of-2">
          <div className="card-content">
            <div className="card__text">MRP: ₹{price}</div>
            <label>Quantity</label>
            <div class="number">
              <Button onClick={decrement}>-</Button>
              <input type="text" value={count} />
              <Button onClick={increment}>+</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
