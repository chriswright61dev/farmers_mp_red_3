import React from "react";
import "./EventDetail.css";
import { DateFormat } from "../../../../utilities/utilities";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
function EventDetail(props) {
  const currentVenue = props.currentVenue;
  const es = props.data;
  if (es) {
    const theDateData = DateFormat(es.event_date_long);
    return (
      <div className="dated_event_detail">
        <div className="dated_event_detail_text">
          {props.oldevent ? <p>This is an OLD event from </p> : null}
          <h3>
            {theDateData.month} {theDateData.year}
          </h3>

          <div
            className="event_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />

          <h3>
            {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month}{" "}
            at {theDateData.ampm}
          </h3>

          {/* We could be displaying from another venue */}
          {currentVenue === es.event_venue ? null : (
            <p>Venue: {es.event_venue}</p>
          )}
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
