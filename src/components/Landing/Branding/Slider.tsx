import { Link } from "react-router-dom";
import SlideLeftButton from "./SlideLeftButton";
import SlideRightButton from "./SlideRightButton";
import ShoppingProducts from "../../../public/Home-img/ShoppingProducts.svg";
import { useState } from "react";
import { MoveRight } from "lucide-react";
import mobile from "../../../public/Home-img/mobile.png";
import jpl from "../../../public/Home-img/jpl.png";
import laptop from "../../../public/Home-img/laptop.jpg";
import shoes from "../../../public/Home-img/shoes.jpg";
import shoes22 from "../../../public/Home-img/shoes22.jpg";
import laptop2 from "../../../public/Home-img/laptop2.jpg";

export interface Slide {
  src: string;
  ket: number;
  description: string;
  details: string;
}
const imageSliderArr: Slide[] = [
  {
    src: mobile,
    ket: 1,
    description: "iPhone 14 Series",
    details: "Up to 10% off Voucher",
  },
  {
    src: jpl,
    ket: 2,
    description: "Jbl speaker",
    details: "Enjoy your music wirelessly!",
  },
  {
    src: laptop,
    ket: 3,
    description: "Macbook pro",
    details: "Get a new 14-inch MacBook",
  },
  {
    src: shoes,
    ket: 4,
    description: "Generic shoes for men",
    details: "Explore premium  combinations of Shoes",
  },
  {
    src: laptop2,
    ket: 5,
    description: "Macbook Air",
    details: "The 13-inch model is the ultimate",
  },
  {
    src: shoes22,
    ket: 6,
    description: "Adidas shoes for men",
    details: "Shop adidas for all styles of men's shoes",
  },
];
export default function BrandingSection() {
  console.log("hi i am from Branding");

  const [imageIndex, setImageIndex] = useState<number>(0);
  return (
    <div className="relative flex flex-1 flex-col items-center justify-between gap-2 bg-black px-8 py-8 md:flex-row">
      <div className="flex h-72 flex-col items-start justify-center gap-8 p-7 md:h-[350px] md:flex-1">
        <div className="flex flex-row items-center justify-center gap-4">
          <img
            className="h-[49px] w-[49px]"
            src={ShoppingProducts}
            alt="ShoppingProducts-image"
          />
          <p className="text-white">{imageSliderArr[imageIndex].description}</p>
        </div>
        <p className="text-ellipsis text-3xl font-semibold leading-[60px] tracking-[1.5px] text-white sm:text-4xl">
          {imageSliderArr[imageIndex].details}
        </p>
        <Link
          className="flex flex-row items-center gap-2 text-white underline"
          to="/"
          aria-label="Home-page"
        >
          Shop Now <MoveRight />
        </Link>
      </div>

      <div className="relative flex h-72 items-center justify-center md:static md:h-full md:flex-1">
        <SlideLeftButton
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          imageSliderArr={imageSliderArr}
        />

        <div className="flex items-center justify-center">
          <img
            src={imageSliderArr[imageIndex].src}
            className="bg-transparent object-contain"
            alt="slider-img"
          />
        </div>

        <SlideRightButton
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          imageSliderArr={imageSliderArr}
        />
      </div>
    </div>
  );
}
