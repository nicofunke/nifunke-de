import { Box } from "@mui/material";
import image from "../assets/profile.png";
import { useEffect, useRef } from "react";

const getBetween = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

/**
 * Image that rotates 3 dimensional to follow the mouse cursor
 */
export const RotatingImage = () => {
  const ref = useRef<HTMLDivElement>();

  const mouseMoveHandler = (e: MouseEvent) => {
    const yMiddle = (ref.current?.getBoundingClientRect().bottom || 0) - 200;
    const yMouseDistance = yMiddle - e.clientY;
    const rotateY = getBetween(Math.abs(yMouseDistance / 20), 2, 16);

    const xMiddle = (ref.current?.getBoundingClientRect().right || 0) - 150;
    const xMouseDistance = xMiddle - e.clientX;
    const xRotationSign = xMouseDistance > 0 ? -1 : 1;
    const rotateX =
      getBetween(Math.abs(xMouseDistance) / 10, -30, 30) * xRotationSign;

    const keyframes = {
      transform: `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`,
    };

    ref.current?.animate(keyframes, {
      duration: 1800,
      fill: "forwards",
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <Box
      ref={ref}
      bgcolor="var(--color-3)"
      border="2px solid var(--color-1)"
      borderRadius={4}
      width={300}
      height={400}
      color="white"
      sx={{
        filter: "grayscale(0.5)",
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "4px 4px 8px black",
      }}
    />
  );
};
