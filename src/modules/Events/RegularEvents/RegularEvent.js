import React from "react";
import "./RegularEvent.css";
function RegularEvent(props) {
  return (
    <div className="regular_event">
      <h4>{props.name}</h4>
      <p>regular event id is{props.id}</p>
      <div className="regular_event_body">
        <div className="regular_event_image">
          <img src={props.imageURL} alt={props.name} />
        </div>

        <div className="regular_event_text">
          <p className="regular_event_description">{props.description} </p>
          <p className="regular_event_day">{props.day} </p>
          <p className="regular_event_time">{props.time} </p>
        </div>
      </div>
    </div>
  );
}

export default RegularEvent;
