interface Slide {
  src: string;
  ket: number;
  description: string;
  details: string;
}
interface SlideLeftButtonProps {
  imageIndex: number;
  setImageIndex: (prevIndex: number | ((prevIndex: number) => number)) => void;
  imageSliderArr: Slide[];
}
export default function SlideRightButton(props: SlideLeftButtonProps) {
  const { imageIndex, setImageIndex, imageSliderArr } = props;
  console.log("hi i am from slide right button");
  return (
    <div className="absolute right-2 top-0 flex h-full items-center justify-center">
      <button
        type="button"
        name="go-to-previous-img"
        onClick={() => {
          if (imageIndex < imageSliderArr.length - 1) {
            setImageIndex((prevIndex) => prevIndex + 1);
          } else {
            setImageIndex(0);
          }
        }}
        className="z-50 animate-pulse cursor-pointer ease-linear"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
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
