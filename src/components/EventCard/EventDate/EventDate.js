import React from "react";
import { DateFormat } from "../../../utilities/utilities";
function EventDate(props) {
  const theDateData = DateFormat(props.date);

  return (
    <p className="event_card_date">
      {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month} at{" "}
      {theDateData.ampm}
    </p>
  );
}

export default EventDate;
