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
        <path d="M36.22 52.7c1.84.56 4.08.53 5.93.24 6.8-1.08 17.77-2.28 26.71-3.07 1.8-.16 3.59-.15 5.37.18M53.25 54.65c.79.9 1.04 2.4.99 3.7-.14 3.79-.4 10.3-.65 17.78-.06 1.85-.12 3.25-.18 5.19M26 84.03c2.71.7 6.01.65 8.73.29 14.11-1.84 27.4-2.86 40.12-2.89 2.65-.01 5.73.31 8.3 1.33" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(29.29 51.13)">{"1"}</text>
          <text transform="translate(46.16 61.25)">{"2"}</text>
          <text transform="translate(20.29 79.63)">{"3"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
