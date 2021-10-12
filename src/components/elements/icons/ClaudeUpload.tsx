import * as React from "react";

const ClaudeUploadIcon: React.FC<React.SVGProps<SVGElement>> = ({
  height = 66,
  width = 66,
  fill = "#171B1E",
  fillOpacity = "1",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="66"
        height="66"
        rx="14"
        fill={fill}
        fill-opacity={fillOpacity}
      />
      <path
        d="M41.8823 29.3252C41.5219 24.7405 37.6758 21.1201 33 21.1201C29.0004 21.1201 25.5671 23.7179 24.4593 27.5066C21.2992 28.6035 19.14 31.5973 19.14 34.9801C19.14 39.347 22.6931 42.9001 27.06 42.9001H39.93C43.7514 42.9001 46.86 39.7915 46.86 35.9701C46.86 32.8526 44.8107 30.1766 41.8823 29.3252ZM37.8748 32.3893C37.7213 32.7586 37.36 33.0001 36.96 33.0001H34.98V36.9601C34.98 38.0531 34.093 38.9401 33 38.9401C31.9071 38.9401 31.02 38.0531 31.02 36.9601V33.0001H29.04C28.6401 33.0001 28.2787 32.7586 28.1253 32.3893C27.9718 32.019 28.0569 31.5933 28.3401 31.3102L32.3001 27.3502C32.4931 27.1571 32.7466 27.0601 33 27.0601C33.2535 27.0601 33.5069 27.1571 33.6999 27.3502L37.6599 31.3102C37.9431 31.5933 38.0282 32.019 37.8748 32.3893Z"
        fill="white"
      />
    </svg>
  );
};

export default ClaudeUploadIcon;