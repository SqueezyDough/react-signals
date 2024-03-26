import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { container } from "./Slider.css";

interface Props {}

const Slider: React.FC<Props> = props => {
  console.log("render Keenslider 🤢");

  const [sliderRef] = useKeenSlider({}, []);

  return (
    <div className={container}>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <img src="https://via.placeholder.com/800x400" alt="placeholder" />
        </div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
      </div>
    </div>
  );
};

export default Slider;
