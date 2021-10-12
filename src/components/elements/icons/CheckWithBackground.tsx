import * as React from "react";

const CheckWithBackgroundIcon: React.FC<React.SVGProps<SVGElement>> = ({
  fill,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.2" cx="12" cy="12" r="12" fill={fill} />
      <g clipPath="url(#clip0)">
        <path
          d="M10.8294 15.7364C10.734 15.8324 10.6037 15.8859 10.4684 15.8859C10.3332 15.8859 10.2029 15.8324 10.1075 15.7364L7.22463 12.853C6.92545 12.5539 6.92545 12.0687 7.22463 11.7701L7.5856 11.409C7.88487 11.1099 8.36944 11.1099 8.66862 11.409L10.4684 13.209L15.3318 8.34548C15.6311 8.0463 16.1162 8.0463 16.4149 8.34548L16.7758 8.70655C17.075 9.00572 17.075 9.49076 16.7758 9.78947L10.8294 15.7364Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(7.00024 7.00098)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckWithBackgroundIcon;
