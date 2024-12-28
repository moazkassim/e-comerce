import { ArrowUpward } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
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
        <Fab
          type="button"
          onClick={backToTop}
          name="go-back-to-top"
          color="primary"
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: 50,
            borderRadius: "100%",
            padding: "12px",
            color: "white",
            transition: "all 150ms ease-in-out",
          }}
        >
          <Tooltip title="Go to top">
            <ArrowUpward />
          </Tooltip>
        </Fab>
      )}
    </>
  );
}
