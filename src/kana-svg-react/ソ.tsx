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
        <path d="M23.5 25.5c3.92 4.1 7.71 9.93 10.75 17.88M83.5 21c1.25 2.5 1.3 4.44.12 8.5C77.75 49.88 57.38 79 38 90.75" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(20.5 22.38)">{"1"}</text>
          <text transform="translate(74.13 19.5)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
