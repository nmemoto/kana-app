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
        <path d="M39.33 36.88c.38 1.14.46 2.88-.12 4.14C32.88 54.75 25.88 64.88 17 73.25M65.5 36.38c13 9.12 23.12 22.62 28 33.38" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(27.76 35)">{"1"}</text>
          <text transform="translate(58.51 33.75)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
