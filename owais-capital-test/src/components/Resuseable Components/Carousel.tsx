import React, { useState } from "react";
import MainPic from "../../assets/Logos/MainPicture.png";

const Carousel = () => {
  const [img, setImg] = useState([true, false, false]);
  return (
    <div id="carouselExampleIndicators" className="carousel slide -mt-[116px]">
      <div className="carousel-indicators">
        <div
          className={`w-[35px] h-[35px] mx-[5px] rounded-full border-[2px] border-white  ${
            img[0] ? "bg-white" : "bg-transparent"
          }`}
          onClick={() => setImg([true, false, false])}
        >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active bg-transparent"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
        </div>
        <div
          className={`w-[35px] h-[35px] mx-[5px] rounded-full border-[2px] border-white  ${
            img[1] ? "bg-white" : "bg-transparent"
          } `}
          onClick={() => setImg([false, true, false])}
        >
          <button
            type="button"
            className="bg-transparent"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div
          className={`w-[35px] h-[35px] mx-[5px] rounded-full border-[2px] border-white  ${
            img[2] ? "bg-white" : "bg-transparent"
          }`}
          onClick={() => setImg([false, false, true])}
        >
          <button
            type="button"
            className="bg-transparent"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
      </div>
      <div className="carousel-inner -z-10">
        <div className="carousel-item active">
          <img src={MainPic} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={MainPic} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={MainPic} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
