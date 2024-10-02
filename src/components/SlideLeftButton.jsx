export default function SlideLeftButton(props) {
  return (
    <div className="absolute left-2 top-0 flex h-full items-center justify-center">
      <button
        type="button"
        name="go-to-next-p"
        onClick={() => {
          if (props.imageIndex > 0) {
            props.setImageIndex((prevIndex) => prevIndex - 1);
          } else {
            props.setImageIndex(props.imageSliderArr.length - 1);
          }
        }}
        className="slider-left-button group animate-pulse cursor-pointer focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
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
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
