import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.imgSrc} />
    </div>
  </div>
);

export default ImageCard;
