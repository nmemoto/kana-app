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
        <path d="M39.12 17.25c1.25 3.12.93 6.74.38 10.25-2.12 13.5-3 26.5-3 39.12C36.5 94 56.38 96.74 82 83.87M64.24 27c2.75 1.75 6 5.38 7.75 8.5M70.62 22.12c3.06 1.57 6.68 4.82 8.62 7.62" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(30.87 13.88)">{"1"}</text>
          <text transform="translate(56.62 26)">{"2"}</text>
          <text transform="translate(62.75 20.88)">{"3"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
