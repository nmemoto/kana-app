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
        <path d="M27 40.5c1.75.62 4.77 1.09 7.25.38C46 37.5 64.87 32.75 71.75 31c2.62-.67 6.75-1.12 9-1M19.5 65.8c2.28.84 6.24 1.18 9.46.17 17.79-5.59 32.67-9.09 49.17-12.99 3.43-.81 8.81-1.52 11.74-1.35" />
        <path d="M48.87 16.75c2.5 1.75 3.43 3.24 3.88 6.12 2.12 13.62 6.38 45.38 8.25 59.25.4 3 1 8.38 1.38 11.12" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(19.75 37.13)">{"1"}</text>
          <text transform="translate(17.13 61.13)">{"2"}</text>
          <text transform="translate(41 16.88)">{"3"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
