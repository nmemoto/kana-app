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
        <path d="M67.75 32.78c.1 1.39-.27 3.07-1.28 4.37C58.49 47.39 47.75 60.7 30.5 71.23M57.19 54.22c.81.92 1.02 2.46 1.02 3.79v27.87c0 1.54-.1 7.48-.1 9.63" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(60.25 32)">{"1"}</text>
          <text transform="translate(51 64.38)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
