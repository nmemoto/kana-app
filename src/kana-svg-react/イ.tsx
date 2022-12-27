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
        <path d="M69.75 16.75c.12 1.75-.34 3.86-1.62 5.5C58 35.12 44.38 51.88 22.5 65.12M56.38 43.88c1 1.12 1.25 3 1.25 4.62v34.62c0 1.87-.13 9.13-.13 11.76" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(61.13 15.13)">{"1"}</text>
          <text transform="translate(50.75 53.63)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
