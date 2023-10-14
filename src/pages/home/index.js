import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import SliderBtn from "../../components/ui/SliderButton";

export default function Home() {
  const year = new Date().getFullYear();
  const lastTwoDigits = year.toString().slice(-2);

  const sliderData = [
    {
      imgURL:
        "https://webdesign-finder.com/qtex/wp-content/uploads/2018/06/slide02.jpg",
      category: "Men's Textile",
    },
    {
      imgURL:
        "https://webdesign-finder.com/qtex/wp-content/uploads/2018/06/slide02.jpg",
      category: "Female's Textile",
    },
    {
      imgURL:
        "https://webdesign-finder.com/qtex/wp-content/uploads/2018/06/slide02.jpg",
      category: "Kid's Textile",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="myToolsSlider"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.imgURL})`,
                backgroundSize: "cover",
              }}
              className="w-screen "
            >
              <div className="container mx-auto">
                <div
                  style={{ height: "calc(100vh - 80px)" }}
                  className="h-screen flex flex-col justify-center"
                >
                  <div className="">
                    <button className="bg-white py-1 px-5 text-sm rounded-2xl text-dark font-semibold  uppercase mb-3">
                      {slide.category}
                    </button>
                    <h1 className="text-9xl font-black text-dark">
                      2k
                      <span className="text-pink-10 italic">
                        {lastTwoDigits}
                      </span>
                    </h1>
                    <p className="uppercase text-dark text-sm tracking-widest mb-5">
                      Summer Collection
                    </p>
                    <div>
                      <button className=" border-2 border-dark hover:border-white text-dark text-base font-semibold rounded-3xl py-3 px-7">
                        Go To Shop
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SliderBtn />
      </Swiper>
    </>
  );
}
