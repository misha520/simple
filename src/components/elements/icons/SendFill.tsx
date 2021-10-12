import * as React from "react";

const SendFillIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.62169 7.76261C1.18669 7.61761 1.18253 7.38345 1.63003 7.23428L17.5359 1.93261C17.9767 1.78595 18.2292 2.03262 18.1059 2.46428L13.5609 18.3693C13.4359 18.8101 13.1817 18.8251 12.995 18.4068L10 11.6668L15 5.00011L8.33336 10.0001L1.62169 7.76261Z"
        fill={fill}
      />
    </svg>
  );
};

export default SendFillIcon;
