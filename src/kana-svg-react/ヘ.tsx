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
        d="M15.5 49.02c2.78 1.55 5.39.64 6.95-.9 4.05-4.01 9.47-8.3 12-10.88 3.16-3.23 7.32-5.26 12.01-1.16 11.25 9.82 25.03 21.45 35.78 30.36 4.28 3.55 7.71 6.85 11.25 9.56"
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
          transform="translate(11.76 43.63)"
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
