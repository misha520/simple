import * as React from "react";
import { allColors } from "../../foundation/palette";

const NotificationIcon: React.FC<React.SVGProps<SVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.37603 17.2339V16.9602C4.41619 16.1503 4.67575 15.3656 5.12794 14.687C5.88063 13.8718 6.39588 12.8729 6.61964 11.795C6.61964 10.9619 6.61964 10.1169 6.69241 9.28378C7.06836 5.27302 11.0341 2.5 14.9513 2.5H15.0483C18.9656 2.5 22.9313 5.27302 23.3194 9.28378C23.3921 10.1169 23.3194 10.9619 23.38 11.795C23.6068 12.8754 24.1215 13.8774 24.8717 14.6989C25.3273 15.3715 25.5873 16.1533 25.6236 16.9602V17.222C25.6507 18.3101 25.276 19.371 24.5685 20.2092C23.6337 21.1893 22.3651 21.7991 21.003 21.923C17.0087 22.3515 12.9788 22.3515 8.98453 21.923C7.62393 21.7937 6.3572 21.1849 5.41901 20.2092C4.7225 19.3704 4.3528 18.3157 4.37603 17.2339Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9434 26.0645C12.5675 26.8478 13.4839 27.3548 14.49 27.4731C15.496 27.5915 16.5086 27.3116 17.3038 26.6952C17.5483 26.5129 17.7684 26.301 17.9587 26.0645"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NotificationIcon.defaultProps = {
  stroke: allColors.black,
};

export default NotificationIcon;
