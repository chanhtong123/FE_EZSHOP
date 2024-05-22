import React from "react";
const sizes = {
  "3xl": "text-lg font-semibold",
  "2xl": "text-base font-semibold",
  "5xl": "text-[22px] font-semibold",
  xl: "text-[15px] font-semibold",
  "4xl": "text-xl font-semibold",
  "7xl": "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  "6xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  s: "text-xs font-bold",
  md: "text-[13px] font-semibold",
  "8xl": "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  xs: "text-[8px] font-bold",
  lg: "text-sm font-bold",
};
const Heading = ({
  children,
  className = "",
  size = "2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-blue_gray-900_02 font-bevietnampro ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Heading };
