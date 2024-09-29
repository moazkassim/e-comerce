export default function SlideRightButton(props) {
  return (
    <div className="absolute right-2 top-0 flex h-full items-center justify-center">
      <button
        type="button"
        onClick={() => {
          if (props.imageIndex < props.imageSliderArr.length - 1) {
            props.setImageIndex((prevIndex) => prevIndex + 1);
          } else {
            props.setImageIndex(0);
          }
        }}
        className="z-50 h-full animate-pulse cursor-pointer ease-linear"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white"
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
        </span>
      </button>
    </div>
  );
}
