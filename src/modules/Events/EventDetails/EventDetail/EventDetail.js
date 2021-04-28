import React from "react";
import "./EventDetail.css";
import { DateFormat } from "../../../../utilities/utilities";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import OldEventDate from "./OldEventDate/OldEventDate";
import EventDate from "./EventDate/EventDate";
function EventDetail(props) {
  const currentVenue = props.currentVenue;
  const es = props.data;
  if (es) {
    const theDateData = DateFormat(es.event_date_long);
    return (
      <div className="dated_event_detail">
        <div className="dated_event_detail_text">
          {props.oldevent ? (
            <OldEventDate date={theDateData} />
          ) : (
            <EventDate date={theDateData} />
          )}

          {/* We could be displaying from another venue */}
          {currentVenue === es.event_venue ? null : (
            <h4 className="venue_name"> at {es.event_venue}</h4>
          )}

          <div
            className="event_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />

          <p>Admission: {es.event_admission}</p>
        </div>

        <div className="dated_event_detail_images">
          <ImageContainer source={es.event_poster_original} altText={es.name} />
          <ImageContainer source={es.event_image_1} altText={es.name} />
          <ImageContainer source={es.event_image_2} altText={es.name} />
          <ImageContainer source={es.event_image_3} altText={es.name} />
        </div>
      </div>
    );
  } else return null;
}

export default EventDetail;
