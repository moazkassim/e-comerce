import React from "react";

import Sales from "../../../public/aboutImg/sales.jpg";
export default function About() {
  return (
    <div id="about" className="relative bg-white overflow-hidden mb-20 mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About us
              </h2>

              <p>
                At SHOPLAND, we're passionate about redefining your shopping
                experience. Our mission is simple: to provide you with a
                seamless, secure, and enjoyable way to discover and purchase the
                products you love. With a commitment to quality, convenience,
                and customer satisfaction, we're here to make your online
                shopping journey memorable. Explore a world of possibilities at
                [Your E-commerce Website Name], where your satisfaction is our
                top priority. Join us in shaping the future of e-commerce and
                let's embark on a shopping adventure together.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={Sales}
          alt=""
        />
      </div>
    </div>
  );
}
