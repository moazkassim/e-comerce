import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Apple from "../../../public/Home-img/apple.png";
import axios from "axios";
import mobile from "../../../public/Home-img/mobile.png";
import jpl from "../../../public/Home-img/jpl.png";
import laptop from "../../../public/Home-img/laptop.jpg";
import shoes from "../../../public/Home-img/shoes.jpg";
import shoes22 from "../../../public/Home-img/shoes22.jpg";
import laptop2 from "../../../public/Home-img/laptop2.jpg";
import DividingHead from "../DividingHead";
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

  // setInterval(function () {
  //   if (imageIndex < imageSliderArr.length - 1) {
  //     setImageIndex((prevIndex) => prevIndex + 1);
  //   } else {
  //     setImageIndex(0);
  //   }
  // }, 2000);

  return (
    <section className="landing flex items-center justify-center">
      <div className="landing-container w-[1170] flex overflow-hidden">
        <ul className="links mt-12 ml-[20px] w-[200px] h-[344px] inline-flex flex-col items-start gap-4 ease-linear">
          {props.categoriesArr.map((cate, index) => {
            return (
              <li key={index}>
                <Link
                  className="hover:text-red-500 text-black flex items-start md:gap-4"
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
        <div className="divider w-[0.5px] h-[384px] bg-black opacity-30 max-sm:hidden"></div>

        <div className="advertisement max-sm:hidden m-12 p-4 w-[900px] h-[344px] shrink-0 bg-black flex relative overflow-hidden">
          <button
            type="button"
            onClick={() => {
              if (imageIndex > 0) {
                setImageIndex((prevIndex) => prevIndex - 1);
              } else {
                setImageIndex(imageSliderArr.length - 1);
              }
            }}
            className="absolute -left-2 slider-left-button animate-pulse max-md:-left-96 z-30 h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <ul className="flex flex-col ml-8 p-7">
            <li className="mb-8 inline-flex items-center pr-4 gap-6">
              <img className="w-[40px] h-[49]" src={Apple} />
              <p className="w-[126px] h-[20px] text-center text-base font-normal text-white">
                iPhone 14 Series
              </p>
            </li>
            <li className="w-[294px]">
              <p className="text-5xl text-white max-[1024px]:text-4xl font-semibold leading-[60px] tracking-[1.92px]">
                Up to 10% <br />
                off Voucher
              </p>
            </li>
            <li className="flex gap-1 text-center mt-5">
              <a
                className="text-white underline text-base font-normal text-center"
                href="#"
              >
                Shop Now
              </a>

              <svg
                className="w-6 h-6"
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
          <div className="li-advertisement mt-0 overflow-hidden p-0 absolute right-0">
            <img
              src={imageSliderArr[imageIndex].src}
              className="bg-transparent  w-[410px] h-[300px] shrink-0 "
            />
          </div>
          <button
            type="button"
            onClick={() => {
              if (imageIndex < imageSliderArr.length - 1) {
                setImageIndex((prevIndex) => prevIndex + 1);
              } else {
                setImageIndex(0);
              }
            }}
            className="absolute ease-linear right-2 slider-right-button animate-pulse max-md:-right-96 z-30 h-full px-4 cursor-pointer group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[white/30] dark:bg-gray-800/30 group-hover:bg-[white/50] dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
