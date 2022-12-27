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
        <path d="M28.12 35c3 1.25 5.87 1.17 8.75.88 14.88-1.5 25.25-2.5 40.25-4 3.73-.37 6.88 0 8.88.38M38.62 38.88c1 1.38 1.22 2.75 1.12 4.38-.5 8.25-1.12 15.12-1.5 20M18 65.25c2.5.88 5.25 1.03 8.62.5 23-3.62 38.88-5.12 57.25-5.5 4.76-.1 8.75.5 12 1.62" />
        <path d="M60.12 14.38c2 1.62 2.75 3.5 2.75 6.12v73.26" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(19.87 32.13)">{"1"}</text>
          <text transform="translate(31.87 45.5)">{"2"}</text>
          <text transform="translate(15.5 60.5)">{"3"}</text>
          <text transform="translate(52.62 13.38)">{"4"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
