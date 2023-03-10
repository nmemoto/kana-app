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
        <path d="M23.5 26.65c3.83 4.02 7.54 9.72 10.5 17.5M83 21.9c1.25 2.5 1.3 4.44.12 8.5-5.87 20.37-26.24 49-45.62 60.75M86.25 10.65c2.75 1.75 6 5.38 7.75 8.5M92.62 5.77c3.06 1.57 6.68 4.82 8.62 7.62" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(20 22.77)">{"1"}</text>
          <text transform="translate(73.63 21.77)">{"2"}</text>
          <text transform="translate(78.63 9.65)">{"3"}</text>
          <text transform="translate(84.75 5.27)">{"4"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
