import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./Slider.module.scss";
import clsx from "clsx";

interface Props {}

const Slider: React.FC<Props> = props => {
  console.log("render Keenslider 🤢");

  const [sliderRef] = useKeenSlider({}, []);

  return (
    <div className={styles.container}>
      <div ref={sliderRef} className={clsx("keen-slider", styles.slider)}>
        <div className="keen-slider__slide">
          <img src="/images/react-signals.001.jpeg" alt="slide 1" />
        </div>
        <div className="keen-slider__slide">
          <img src="/images/react-signals.002.jpeg" alt="slide 2" />
        </div>
        <div className="keen-slider__slide">
          <img src="/images/react-signals.003.jpeg" alt="slide 3" />
        </div>
        <div className="keen-slider__slide">
          <img src="/images/react-signals.004.jpeg" alt="slide 4" />
        </div>
        <div className="keen-slider__slide">
          <img src="/images/react-signals.005.jpeg" alt="slide 5" />
        </div>
        <div className="keen-slider__slide">
          <img src="/images/react-signals.006.jpeg" alt="slide 6" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
