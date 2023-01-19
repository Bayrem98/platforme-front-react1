import React from "react";

const MaskGroup = () => {
  return (
    <svg
      className="w-[448px] h-[173px]"
      style={{
        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
      }}
      width={452}
      height={173}
      viewBox="0 0 452 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_217_362)">
        <mask
          id="mask0_217_362"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={448}
          height={173}
        >
          <path
            d="M0 30C0 13.4315 13.4315 0 30 0H418C434.569 0 448 13.4315 448 30V143C448 159.569 434.569 173 418 173H30C13.4314 173 0 159.569 0 143V30Z"
            fill="#E5D16F"
          />
        </mask>
        <g mask="url(#mask0_217_362)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M420.5 46C439.554 46 455 30.5538 455 11.5C455 -7.55382 439.554 -23 420.5 -23C401.446 -23 386 -7.55382 386 11.5C386 30.5538 401.446 46 420.5 46ZM420.5 61C447.838 61 470 38.8381 470 11.5C470 -15.8381 447.838 -38 420.5 -38C393.162 -38 371 -15.8381 371 11.5C371 38.8381 393.162 61 420.5 61Z"
            fill="white"
            fillOpacity={0.36}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_217_362"
          x={367}
          y={0}
          width={85}
          height={69}
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
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_217_362" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_217_362"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MaskGroup;