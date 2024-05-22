import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
const shapes = { round: "rounded-md", square: "rounded-[0px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-600",
    blue_400_28: "bg-blue-400_28 text-blue-800",
    green_A700_28_01: "bg-green-A700_28_01 text-green-A700_02",
    red_600_28: "bg-red-600_28 text-red-A700_01",
    green_A700_02: "bg-green-A700_02 text-white-A700",
    amber_A400_28: "bg-amber-A400_28 text-amber-A400",
  },
  outline: {
    gray_200: "border-gray-200 border border-solid text-blue_gray-900_02",
  },
};
const sizes = {
  xs: "h-[17px] px-5",
  "2xl": "h-[60px] px-[35px] text-base",
  xl: "h-[55px] pl-4 pr-[35px] text-sm",
  lg: "h-[40px] pl-[15px] pr-[35px] text-sm",
  md: "h-[28px] pr-[35px] text-sm",
  sm: "h-[22px] pr-2.5 text-[13px]",
};
const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "sm",
      color = "amber_A400_28",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          } ${(variant && variants[variant]?.[color]) || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({ ...provided, zIndex: 0 }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": { border: "0 !important" },
            }),
            input: (provided) => ({ ...provided, color: "inherit" }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#19b269" : "transparent",
              color: state.isSelected ? "#f1fff2" : "inherit",
              "&:hover": { backgroundColor: "#19b269", color: "#f1fff2" },
            }),
            valueContainer: (provided) => ({ ...provided, padding: 0 }),
            placeholder: (provided) => ({ ...provided, margin: 0 }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);
SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "2xl", "xl", "lg", "md", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "blue_400_28",
    "green_A700_28_01",
    "red_600_28",
    "green_A700_02",
    "amber_A400_28",
    "gray_200",
  ]),
};
export { SelectBox };
