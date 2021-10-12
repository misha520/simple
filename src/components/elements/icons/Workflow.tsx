import * as React from "react";
import { allColors } from "../../foundation/palette";

const WorkflowIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
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
        d="M19.6244 5.3451C19.6244 3.68184 20.977 2.3335 22.6454 2.3335C24.3138 2.3335 25.6664 3.68184 25.6664 5.3451C25.6664 7.00836 24.3138 8.35671 22.6454 8.35671C20.977 8.35671 19.6244 7.00836 19.6244 5.3451ZM23.9705 5.3451C23.9705 4.61549 23.3772 4.02402 22.6453 4.02402C21.9135 4.02402 21.3201 4.61549 21.3201 5.3451C21.3201 6.07472 21.9135 6.66618 22.6453 6.66618C23.3772 6.66618 23.9705 6.07472 23.9705 5.3451ZM18.1153 11.1304C18.4021 10.7614 18.9347 10.694 19.3049 10.98C19.6414 11.2399 19.7278 11.7023 19.5253 12.0615L19.4558 12.1658L16.1445 16.4263C15.8825 16.7634 15.4158 16.8485 15.0552 16.6436L14.9505 16.5733L11.7637 14.0781L8.90265 17.7858C8.64305 18.1221 8.1795 18.2098 7.81852 18.0091L7.71361 17.9402C7.37622 17.6814 7.28821 17.2193 7.48954 16.8595L7.55866 16.7549L10.9424 12.3706C11.2039 12.0319 11.6717 11.9456 12.0332 12.151L12.1382 12.2213L15.3259 14.7182L18.1153 11.1304ZM17.7605 4.12782C17.7605 3.661 17.3809 3.28256 16.9126 3.28256H8.69635L8.43155 3.28697C4.75408 3.41013 2.33301 6.10256 2.33301 9.92537V19.0343L2.33706 19.3063C2.45041 23.0859 4.93105 25.6668 8.69635 25.6668H18.4234L18.6883 25.6624C22.3671 25.5396 24.7868 22.8553 24.7868 19.0343V11.1014L24.779 10.9867C24.7229 10.5741 24.3681 10.2561 23.9389 10.2561C23.4706 10.2561 23.091 10.6346 23.091 11.1014V19.0343L23.0863 19.2967C22.9839 22.1515 21.2009 23.9763 18.4234 23.9763H8.69635L8.44448 23.9713C5.70587 23.8624 4.02878 21.9674 4.02878 19.0343V9.92537L4.03345 9.66278C4.13606 6.80507 5.92129 4.97308 8.69635 4.97308H16.9126L17.0277 4.96537C17.4415 4.9094 17.7605 4.55575 17.7605 4.12782Z"
        fill={fill}
      />
    </svg>
  );
};

WorkflowIcon.defaultProps = {
  fill: allColors.black,
};

export default WorkflowIcon;