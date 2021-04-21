import React from "react";
import ImageContainer from "../../../components/ImageContainer/ImageContainer";
import "./PosterEvent.css";
function PosterEvent(props) {
  return (
    <div className="poster-event">
      <ImageContainer source={props.imageURL} altText={props.name} />
    </div>
  );
}

export default PosterEvent;
