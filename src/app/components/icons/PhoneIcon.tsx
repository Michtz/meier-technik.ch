import React from "react";

const PhoneIcon: React.FC<any> = ({ width = 75, height = 75, color = "#4C4B4B", className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 45 45"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: "pointer" }}
  >
    {/* Telefonhörer-Pfad */}
    <path
      d="M15.5 10H12.5C11.1193 10 10 11.1193 10 12.5C10 24.3741 19.6259 34 31.5 34C32.8807 34 34 32.8807 34 31.5V28.5C34 27.3954 33.1046 26.5 32 26.5C30.3431 26.5 28.7111 26.2411 27.1705 25.7595C26.7022 25.6131 26.1795 25.7284 25.8085 26.0528L23.4475 28.1186C20.4216 26.3986 17.6014 23.5784 15.8814 20.5525L17.9472 18.1915C18.2716 17.8205 18.3869 17.2978 18.2405 16.8295C17.7589 15.2889 17.5 13.6569 17.5 12C17.5 10.8954 16.6046 10 15.5 10Z"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Kleine Schallwellen-Akzente oben rechts */}
    <path
      d="M26 12C26.8 12 28.5 12.5 29.5 14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M30 9C31.5 9.5 34 11.5 34.5 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default PhoneIcon;
