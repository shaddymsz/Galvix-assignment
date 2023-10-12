import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[26px]" };
const variants = {
  fill: {
    lime_500: "bg-lime-500 text-black-900",
    green_A200: "bg-green-A200 text-black-900",
    yellow_A100: "bg-yellow-A100 text-black-900",
    blue_200: "bg-blue-200 text-black-900",
    deep_purple_A100: "bg-deep_purple-A100 text-black-900",
    pink_400: "bg-pink-400 text-white-A700",
  },
  outline: { gray_200: "border-2 border-gray-200 border-solid" },
};
const sizes = { xs: "p-[15px]", sm: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "lime_500",
    "green_A200",
    "yellow_A100",
    "blue_200",
    "deep_purple_A100",
    "pink_400",
    "gray_200",
  ]),
};

export { Button };
