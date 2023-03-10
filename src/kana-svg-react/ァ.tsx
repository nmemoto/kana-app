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
        <path d="M28 42.54c1.91 1.22 3.16 1.13 6.74.59 9.03-1.37 29.93-5.05 38.25-6.06 4.14-.5 6.33 2.36 2.08 5.47-5.35 3.91-10.4 7.43-18.42 12.52M51.55 54.18c.62 1.17.8 2.53.45 4.13-3.16 14.45-7.75 24.91-15.58 35.57" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(24.6 38.5)">{"1"}</text>
          <text transform="translate(42.97 54.5)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
