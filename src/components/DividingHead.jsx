import React from "react";

export default function DividingHead(props) {
  return (
    <div className=" my-36">
      <hr className="my-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
      <h1 className="mb-6 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        <span className="head-divider text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 animate-pulse delay-1000">
          {props.title}
        </span>
      </h1>
    </div>
  );
}
