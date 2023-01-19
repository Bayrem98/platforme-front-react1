import React from "react";

const Rectangle73 = () => {
  return (
    <svg
      className="absolute top-[180px] left-[830px]"
      width={440}
      height={181}
      viewBox="0 0 456 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_217_365)">
        <path
          d="M4 30C4 13.4315 17.4315 0 34 0H422C438.569 0 452 13.4315 452 30V143C452 159.569 438.569 173 422 173H34C17.4314 173 4 159.569 4 143V30Z"
          fill="#E5D16F"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_217_365"
          x={0}
          y={0}
          width={456}
          height={181}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_217_365"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_217_365"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Rectangle73;
