import * as React from "react";

const DOCIcon: React.FC<React.SVGProps<SVGElement>> = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
    >
      <path
        fill="#E2E5E7"
        d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z"
      />
      <path
        fill="#B0B7BD"
        d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z"
      />
      <polygon fill="#CAD1D8" points="480,224 384,128 480,128 " />
      <path
        fill="#50BEE8"
        d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16
        V416z"
      />
      <g>
        <path
          fill="#FFFFFF"
          d="M92.576,384c-4.224,0-8.832-2.32-8.832-7.936v-72.656c0-4.608,4.608-7.936,8.832-7.936h29.296
            c58.464,0,57.168,88.528,1.136,88.528H92.576z M100.64,311.072v57.312h21.232c34.544,0,36.064-57.312,0-57.312H100.64z"
        />
        <path
          fill="#FFFFFF"
          d="M228,385.28c-23.664,1.024-48.24-14.72-48.24-46.064c0-31.472,24.56-46.944,48.24-46.944
            c22.384,1.136,45.792,16.624,45.792,46.944C273.792,369.552,250.384,385.28,228,385.28z M226.592,308.912
            c-14.336,0-29.936,10.112-29.936,30.32c0,20.096,15.616,30.336,29.936,30.336c14.72,0,30.448-10.24,30.448-30.336
            C257.04,319.008,241.312,308.912,226.592,308.912z"
        />
        <path
          fill="#FFFFFF"
          d="M288.848,339.088c0-24.688,15.488-45.92,44.912-45.92c11.136,0,19.968,3.328,29.296,11.392
            c3.456,3.184,3.84,8.816,0.384,12.4c-3.456,3.056-8.704,2.688-11.776-0.384c-5.232-5.504-10.608-7.024-17.904-7.024
            c-19.696,0-29.152,13.952-29.152,29.552c0,15.872,9.328,30.448,29.152,30.448c7.296,0,14.08-2.96,19.968-8.192
            c3.952-3.072,9.456-1.552,11.76,1.536c2.048,2.816,3.056,7.552-1.408,12.016c-8.96,8.336-19.696,10-30.336,10
            C302.8,384.912,288.848,363.776,288.848,339.088z"
        />
      </g>
      <path
        fill="#CAD1D8"
        d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z"
      />
    </svg>
  );
};

export default DOCIcon;
