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
        <path d="M15 48.75c2.25 1.62 4.67 1.96 7-.38 3.62-3.62 7.46-6.54 11.25-10.5 5.5-5.75 8.48-4.75 13.12-.88 12.12 10.12 30.38 25.12 33.38 27.38 3 2.26 12.38 10.38 13.88 11.63M73.63 36.75c-9.62 0-9.25-14.25 0-14.25 9.75 0 9.5 14.25 0 14.25" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(9.88 42.75)">{"1"}</text>
          <text transform="translate(65.63 43)">{"2"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
