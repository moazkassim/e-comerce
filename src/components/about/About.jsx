import React from "react";

import Sales from "../../../public/aboutImg/sales.jpg";
export default function About() {
  return (
    <div id="about" className="relative mb-20 mt-28 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <h2 className="my-6 text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              About us
            </h2>

            <p>
              At SHOPLAND, we're passionate about redefining your shopping
              experience. Our mission is simple: to provide you with a seamless,
              secure, and enjoyable way to discover and purchase the products
              you love. With a commitment to quality, convenience, and customer
              satisfaction, we're here to make your online shopping journey
              memorable. Explore a world of possibilities at [Your E-commerce
              Website Name], where your satisfaction is our top priority. Join
              us in shaping the future of e-commerce and let's embark on a
              shopping adventure together.
            </p>
          </main>
        </div>
      </div>
      <div className="mx-4 md:mx-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-full w-full object-cover object-top"
          src={Sales}
          alt=""
        />
      </div>
    </div>
  );
}
