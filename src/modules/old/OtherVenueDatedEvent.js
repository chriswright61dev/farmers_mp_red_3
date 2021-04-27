import React from "react";
import { Link } from "react-router-dom";
import "./OtherVenueDatedEvent.css";
import { DateFormat } from "../../utilities/utilities";

function OtherVenueDatedEvent(props) {
  // console.log("DatedEvent props", props);

  const theDateData = DateFormat(props.date);

  return (
    <Link to={`/events/${props.id}`}>
      <div className="other_venue_dated_event">
        <h3>{props.venue}</h3>
        <h4>{props.name}</h4>
        <div className="other_venue_dated_event_body">
          <div className="other_venue_dated_event_image">
            <img src={props.imageURL} alt={props.name} />
          </div>

          <div className="other_venue_dated_event_text">
            <p className="other_venue_dated_event_date">
              {theDateData.dayofweek} {theDateData.daysuffix}{" "}
              {theDateData.month} {theDateData.ampm}
            </p>
            <p className="other_venue_dated_event_description">
              {props.description}{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default OtherVenueDatedEvent;
