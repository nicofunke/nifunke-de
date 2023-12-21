import { styled } from "@mui/material";

type Variant = "blue" | "gray" | "pink";

export const MarkedText = styled("span")<{ variant?: Variant }>(
  ({ variant, theme }) => ({
    position: "relative",
    zIndex: 1,
    display: "inline-block",
    "&::before": {
      backgroundColor: theme.palette.primary.dark,
      content: '""',
      opacity: "0.45",
      position: "absolute",
      width: "calc(100% + 4px)",
      height: "45%",
      left: "-2px",
      bottom: 0,
      zIndex: -1,
      transform: "rotate(-2deg)",

      ...(variant === "pink"
        ? {
            height: "34%",
            backgroundColor: theme.palette.secondary.light,
            transform: "rotate(-1deg)",
          }
        : {}),

      ...(variant === "gray"
        ? {
            height: "45%",
            backgroundColor: theme.palette.salmon.dark,
            transform: "rotate(1deg)",
          }
        : {}),
    },
  })
);
