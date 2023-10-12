import React from "react";

const sizeClasses = {
  txtDMSansBold58: "font-bold font-dmsans",
  txtDMSansBold14: "font-bold font-dmsans",
  txtDMSansRegular16WhiteA700: "font-dmsans font-normal",
  txtDMSansBold24: "font-bold font-dmsans",
  txtInterMedium16: "font-inter font-medium",
  txtDMSansMedium16: "font-dmsans font-medium",
  txtDMSansBold42WhiteA700: "font-bold font-dmsans",
  txtDMSansRegular16Indigo900: "font-dmsans font-normal",
  txtDMSansMedium18Indigo900: "font-dmsans font-medium",
  txtDMSansMedium22: "font-dmsans font-medium",
  txtDMSansBold42: "font-bold font-dmsans",
  txtDMSansMedium22WhiteA700: "font-dmsans font-medium",
  txtDMSansMedium22Indigo900: "font-dmsans font-medium",
  txtDMSansRegular16: "font-dmsans font-normal",
  txtDMSansRegular16Gray200: "font-dmsans font-normal",
  txtDMSansMedium18: "font-dmsans font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
