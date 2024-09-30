import { useState } from "react";
import { Link } from "react-router-dom";
import Apple from "../../../public/Home-img/apple.png";
import mobile from "../../../public/Home-img/mobile.png";
import jpl from "../../../public/Home-img/jpl.png";
import laptop from "../../../public/Home-img/laptop.jpg";
import shoes from "../../../public/Home-img/shoes.jpg";
import shoes22 from "../../../public/Home-img/shoes22.jpg";
import laptop2 from "../../../public/Home-img/laptop2.jpg";
import SlideLeftButton from "../SlideLeftButton";
import SlideRightButton from "../SlideRightButton";
export default function Landing(props) {
  const imageSliderArr = [
    { src: mobile, ket: 1 },
    { src: jpl, ket: 2 },
    { src: laptop, ket: 3 },
    { src: shoes, ket: 4 },
    { src: laptop2, ket: 5 },
    { src: shoes22, ket: 6 },
  ];
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex w-full md:relative lg:m-8">
        <ul className="links mt-10 hidden min-w-40 flex-col items-start gap-4 ease-linear lg:inline-flex">
          {props.categoriesArr.map((cate, index) => {
            return (
              <li key={index}>
                <Link
                  aria-label="set-category-name-title"
                  className="flex items-start text-black hover:text-red-500 md:gap-4"
                  onClick={() => props.setCategoryNameTitle(cate)}
                >
                  {cate}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mx-10 hidden w-[0.5px] bg-black opacity-30 lg:flex"></div>

        <div className="relative flex w-full flex-col justify-between gap-10 bg-black py-8 md:flex-row">
          <ul className="ml-8 flex flex-col p-7">
            <li className="mb-8 flex items-center justify-start gap-6">
              <img className="h-[49] w-[40]" src={Apple} alt="apple-image" />
              <p className="text-center text-base font-normal text-white">
                iPhone 14 Series
              </p>
            </li>
            <li>
              <p className="max-lg:text-4xl text-5xl font-semibold leading-[60px] tracking-[1.92px] text-white">
                Up to 10% <br />
                off Voucher
              </p>
            </li>
            <li className="ite mt-5 flex gap-2 text-center">
              <Link
                className="text-center text-base font-normal text-white underline"
                to="/"
                aria-label="Home-page"
              >
                Shop Now
              </Link>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </ul>
          <div className="li-advertisement relative flex items-center justify-center overflow-hidden md:static">
            <SlideLeftButton
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              imageSliderArr={imageSliderArr}
            />

            <img
              src={imageSliderArr[imageIndex].src}
              className="aspect-auto h-[300px] w-[410px] shrink-0 bg-transparent"
              alt="slider-img"
            />

            <SlideRightButton
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              imageSliderArr={imageSliderArr}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
