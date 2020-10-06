import React, { useState } from "react";
import "./Slider.css";

function Slider() {
  const [sliderNo, setSliderNo] = useState(1);

  function handlePrevClick() {
    if (sliderNo > 1) setSliderNo(sliderNo - 1);
    else setSliderNo(3);
  }

  function handleNextClick() {
    if (sliderNo < 3) setSliderNo(sliderNo + 1);
    else setSliderNo(1);
  }

  React.useEffect(() => {
    const scrollInterval = setTimeout(() => {
      handleNextClick();
    }, 5000);
    return () => clearTimeout(scrollInterval);
  });

  return (
    <section>
      <div className="slider">
        <div
          className={sliderNo === 1 ? "slide current" : "slide"}
          style={{
            background: `url(https://images.unsplash.com/photo-1553546895-531931aa1aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80) no-repeat center top/cover`,
          }}
        >
          <div className="content">
            <h1>Slide One</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              veniam molestiae dolore asperiores beatae placeat.
            </p>
          </div>
        </div>
        <div
          className={sliderNo === 2 ? "slide current" : "slide"}
          style={{
            background: `url(https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) no-repeat center top/cover`,
          }}
        >
          <div className="content">
            <h1>Slide Two</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              veniam molestiae dolore asperiores beatae placeat.
            </p>
          </div>
        </div>
        <div
          className={sliderNo === 3 ? "slide current" : "slide"}
          style={{
            background: `url(https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) no-repeat center top/cover`,
          }}
        >
          <div className="content">
            <h1>Slide Three</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              veniam molestiae dolore asperiores beatae placeat.
            </p>
          </div>
        </div>
        <div className="buttons">
          <button className="prev" onClick={handlePrevClick}>
            &#8592;
          </button>
          <button className="next" onClick={handleNextClick}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
