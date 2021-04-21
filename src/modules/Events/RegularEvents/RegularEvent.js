import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "../../../components/ImageContainer/ImageContainer";
import "./RegularEvent.css";
function RegularEvent(props) {
  return (
    <Link to={`/regularevents/${props.id}`}>
      <div className="regular_event">
        <h4>{props.name}</h4>
        <p>regular event id is{props.id}</p>
        <div className="regular_event_body">
          <div className="regular_event_image">
            <ImageContainer source={props.imageURL} altText={props.name} />
          </div>

          <div className="regular_event_text">
            <p className="regular_event_description">{props.description} </p>
            <p className="regular_event_day">{props.day} </p>
            <p className="regular_event_time">{props.time} </p>
          </div>
        </div>
      </div>
      //{" "}
    </Link>
  );
}

export default RegularEvent;
