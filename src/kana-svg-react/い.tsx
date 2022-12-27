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
        <path d="M21.5 29.66c2.01 2.17 2.61 4.68 2.17 7.43-3.09 19.16-1.03 32.01 7.93 41.45 6.12 6.45 6.26 3.14 7.04-5.21M72.96 36.51c9.44 8.05 17.79 18.82 18.41 33.83" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(14.96 27.13)">{"1"}</text>
          <text transform="translate(62.21 32.88)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
