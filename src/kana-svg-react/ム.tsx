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
        <path d="M53.84 22.5c.88 1.75.78 4.57-.38 6.88-9.25 18.38-16.19 30.96-25.25 45.75-3.75 6.12-3 8.38 4.38 7.12 7.38-1.26 46.62-8.12 49.62-8.88" />
        <path d="M72.21 60.12c6.88 6.38 13.62 14.88 16 25.38" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(45.71 21)">{"1"}</text>
          <text transform="translate(66.46 57.25)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
