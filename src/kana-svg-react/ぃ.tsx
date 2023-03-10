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
        <path d="M29 48.88c1.66 1.8 2.27 3.91 1.79 6.16-3.41 15.71-.09 26.55 7.29 34.39 5.04 5.35 3.91 2.61 4.55-4.32M69.38 53.62c7.95 6.66 14.98 15.57 15.5 28" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(23.51 48.38)">{"1"}</text>
          <text transform="translate(62.01 51.5)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
