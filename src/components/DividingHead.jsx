import React from "react";

export default function DividingHead(props) {
  return (
    <div className="mb-10">
      <h1 className="mb-6 mt-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="head-divider to-emerald-600 from-sky-400 animate-pulse bg-gradient-to-r bg-clip-text text-transparent delay-1000">
          {props.title}
        </span>
      </h1>
    </div>
  );
}
