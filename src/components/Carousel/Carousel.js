import React from "react";
import "./Carousel.scss";
import _items from "../../data/data";

const CarouselSlideItem = ({ item }) => (
  <li className="carousel__slide-item" style={item.styles}>
    <a href=" " className="carousel__slide-item-img-link">
      <img src={item.player.image} alt="pic" />
    </a>
    <div className="carousel-slide-item__body">
      {/* <h4>{item.player.title}</h4> */}
      <p>{item.player.desc}</p>
    </div>
  </li>
);

const cycle = ["0", "30rem", "60rem", "90rem", "120rem"];

const Carousel = () => {
  const [items, setItems] = React.useState(_items);
  const [step, setStep] = React.useState(0);
  const [isTicking, setIsTicking] = React.useState(false);

  const handleLeftClick = () => {
    if (!isTicking) {
      setIsTicking(true);
      setStep((prev) => (prev + 1 + items.length) % 5);
      setItems((items) =>
        items.map((item, i) => {
          const xPos = (i + step + 1) % 5;
          return {
            ...item,
            styles: {
              transform: `translateX(${cycle[xPos]})`,
              opacity: xPos === 0 || xPos === 4 ? 0 : 1,
              filter: xPos === 1 || xPos === 3 ? 'grayscale(1)' : 'initial', //prettier-ignore
            },
          };
        })
      );
    }
  };

  const handleRightClick = () => {
    if (!isTicking) {
      setIsTicking(true);
      setStep((prev) => (prev - 1 + items.length) % 5);
      setItems((items) =>
        items.map((item, i) => {
          const xPos = (i + step + items.length - 1) % 5;
          return {
            ...item,
            styles: {
              transform: `translateX(${cycle[xPos]})`,
              opacity: xPos === 0 || xPos === 4 ? 0 : 1,
              filter: xPos === 1 || xPos === 3 ? 'grayscale(1)' : 'initial', // prettier-ignore
            },
          };
        })
      );
    }
  };

  React.useEffect(() => {
    if (isTicking) {
      setTimeout(() => {
        setIsTicking(false);
        // dfDae
      }, 300);
    }
  }, [isTicking]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={handleLeftClick}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((item, i) => (
              <CarouselSlideItem key={i} item={item} />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={handleRightClick}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        {/* <div className="carousel__dots">
          {items
            .map((_, i) => (
              <button key={i} className={step === i ? "dot active" : "dot"} />
            ))
            .reverse()}
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
