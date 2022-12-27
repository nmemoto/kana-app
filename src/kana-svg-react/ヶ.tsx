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
        <path d="M43.63 36.96c.35 1.53.32 3.55-.47 5.22-3.88 8.28-7.4 15.8-15.16 24.59M41.15 52.82c1.71.7 3.34.83 5.32.4C56.61 51.01 66.95 49.3 75.18 48c2.9-.46 5.02-.6 7.43-.4M62.5 53.83c.35 1.53.4 3.43-.07 5.22-2.91 11.04-7.43 25.1-19.78 35.24" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(36.23 35.25)">{"1"}</text>
          <text transform="translate(46.36 49.63)">{"2"}</text>
          <text transform="translate(54.48 59.88)">{"3"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
