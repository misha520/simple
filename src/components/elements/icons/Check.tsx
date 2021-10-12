import * as React from "react";

type PropsT = {
  fill?: string;
};

const CheckIcon: React.FC<PropsT> = ({ fill = "#35B6FE" }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M4.02448 8.11168C3.94493 8.19169 3.8364 8.23633 3.72367 8.23633C3.61093 8.23633 3.5024 8.19169 3.42285 8.11168L1.02048 5.70891C0.771168 5.4596 0.771168 5.05532 1.02048 4.80648L1.32129 4.50558C1.57069 4.25627 1.9745 4.25627 2.22381 4.50558L3.72367 6.00552L7.7765 1.95261C8.02589 1.7033 8.43009 1.7033 8.67901 1.95261L8.97983 2.2535C9.22914 2.50281 9.22914 2.90702 8.97983 3.15594L4.02448 8.11168Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="8.33333"
            height="8.33333"
            fill="white"
            transform="translate(0.833496 0.833008)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
