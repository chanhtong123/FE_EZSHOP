import React from "react";
const sizes = {
  "5xl": "text-2xl font-medium md:text-[22px]",
  "6xl": "text-[26px] font-medium md:text-2xl sm:text-[22px]",
  xs: "text-xs font-normal",
  lg: "text-[15px] font-normal",
  "7xl": "text-[28px] font-medium md:text-[26px] sm:text-2xl",
  "8xl": "text-6xl font-medium md:text-[52px] sm:text-[46px]",
  s: "text-[13px] font-normal",
  "2xl": "text-lg font-medium",
  "3xl": "text-xl font-medium",
  "4xl": "text-[22px] font-medium",
  xl: "text-base font-medium",
  md: "text-sm font-normal",
};
const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-blue_gray-900_02 font-bevietnampro ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };
