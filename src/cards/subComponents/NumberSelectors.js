import React from "react";

export default function NumberSelectors({ onClick, number, active = false }) {
  return (
    <div onClick={onClick} className={active ? "number-active" : ""}>
      {number}
    </div>
  );
}
