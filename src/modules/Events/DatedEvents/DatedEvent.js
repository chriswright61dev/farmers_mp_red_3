import React from "react";
import { Link } from "react-router-dom";
import "./DatedEvent.css";
import { DateFormat } from "../../../utilities/utilities";

function DatedEvent(props) {
  // console.log("DatedEvent props", props);

  const theDateData = DateFormat(props.date);

  return (
    <Link to={`/events/${props.id}`}>
      <div className="dated_event">
        <h4>{props.name}</h4>
        <div className="dated_event_body">
          <div className="dated_event_image">
            <img src={props.imageURL} alt={props.name} />
          </div>

          <div className="dated_event_text">
            <p>dated event id is{props.id}</p>
            <p className="dated_event_date">
              {theDateData.dayofweek} {theDateData.daysuffix}{" "}
              {theDateData.month} {theDateData.ampm}
            </p>
            <p className="dated_event_description">{props.description} </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DatedEvent;
