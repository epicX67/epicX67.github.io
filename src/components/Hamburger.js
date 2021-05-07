import React from "react";

export default function Hamburger({ show, onClick }) {
  return show ? (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hamburger"
      onClick={onClick}
    >
      <rect
        x="26.5078"
        y="34"
        width="55.2"
        height="8"
        rx="4"
        transform="rotate(26 26.5078 34)"
      />
      <path d="M36.6889 61.626C35.1823 60.0103 35.2707 57.4792 36.8864 55.9726L56.7792 37.4222C58.3948 35.9156 60.926 36.004 62.4326 37.6196V37.6196C63.9392 39.2353 63.8508 41.7664 62.2352 43.273L42.3423 61.8234C40.7267 63.33 38.1956 63.2416 36.6889 61.626V61.626Z" />
    </svg>
  ) : (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hamburger"
      onClick={onClick}
    >
      <rect x="22" y="36" width="55.2" height="8" rx="4" />
      <path d="M42 59.5C42 57.2909 43.7909 55.5 46 55.5H73.2C75.4091 55.5 77.2 57.2909 77.2 59.5V59.5C77.2 61.7091 75.4091 63.5 73.2 63.5H46C43.7909 63.5 42 61.7091 42 59.5V59.5Z" />
    </svg>
  );
}
