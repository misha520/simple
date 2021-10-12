import * as React from "react";
import { allColors } from "../../foundation/palette";

const PlayIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.90021 1.14904C1.60001 0.403231 0.545898 1.01421 0.545898 2.51261V13.5701C0.545898 15.07 1.60001 15.6802 2.90021 14.9351L12.565 9.3924C13.8657 8.64632 13.8657 7.43757 12.565 6.69167L2.90021 1.14904Z"
        fill={fill}
      />
    </svg>
  );
};

PlayIcon.defaultProps = {
  fill: allColors.black,
};

export default PlayIcon;
