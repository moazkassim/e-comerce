import { Link } from "react-router-dom";

import ShoppingProducts from "../../../public/Home-img/ShoppingProducts.svg";
import { useState } from "react";
import { MoveRight } from "lucide-react";

interface ISlide {
  src: string;

  description: string;
  details: string;
}

//
export const BrandingSlide = (props: ISlide) => {
  const { src, description, details } = props;

  return (
    <div className="relative mt-6 flex flex-1 flex-col items-center justify-between bg-black px-6 py-6 md:flex-row md:py-0 lg:mt-0">
      <div className="flex flex-col items-start justify-center gap-12 p-7 md:h-[350px] md:flex-1">
        <div className="flex flex-row items-center justify-center gap-4">
          <img
            className="max-w-[49px]"
            src={src}
            alt="ShoppingProducts-image"
          />
          <p className="text-white">{description}</p>
        </div>
        <p className="text-ellipsis text-3xl font-semibold leading-[60px] tracking-[1.5px] text-white sm:text-3xl">
          {details}
        </p>
        <Link
          className="flex flex-row items-center gap-2 text-white underline"
          to="/"
          aria-label="Home-page"
        >
          Shop Now <MoveRight />
        </Link>
      </div>

      <div className="relative flex h-72 items-center justify-center md:h-full md:flex-1">
        <div className="flex items-center justify-center">
          <img
            src={src}
            className="max-w-[350px] bg-transparent object-contain"
            alt="slider-img"
          />
        </div>
      </div>
    </div>
  );
};
