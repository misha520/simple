import * as React from "react";

const CloseWithBackgroundIcon: React.FC<React.SVGProps<SVGElement>> = ({
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
          d="M12.9162 12.0083L16.81 8.11435C17.0634 7.86107 17.0634 7.45155 16.81 7.19826C16.5567 6.94498 16.1472 6.94498 15.8939 7.19826L11.9999 11.0922L8.10614 7.19826C7.85274 6.94498 7.44334 6.94498 7.19005 7.19826C6.93665 7.45155 6.93665 7.86107 7.19005 8.11435L11.0839 12.0083L7.19005 15.9022C6.93665 16.1555 6.93665 16.565 7.19005 16.8183C7.31628 16.9446 7.48225 17.0081 7.6481 17.0081C7.81395 17.0081 7.9798 16.9446 8.10614 16.8183L11.9999 12.9244L15.8939 16.8183C16.0202 16.9446 16.1861 17.0081 16.3519 17.0081C16.5178 17.0081 16.6836 16.9446 16.81 16.8183C17.0634 16.565 17.0634 16.1555 16.81 15.9022L12.9162 12.0083Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseWithBackgroundIcon;
