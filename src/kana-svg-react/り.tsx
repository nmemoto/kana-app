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
        <path d="M38.75 25.25c1.25 1.5 2.24 4.03 1.62 6.62-2.88 12.13-6.29 29.65-4.25 42.38 2 12.5 1.75-.75 5.62-6.25M69.37 18.75c2.25 2.12 2.88 4.12 2.88 6.5V61c0 16.5-5 25.75-12.62 33.12" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(30.37 25)">{"1"}</text>
          <text transform="translate(61.62 17)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
