import React from "react";

const Line1 = () => {
  return (
    <svg
      className="absolute top-[43px] left-[940px]"
      width={1}
      height={42}
      viewBox="0 0 1 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_217_394)">
        <line
          x1={0.5}
          y1={2.18557e-8}
          x2={0.499998}
          y2={42}
          stroke="#969595"
          strokeOpacity={0.17}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_217_394"
          x={-4}
          y={-4}
          width={9}
          height={50}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_217_394" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_217_394"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Line1;