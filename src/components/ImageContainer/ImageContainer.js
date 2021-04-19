import React from "react";
import "./ImageContainer.css";
function ImageContainer(props) {
  return (
    <div className="ImageContainer">
      <img src={props.source} alt={props.altText} />
    </div>
  );
}

export default ImageContainer;
