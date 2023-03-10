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
        <path d="M73.38 19.12c.88 1.75.48 4.44-.38 6.88-7.75 22.12-21.75 47.62-45 62.88" />
        <path d="M39.51 39.5c16.54 7.76 32.12 18 38.5 30.88" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(64.26 16)">{"1"}</text>
          <text transform="translate(33.76 37.38)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
