import { ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";

export default function GoToTop() {
  const [showButton, setShowButton] = useState<boolean>(false);

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
        <IconButton
          type="button"
          onClick={backToTop}
          name="go-back-to-top"
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: 50,
            borderRadius: "100%",
            backgroundColor: "#DB4444",
            padding: "12px",
            color: "white",
            transition: "all 150ms ease-in-out",
          }}
        >
          <ArrowUpward />
        </IconButton>
      )}
    </>
  );
}
