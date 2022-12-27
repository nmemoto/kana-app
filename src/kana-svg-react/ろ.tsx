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
        d="M36.95 21.88c1.5 2 4.62 3.62 8.5 2.5s8.12-2.25 14.12-4.38 6.53-.1 3.38 4.25c-7.88 10.88-18 22.75-27.5 35.25-7.49 9.86-10.68 11.32 2.88 2.25 17.38-11.62 46.62-14 46.62 8.12 0 15.62-16 22.5-32.12 25.12"
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
          transform="translate(31.08 19.38)"
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
