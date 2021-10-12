import * as React from "react";
import { allColors } from "../../foundation/palette";

const MenuIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3749 25.75H4.625C3.72751 25.75 3 25.0224 3 24.125C3 23.2276 3.72751 22.5 4.625 22.5H17.3749C18.2724 22.5 18.9999 23.2276 18.9999 24.125C18.9999 25.0224 18.2724 25.75 17.3749 25.75Z"
        fill={fill}
      />
      <path
        d="M27.3749 17.625H4.625C3.72751 17.625 3 16.8974 3 16C3 15.1026 3.72751 14.375 4.625 14.375H27.3749C28.2724 14.375 28.9999 15.1025 28.9999 16C28.9999 16.8975 28.2724 17.625 27.3749 17.625Z"
        fill={fill}
      />
      <path
        d="M27.3749 9.50001H4.625C3.72751 9.50001 3 8.7725 3 7.875C3 6.97751 3.72751 6.25 4.625 6.25H27.3749C28.2724 6.25 28.9999 6.97751 28.9999 7.875C28.9999 8.7725 28.2724 9.50001 27.3749 9.50001Z"
        fill={fill}
      />
    </svg>
  );
};

MenuIcon.defaultProps = {
  fill: allColors.black,
};

export default MenuIcon;
