import React from "react";

const Line25 = () => {
  return (
    <svg
      className="absolute top-[311px] left-[480px]"
      width={5}
      height={259}
      viewBox="0 0 5 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_222_278)">
        <line x1={2.5} y1={2} x2={2.49998} y2={257} stroke="#969595" strokeOpacity={0.16} />
      </g>
      <defs>
        <filter
          id="filter0_f_222_278"
          x={0}
          y={0}
          width={5}
          height={259}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={1} result="effect1_foregroundBlur_222_278" />
        </filter>
      </defs>
    </svg>
  );
};

export default Line25;