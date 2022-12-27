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
        <path d="M44 16.38c1.25 1.12 2.12 3.25 2.12 5.5v71M49.24 43.12c11.75 4.12 18.25 10.62 24.5 18.75" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(37.37 14.38)">{"1"}</text>
          <text transform="translate(52.25 39.5)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
