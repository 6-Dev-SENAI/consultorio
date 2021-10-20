import React from "react";

import "./objetivo.css";

export default function Objetivo(props) {
  const { title, img } = props;

  return (
    <div className="obj-container">
      <div className="obj-img-container">
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
      <div className="obj-text-container">{props.children}</div>
    </div>
  );
}
