import * as React from "react";

interface Props extends Omit<React.SVGProps<SVGElement>, "radius"> {
  radius: number;
}

const EllipseIcon: React.FC<Props> = ({ fill, radius }) => {
  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={radius} cy={radius} r={radius} fill={fill} />
    </svg>
  );
};

export default EllipseIcon;
