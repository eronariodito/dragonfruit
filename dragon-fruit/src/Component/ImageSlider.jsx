import { useState } from "react";
import image1 from "../Assets/Real Time.png";
import { ChevronLeft } from "lucide-react";

export default function ImageSlider() {
  const slides = [
    {
      url: image1,
    },
    {
      url: image1,
    },
    {
      url: image1,
    },
  ];

  return (
    <div>
      <div
        style={{ backgroundImage: `url($slides[0].url})` }}
        className="w-full h-full rounded-lg bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}
