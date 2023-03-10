import React, { SVGProps } from "react";
const Svg = (props: SVGProps<SVGSVGElement>) => {
  const [isShownNum, setIsShownNum] = React.useState(true);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,109,109"
      onClick={() => setIsShownNum(!isShownNum)}
      {...props}
    >
      <g
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        <path d="M39.87 19.75c5.14 1.57 9.79 6.01 11.5 8.62M26 42.62c3.25.88 10.25 5.5 12.25 8.13M33 85c3.62 1.62 6.5.88 10.38-1.38C61.19 73.28 75.75 59.75 89.5 40.75M78.5 18.98c2.85 1.78 6.21 5.47 8.03 8.65M85.25 14.38c2.93 1.57 6.39 4.83 8.25 7.63" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(34 19.13)">{"1"}</text>
          <text transform="translate(23.38 38.63)">{"2"}</text>
          <text transform="translate(27.38 78.63)">{"3"}</text>
          <text transform="translate(71.13 17.13)">{"4"}</text>
          <text transform="translate(77.25 12)">{"5"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
