import React from "react";
import PropTypes from "prop-types";
const variants = {
  primary:
    "border-purple-A200 border-[0.5px] border-solid checked:border-blue_gray-900_02 checked:border checked:border-solid checked:focus:border-blue_gray-900_02",
};
const sizes = {
  xs: "h-[16px] w-[16px] rounded",
  sm: "h-[17px] w-[17px] rounded-[1px]",
};
const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };
    return (
      <>
        {" "}
        <div
          className={className + " flex items-center gap-[5px] cursor-pointer"}
        >
          {" "}
          <input
            className={` ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />{" "}
          {!!label && <label htmlFor={id}>{label}</label>}{" "}
        </div>{" "}
        {children}{" "}
      </>
    );
  }
);
CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["primary"]),
};
export { CheckBox };
