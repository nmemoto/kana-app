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
        <path d="M14 44.75c1.88 1.62 4.68 2.09 8.12.62C40 37.75 52.12 34.25 67 34.49c12.56.21 22.98 7.17 22.87 19.17-.18 18.77-24.75 28.71-45.01 32.08M81 18c2.75 1.75 6 5.38 7.75 8.5M87.38 13.12c3.06 1.57 6.68 4.82 8.62 7.62" />
      </g>
      {isShownNum && (
        <g
          style={{
            fontSize: 8,
            fill: "gray",
          }}
        >
          <text transform="translate(9.38 40.38)">{"1"}</text>
          <text transform="translate(73.38 17)">{"2"}</text>
          <text transform="translate(79.51 11.88)">{"3"}</text>
        </g>
      )}
    </svg>
  );
};
export default Svg;
