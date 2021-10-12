import * as React from "react";
import { allColors } from "../../foundation/palette";

const RulesIcon: React.FC<React.SVGProps<SVGElement>> = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon/Rules">
        <g id="Document">
          <path
            id="Stroke 1"
            d="M18.3354 18.9271H9.91211"
            stroke="#171B1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 2"
            d="M18.3354 14.0433H9.91211"
            stroke="#171B1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            d="M13.1263 9.17025H9.91211"
            stroke="#171B1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.5593 3.20801C18.5593 3.20801 9.60283 3.21267 9.58883 3.21267C6.36883 3.23251 4.375 5.35117 4.375 8.58284V19.3115C4.375 22.5595 6.384 24.6863 9.632 24.6863C9.632 24.6863 18.5873 24.6828 18.6025 24.6828C21.8225 24.663 23.8175 22.5432 23.8175 19.3115V8.58284C23.8175 5.33484 21.8073 3.20801 18.5593 3.20801Z"
            stroke="#171B1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

RulesIcon.defaultProps = {
  stroke: allColors.black,
};

export default RulesIcon;
