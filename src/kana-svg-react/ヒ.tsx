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
        <path d="M35.38 44.5c1.75 1.38 4.51 2.19 6.88 1.88C52.5 45 59.5 43.5 66.5 42.12c3.01-.59 7.12-1 9.38-.88" />
        <path d="M31 17.62c1.38 1.26 1.88 3.38 1.88 6.13S32 67.75 32 71c0 9.75 4 14.62 13.75 14.62 6 0 16.38.12 21.38 0s9.5-.62 13.5-1.5" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(36.88 41.88)">{"1"}</text>
          <text transform="translate(23.88 15.13)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
