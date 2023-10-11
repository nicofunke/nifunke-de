import { PropsWithChildren } from "react";
import "./MarkedText.scss";

type Variant = "blue" | "gray" | "pink";

type Props = PropsWithChildren & {
  variant?: Variant;
};

const variantToClassName = (variant: Variant) => {
  switch (variant) {
    case "gray":
      return "style-2";
    case "pink":
      return "style-3";
    default:
      return "";
  }
};

export const MarkedText = ({ children, variant = "blue" }: Props) => {
  const className = `marked ${variantToClassName(variant)}`.trim();
  return <span className={className}>{children}</span>;
};
