import React from "react";

export default function SocialCard({ logo, heading, subtext, url }) {
  return (
    <div className="socialCard" initial="hidden" animate="show">
      <div className="mContainer">
        <h1>{heading}</h1>
        <p>{subtext}</p>
        <a href={url} target="blank" className="cardbtnContainer">
          <i className={`${logo} accM`}></i>
        </a>
      </div>
      <div className="lContainer">
        <i className={logo}></i>
      </div>
    </div>
  );
}
