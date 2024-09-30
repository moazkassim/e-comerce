import React from "react";

export default function DividingHead(props) {
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-extrabold text-[#ee50ff] dark:text-white md:text-5xl lg:text-6xl">
        <span className="head-divider animate-pulse bg-gradient-to-r bg-clip-text delay-1000">
          {props.title}
        </span>
      </h1>
    </div>
  );
}
