import React from "react";
import "./PosterEvent.css";
function PosterEvent(props) {
  return (
    <div className="poster-event">
      <img src={props.imageURL} alt={props.name} />
    </div>
  );
}

export default PosterEvent;
