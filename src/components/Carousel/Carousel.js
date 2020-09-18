import React, { useState } from "react";
import data from "../../data/data";
import "./Carousel.css";

function Carousel() {
  const [slide, setSlide] = useState(0);

  function createImage(dt) {
    return (
      <div key={dt.index} className="mySlides fade">
        <img src={dt.image} alt="pic" />
      </div>
    );
  }

  function changeSlides(num) {
    setSlide(slide + num);
  }

  // function showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   // var dots = document.getElementsByClassName("dot");
  //   if (n > data.length) {
  //     setSlide(0);
  //   }
  //   if (n < 1) {
  //     setSlide(data.length);
  //   }

  //   for (i = 0; i < data.length; i++) {
  //     // slides[i].style.display = "none";
  //   }
  //   // for (i = 0; i < dots.length; i++) {
  //   //     dots[i].className = dots[i].className.replace(" active", "");
  //   // }
  //   // slides[slide - 1].style.display = "block";
  //   // dots[slide-1].className += " active";
  // }

  return (
    <div className="slideshow-container">
      <span className="prev" onClick={() => changeSlides(-1)}>
        &#10094;
      </span>
      {data.map((dt) => createImage(dt))}
      <span className="next" onClick={() => changeSlides(1)}>
        &#10095;
      </span>
      {/* {showSlides()} */}
    </div>
  );
}

export default Carousel;
