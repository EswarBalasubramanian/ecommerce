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
      <img src={imageUrl} alt="cardImage" />
      {/* <p>{title}</p> */}
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
  );
}

export default Card;

{
  /* <Card
          imageUrl="https://picsum.photos/300/200"
          title="Book"
          price="399"
        />
        <Card
          imageUrl="https://picsum.photos/300/200"
          title="Mobile"
          price="459"
        />
        <Card
          imageUrl="https://picsum.photos/300/200"
          title="Speaker"
          price="1599"
        />
        <Card
          imageUrl="https://picsum.photos/300/200"
          title="Vase"
          price="599"
        /> */
}
