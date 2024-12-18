import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";
import { BrandingSlide } from "./BrandingSlide";
import mobile from "../../../public/Home-img/mobile.png";
import jpl from "../../../public/Home-img/jpl.png";
import laptop from "../../../public/Home-img/laptop.jpg";
import shoes from "../../../public/Home-img/shoes.jpg";
import shoes22 from "../../../public/Home-img/shoes22.jpg";
import laptop2 from "../../../public/Home-img/laptop2.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (time: number, progress: number) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  interface Slide {
    src: string;

    description: string;
    details: string;
  }
  const imageSliderArr: Slide[] = [
    {
      src: mobile,

      description: "iPhone 14 Series",
      details: "Up to 10% off Voucher",
    },
    {
      src: jpl,

      description: "Jbl speaker",
      details: "Enjoy your music wirelessly!",
    },
    {
      src: laptop,

      description: "Macbook pro",
      details: "Get a new 14-inch MacBook",
    },
    {
      src: shoes,

      description: "Generic shoes for men",
      details: "Explore premium  combinations of Shoes",
    },
    {
      src: laptop2,

      description: "Macbook Air",
      details: "The 13-inch model is the ultimate",
    },
    {
      src: shoes22,

      description: "Adidas shoes for men",
      details: "Shop adidas for all styles of men's shoes",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageSliderArr.map((ele) => {
          return (
            <SwiperSlide key={ele.description}>
              <BrandingSlide
                src={ele.src}
                description={ele.description}
                details={ele.details}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
