import React, { useState } from "react";
import "./Card.css";
import "./card_input.css";
// import { Button } from "../buttons";

function Card(props) {
  const { title, imageUrl, price } = props;

  const [count, setCount] = useState(0);
  const [isFav, setFav] = useState(false);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  function handleFav() {
    setFav(!isFav);
  }

  return (
    <div class="product-card">
      <div class="product-header">
        <img src={imageUrl} alt="product" />
      </div>
      <button
        className={isFav ? "fav btn-active" : "fav btn-norm"}
        onClick={handleFav}
      >
        &#10084;
      </button>
      <div class="product-info">
        <h3>{title}</h3>
        <h4>
          ₹{price}{" "}
          <small>
            <small>
              <strike>₹{price + 5}</strike>
            </small>
          </small>
        </h4>
      </div>
      <div className="card__input">
        <div class="quantity-control">
          <button class="quantity-btn" onClick={decrement}>
            -
          </button>
          <input type="number" class="quantity-input" value={count} />
          <button class="quantity-btn" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
