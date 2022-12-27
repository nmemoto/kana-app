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
        <path d="M39.87 19.75c5.14 1.57 9.79 6.01 11.5 8.62M26 42.62c3.25.88 10.25 5.5 12.25 8.13M33 85c3.75.88 7.12.49 10.38-1.38C61.25 73.38 75.75 59.75 89.5 40.75" />
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
        </g>
      )}
    </svg>
  );
};
export default Svg;
