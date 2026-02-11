import React from "react";

const MailIcon: React.FC<any> = ({
  width = 75,
  height = 75,
  color = "#4C4B4B",
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 45 45"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 14H35C36.6569 14 38 15.3431 38 17V31C38 32.6569 36.6569 34 35 34H10C8.34315 34 7 32.6569 7 31V17C7 15.3431 8.34315 14 10 14Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17L22.5 25L38 17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M31 34L25 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 34L20 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default MailIcon;
