import React from "react";
import "./EventDetail.css";
import { DateFormat } from "../../../../utilities/utilities";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
function EventDetail(props) {
  const es = props.data;
  console.log("es", es);
  if (es) {
    const theDateData = DateFormat(es.event_date_long);
    return (
      <div className="dated_event_detail">
        <div className="dated_event_detail_text">
          <h3>
            {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month}{" "}
            at {theDateData.ampm}
          </h3>
          <p>Admission: {es.event_admission}</p>
          <div
            className="event_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />
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
