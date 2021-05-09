import React from "react";

export default function SocialCard({ logo, heading, subtext, url }) {
  const link = () => {
    const a = document.createElement("a");
    a.target = "blank";
    a.href = url;
    a.click();
  };
  return (
    <div className="socialCard" initial="hidden" animate="show">
      <div className="mContainer">
        <h1>{heading}</h1>
        <p>{subtext}</p>
        <div href={url} target="blank" className="cardbtnContainer">
          <i onClick={() => link()} className={`${logo} accM`}></i>
        </div>
      </div>
      <div className="lContainer">
        <i className={logo}></i>
      </div>
    </div>
  );
}
