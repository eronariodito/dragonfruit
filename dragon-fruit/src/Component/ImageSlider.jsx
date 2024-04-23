import { useState } from "react";
import image1 from "../Assets/Home.png";
import image2 from "../Assets/Real Time.png";
import image3 from "../Assets/Historical.png";
import image4 from "../Assets/Export.png";
import Carousel from "./Carousel";

export default function ImageSlider() {
  const slides = [image1, image2, image3, image4];

  return (
    <div className="lg:w-[70%]">
      <Carousel>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </Carousel>
    </div>
  );
}
