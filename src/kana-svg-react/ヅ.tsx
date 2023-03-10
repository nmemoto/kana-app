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
        <path d="M21.5 30.62c2.38 3 5 9.38 5.38 13.88M45.87 23c3.38 3.5 6.62 9.5 7 14.88M84.62 27.62c.75 2.25.39 5.26-.75 8C76.24 54 62.62 77 37.87 88.38M86.5 14.58c2.61 1.91 5.7 5.88 7.36 9.3M92.68 9.62c2.73 1.8 5.95 5.53 7.69 8.75" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(16.62 27.13)">{"1"}</text>
          <text transform="translate(38.75 20.88)">{"2"}</text>
          <text transform="translate(75.62 25.75)">{"3"}</text>
          <text transform="translate(79.5 12.88)">{"4"}</text>
          <text transform="translate(85.37 8)">{"5"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
