import React from "react";

export default function Motion() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 300V0L150 150L300 0V300L225 225L150 300L75 225L0 300Z"
        fill="url(#paint0_angular)"
      />
      <defs>
        <radialGradient
          id="paint0_angular"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(150 150) rotate(10) scale(150)"
        >
          <stop offset="0.119792" stopColor="#5E81FF" />
          <stop offset="1" stopColor="#65DBB4" />
        </radialGradient>
      </defs>
    </svg>
  );
}
