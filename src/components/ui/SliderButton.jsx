import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useSwiper } from "swiper/react";
const SliderBtn = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-btns outline-none border-none bg-transparent">
      <button
        className="expert-swiper-next-btn absolute z-10 top-[43%] left-0"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft
          className="bg-white text-dark hover:bg-pink-10 hover:text-white  p-2 rounded-full grid justify-center items-center"
          size={32}
        />
      </button>
      <button
        className="expert-swiper-prev-btn z-10 absolute top-[43%] right-0"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight
          className="bg-white text-dark hover:bg-pink-10 hover:text-white  p-2 rounded-full grid justify-center items-center"
          size={32}
        />
      </button>
    </div>
  );
};

export default SliderBtn;
