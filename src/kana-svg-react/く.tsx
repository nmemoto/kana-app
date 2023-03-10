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
      <path
        d="M60.66 15c.5 1.62.35 5.44-1 7.38-6.75 9.62-14.3 19.08-18.62 24.5-4 5-3.79 7.03-.88 11 5.5 7.5 12.75 18.75 17.62 27.25 1.48 2.59 2.75 4.75 4.5 8.62"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
      {isShownNum && (
        <text
          transform="translate(53.66 12.38)"
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          {"1"}
        </text>
      )}
    </svg>
  );
};
export default Svg;
