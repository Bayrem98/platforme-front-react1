import React from "react";

const Line2 = () => {
  return (
    <svg
      className="absolute top-[103px] left-[1270px]"
      width={25}
      height={1}
      viewBox="0 0 25 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_221_122)">
        <line y1={0.5} x2={25} y2={0.5} stroke="#969595" strokeOpacity={0.17} />
      </g>
      <defs>
        <filter
          id="filter0_b_221_122"
          x={-4}
          y={-4}
          width={33}
          height={9}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_221_122" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_221_122"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Line2;