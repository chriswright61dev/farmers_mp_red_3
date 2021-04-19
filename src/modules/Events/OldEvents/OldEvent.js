import React from "react";
import { Link } from "react-router-dom";
import "./OldEvent.css";
import { DateFormat } from "../../../utilities/utilities";

function OldEvent(props) {
  const theDateData = DateFormat(props.date);

  return (
    // <Link to={`/pastevents/${props.id}`}>
    <Link to={`/pastevents/${props.id}`}>
      <div className="old_dated_event">
        <h4>{props.name}</h4>
        <h5>This event has passed. This is for reference only</h5>
        <div className="old_dated_event_body">
          <div className="old_dated_event_image">
            <img src={props.imageURL} alt={props.name} />
          </div>

          <div className="old_dated_event_text">
            <p className="old_dated_event_date">
              {theDateData.dayofweek} {theDateData.daysuffix}{" "}
              {theDateData.month} {theDateData.ampm}
            </p>
            <p className="old_dated_event_description">{props.description} </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default OldEvent;
