const MailIcon = ({ size }: { size: string }) => {
  const width = size === "small" ? "20px" : "24px";
  const height = size === "small" ? "20px" : "24px";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V19H20V7.3L12 14.5L2 5.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20.007ZM4.434 5L12 11.81L19.566 5H4.434ZM0 15H8V17H0V15ZM0 10H5V12H0V10Z"
        fill="#2FBD57"
      />
    </svg>
  );
};

export default MailIcon;
