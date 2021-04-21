import React from "react";
import { Link } from "react-router-dom";
import "./DatedEvent.css";
import { DateFormat } from "../../../utilities/utilities";
import ImageContainer from "../../../components/ImageContainer/ImageContainer";
function DatedEvent(props) {
  const theDateData = DateFormat(props.date);
  console.log("props", props);
  return (
    <Link to={`/events/${props.id}`}>
      <div className="dated_event">
        <h4>{props.name}</h4>
        <div className="dated_event_body">
          <div className="dated_event_image">
            <ImageContainer source={props.imageURL} altText={props.name} />
          </div>

          <div className="dated_event_text">
            <p>dated event id is{props.id}</p>
            <p className="dated_event_date">
              {theDateData.dayofweek} {theDateData.daysuffix}{" "}
              {theDateData.month} {theDateData.ampm}
            </p>
            <p className="dated_event_description">{props.description} </p>
            <p className="dated_event_admission">{props.admission} </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DatedEvent;
