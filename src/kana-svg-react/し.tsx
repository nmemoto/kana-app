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
      <path
        d="M39.12 17.5c1.25 3.12.93 6.74.38 10.25-2.12 13.5-3 26.5-3 39.12 0 27.38 19.88 30.12 45.5 17.25"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
      {isShownNum && (
        <text
          transform="translate(30.87 14.13)"
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          {"1"}
        </text>
      )}
    </svg>
  );
};
export default Svg;
