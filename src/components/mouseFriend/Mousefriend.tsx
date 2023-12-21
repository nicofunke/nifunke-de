import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import "./MouseFriend.scss";

/**
 * Small component following the mouse cursor
 */
export const MouseFriend = () => {
  const ref = useRef<HTMLDivElement>();

  const mouseMoveHandler = (e: MouseEvent) => {
    const x = e.clientX - (ref.current?.offsetWidth || 0) / 2;
    const y = e.clientY - (ref.current?.offsetHeight || 0) / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px)`,
    };

    ref.current?.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return <Box ref={ref} id="mouse-friend"></Box>;
};
