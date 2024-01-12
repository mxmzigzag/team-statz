import React from "react";

export const SubstitutionArrowIcon: React.FC<
  React.ComponentPropsWithoutRef<"svg">
> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" {...props}>
      <path
        fillRule="evenodd"
        d="M26,38V18l5,5,3-3L24,10,14,20l3,3,5-5V38h4Z"
      />
      <rect fillRule="evenodd" height="8" width="4" x="22" y="30" />
    </svg>
  );
};
