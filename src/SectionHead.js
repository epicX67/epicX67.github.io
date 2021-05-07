import React from "react";
import "./styles/SectionHead.scss";

export default function SectionHead({ sectionName }) {
  return (
    <div className="sectionHead">
      <p>{sectionName}</p>
    </div>
  );
}
