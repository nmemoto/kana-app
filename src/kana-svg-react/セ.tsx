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
        <path d="M17 49.38c3.12 1.5 5.04 2.18 8.62 1.38 23.5-5.25 31.24-7.43 50.62-11.62 23.12-5 6.5 7.75-3.25 18.12" />
        <path d="M42.38 19.5c2 2.25 2.15 3.5 2.12 6.62-.12 17.5-.88 31.75-.88 41.12 0 14 3.13 16.99 12.38 17.12 8.38.12 14.12.12 18 .12 3.88 0 7.5-.5 10.5-1.12" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(13.51 45.13)">{"1"}</text>
          <text transform="translate(34.13 17.63)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
