const PauseIcon = ({ size }: { size: string }) => {
  const width = size === "small" ? "9px" : "13px";
  const height = size === "small" ? "14px" : "19px";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.87182 0.15625C1.74322 0.15625 0.828735 1.07114 0.828735 2.19933V16.8993C0.828735 18.0283 1.74322 18.9424 2.87182 18.9424C4.00042 18.9424 4.9149 18.0279 4.9149 16.8993V2.19933C4.9149 1.07073 4.00083 0.15625 2.87182 0.15625Z"
        fill="#FFC02B"
      />
      <path
        d="M10.2269 0.15625C9.09831 0.15625 8.18382 1.07114 8.18382 2.19933V16.8993C8.18382 18.0279 9.09831 18.9424 10.2269 18.9424C11.3555 18.9424 12.27 18.0279 12.27 16.8993V2.19933C12.27 1.07114 11.3555 0.15625 10.2269 0.15625Z"
        fill="#FFC02B"
      />
    </svg>
  );
};

export default PauseIcon;
