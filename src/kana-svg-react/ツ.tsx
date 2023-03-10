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
        <path d="M21.5 31.38c2.38 3 4.5 9.38 4.88 13.88M45.62 23.75c3.38 3.5 6.62 9.5 7 14.88M84.62 27.88c.75 2.25.39 5.26-.75 8-7.63 18.37-21.25 41.12-46 52.5" />
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
        </g>
      )}
    </svg>
  );
};
export default Svg;
