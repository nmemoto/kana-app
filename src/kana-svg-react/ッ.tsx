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
        <path d="M29 51.88c1.89 2.42 3.59 7.57 3.89 11.2M48.24 45.73c2.69 2.83 5.28 7.67 5.58 12.01M79.34 49.8c.6 1.82.31 4.24-.6 6.46-6.08 14.83-16.95 32.44-36.68 41.62" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(24.26 48.38)">{"1"}</text>
          <text transform="translate(41.13 45.88)">{"2"}</text>
          <text transform="translate(70.76 48.88)">{"3"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
