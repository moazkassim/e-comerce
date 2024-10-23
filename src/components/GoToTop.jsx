import { useState, useEffect } from "react";

export default function GoToTop() {
  ("hi i am from goToTop");
  const [showButton, setShowButton] = useState(false);

  // Throttled scroll handler to reduce performance overhead
  const handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    setShowButton(scrollTop > 20);
  };

  const backToTop = () => {
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const throttleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttleScroll);
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={backToTop}
          name="go-back-to-top"
          className="fixed bottom-10 right-10 z-50 rounded-full bg-[#DB4444] p-3 text-[14px] font-medium uppercase text-white transition duration-150 ease-in-out"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="h-4 w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            />
          </svg>
        </button>
      )}
    </>
  );
}
