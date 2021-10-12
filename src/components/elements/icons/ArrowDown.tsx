import * as React from "react";

interface Props {
  size?: string;
}

const ArrowDownIcon: React.FC<Props> = ({ size }) => {
  return (
    <>
      {size === "small" ? (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 7.5L9 12.5L13.5 7.5" fill="#C8C8C8" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9L12 15L18 9" fill="#171B1E" fillOpacity="0.5" />
        </svg>
      )}
    </>
  );
};

export default ArrowDownIcon;
