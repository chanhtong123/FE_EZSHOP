import React from "react";
import PropTypes from "prop-types";
const shapes = { round: "rounded-md" };
const variants = {
  tarGREY2: "!border-gray-300_01 border border-solid bg-white-A700",
  tarColor5: "!border-gray-200_01 border border-solid bg-white-A700",
};
const sizes = {
  sm: "h-[174px] p-4 text-sm",
  md: "h-[200px] p-4 text-sm",
  lg: "h-[257px] p-5 text-sm",
  xs: "h-[100px] p-4 text-sm",
  xl: "h-[261px] p-5 text-[15px]",
};
const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xl",
      variant = "tarColor5",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };
    return (
      <textarea
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${
          sizes[size] || ""
        } ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xs", "xl"]),
  variant: PropTypes.oneOf(["tarGREY2", "tarColor5"]),
};
export { TextArea };
