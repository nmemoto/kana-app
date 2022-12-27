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
        <path d="M35 18.38c1.12 1.5 1.62 3 1.62 4.88v34.75M71 15.38c1.5 1.25 2.38 3.12 2.38 5.38s-.12 28.88-.12 32.88c0 19.62-9.5 32.25-21.75 40.38" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(28.62 15.88)">{"1"}</text>
          <text transform="translate(62 13.5)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
