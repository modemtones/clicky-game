import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={props.action} alt={props.id} src={props.imgSrc} />
    </div>
  </div>
);

export default ImageCard;
