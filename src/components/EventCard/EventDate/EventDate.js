import React from "react";
import { DateFormat } from "../../../utilities/utilities";
import "./EventDate.css";
function EventDate(props) {
  const theDateData = DateFormat(props.date);

  return (
    <h5 className="event_card_date">
      {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month} at{" "}
      {theDateData.ampm}
    </h5>
  );
}

export default EventDate;
