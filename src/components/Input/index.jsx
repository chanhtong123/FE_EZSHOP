import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-[0px]", round: "rounded-md" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-600",
    gray_100_04: "bg-gray-100_04",
    gray_50_05: "bg-gray-50_05 text-blue_gray-500",
    green_50_01: "bg-green-50_01 text-gray-900_01",
  },
};
const sizes = {
  "3xl": "h-[60px] pl-[22px] pr-[35px] text-base",
  "4xl": "h-[70px] pl-6 text-[15px]",
  xs: "h-[40px] px-4 text-base",
  sm: "h-[44px] pl-6 pr-[35px] text-xs",
  lg: "h-[48px] pl-4 pr-[35px] text-base",
  md: "h-[45px] pl-[15px] pr-[35px] text-[15px]",
  "2xl": "h-[55px] pl-[15px] pr-[35px]",
  xl: "h-[55px] pl-[15px] pr-[35px] text-[15px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xl",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text  ${
            (shape && shapes[shape]) || ""
          } ${variants[variant]?.[color] || variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label} {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </label>
      </>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["3xl", "4xl", "xs", "sm", "lg", "md", "2xl", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_100_04",
    "gray_50_05",
    "green_50_01",
  ]),
};

export { Input };
