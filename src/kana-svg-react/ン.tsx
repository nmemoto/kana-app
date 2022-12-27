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
        <path d="M26.5 24.88c5.76 2.15 12.68 8.47 15.75 14.25M28.62 83.75c2.5 1.62 5.12.96 7.75-.62C56.5 71 71.37 58.5 86 42" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(22.37 22.13)">{"1"}</text>
          <text transform="translate(22.5 76.13)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
