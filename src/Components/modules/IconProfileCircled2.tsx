import React from "react";
import { logout } from "../../action/Auth/action";

const IconProfileCircled2 = () => {
  return (
    <svg
      className="w-[33px] h-[33px] top-[47px] left-[950px] absolute"
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={logout}
    >
      <path
        d="M17.5 1C8.3873 1 1 8.3873 1 17.5C1 26.6126 8.3873 34 17.5 34C26.6126 34 34 26.6126 34 17.5C34 8.3873 26.6126 1 17.5 1Z"
        stroke="#969595"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.74719 27.9703C4.74719 27.9703 8.42508 23.2749 17.5 23.2749C26.575 23.2749 30.2531 27.9703 30.2531 27.9703"
        stroke="#969595"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 17.5001C20.2339 17.5001 22.45 15.284 22.45 12.5501C22.45 9.8163 20.2339 7.60011 17.5 7.60011C14.7662 7.60011 12.55 9.8163 12.55 12.5501C12.55 15.284 14.7662 17.5001 17.5 17.5001Z"
        stroke="#969595"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconProfileCircled2;
