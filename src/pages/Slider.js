import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

function Slider() {
  return <ImageSlider slides={SliderData} />;
}

export default Slider;
