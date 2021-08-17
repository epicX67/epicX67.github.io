import React from "react";

export default function WebsiteCard({ coverUrl, url, name }) {
  return (
    <div className="mContainer">
      <img className="cover" src={coverUrl} alt="cover" />
      <div className="sContainer">
        <h1>{name}</h1>
        <a target="_blank" rel="noreferrer" href={url} className="urlbtn">
          <i className="ri-arrow-right-s-line"></i>
        </a>
      </div>
    </div>
  );
}
