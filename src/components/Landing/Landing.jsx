import mobile from "../../../public/Home-img/mobile.png";
import jpl from "../../../public/Home-img/jpl.png";
import laptop from "../../../public/Home-img/laptop.jpg";
import shoes from "../../../public/Home-img/shoes.jpg";
import shoes22 from "../../../public/Home-img/shoes22.jpg";
import laptop2 from "../../../public/Home-img/laptop2.jpg";

import BrandingSection from "./BrandingSection";

import CategoriesList from "./CategoriesList";
const imageSliderArr = [
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
export default function Landing() {
  console.log("hi iam from landing")
  return (
    <section className="flex w-full">
      <div className="flex w-full md:mt-10">
        <CategoriesList />
        <div className="mx-10 hidden w-[0.5px] bg-black opacity-30 lg:flex"></div>

        <BrandingSection imageSliderArr={imageSliderArr} />
      </div>
    </section>
  );
}
