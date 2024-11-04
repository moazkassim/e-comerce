import React from "react";
import imgtest from "../../public/Home-img/mobile.png";
export default function WatchProduct(props) {
  return (
    <div
      className={`bottom-0 left-0 right-0 top-0 z-50 h-full w-full bg-white bg-opacity-90 ${props.visible ? "fixed" : "hidden"}`}
    >
      <div className="absolute right-1/4 top-1/4 flex items-center justify-center bg-blue-gray-500">
        <div className="">
          <img alt="product img" src={imgtest} className="" />
        </div>
        <div className="relative flex w-80 flex-col items-start justify-center gap-8">
          <h1 className="text-xl">a product title for examble</h1>
          <h3 className="text-gray-700"> categories</h3>
          <p className="text-gray-700"> description</p>
          <span className="text-red">220$</span>
        </div>
        <button 
          className="absolute right-1 top-1 h-6 w-6 rounded-full bg-black text-white"
          onClick={() => props.setVisible((prev) => !prev)}
        >
          x
        </button>
      </div>
    </div>
  );
}
