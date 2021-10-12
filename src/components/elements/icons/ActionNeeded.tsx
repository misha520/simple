import * as React from "react";
import { allColors } from "../../foundation/palette";

const ActionNeededIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.057 2.3335H8.94315C4.97931 2.3335 2.33398 5.17152 2.33398 9.2355V18.7648C2.33398 22.8331 4.97146 25.6668 8.94315 25.6668H19.0558C23.0279 25.6668 25.6673 22.8326 25.6673 18.7648V9.2355C25.6673 5.16792 23.0281 2.3335 19.057 2.3335ZM8.94315 4.0835H19.057C22.0326 4.0835 23.9173 6.10762 23.9173 9.2355V18.7648C23.9173 21.8929 22.0324 23.9168 19.0558 23.9168H8.94315C5.96715 23.9168 4.08398 21.8935 4.08398 18.7648V9.2355C4.08398 6.1116 5.97438 4.0835 8.94315 4.0835ZM7.37646 14.0004C7.37646 14.7704 8.00296 15.3969 8.77413 15.3969C9.54529 15.3969 10.1718 14.7704 10.1718 14.0004C10.1718 13.2304 9.54529 12.6027 8.77413 12.6027C8.00296 12.6027 7.37646 13.2304 7.37646 14.0004ZM14.0001 15.3969C13.2289 15.3969 12.6024 14.7704 12.6024 14.0004C12.6024 13.2304 13.2289 12.6027 14.0001 12.6027C14.7713 12.6027 15.3978 13.2304 15.3978 14.0004C15.3978 14.7704 14.7713 15.3969 14.0001 15.3969ZM17.8279 14.0004C17.8279 14.7704 18.4544 15.3969 19.2255 15.3969C19.9967 15.3969 20.6232 14.7704 20.6232 14.0004C20.6232 13.2304 19.9967 12.6027 19.2255 12.6027C18.4544 12.6027 17.8279 13.2304 17.8279 14.0004Z"
        fill={fill}
      />
    </svg>
  );
};

ActionNeededIcon.defaultProps = {
  fill: allColors.black,
};

export default ActionNeededIcon;
