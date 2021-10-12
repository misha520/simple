import * as React from "react";

interface Props {
    width?: string;
    height?: string;
    color?: string;
}

const ArrowUpIcon: React.FC<Props> = ({ width, height, color }) => {
    return (
        <svg
            width={width ? width : "21"}
            height={height ? height : "11"}
            viewBox="0 0 21 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.49217 11C0.590508 11 0.149368 9.9006 0.800944 9.27736L9.80878 0.66117C10.1954 0.29136 10.8046 0.291359 11.1912 0.661169L20.1991 9.27736C20.8506 9.9006 20.4095 11 19.5078 11H1.49217Z"
                fill={color ? color : '#F62064'}
            />
        </svg>
    );
};

export default ArrowUpIcon;
