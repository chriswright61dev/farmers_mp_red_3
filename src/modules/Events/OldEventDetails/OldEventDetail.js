import React from "react";
// import "./EventDetail.css";
import { DateFormat } from "../../../utilities/utilities";
import ImageContainer from "../../../components/ImageContainer/ImageContainer";
function OldEventDetail(props) {
  const es = props.data;
  console.log("es", es);
  if (es) {
    const theDateData = DateFormat(es.event_date_long);
    return (
      <div className="dated_event_detail">
        <div className="dated_event_detail_text">
          <h2>
            This is an old Event that took place in {theDateData.month}{" "}
            {theDateData.year}
          </h2>

          <div
            className="event_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />
        </div>

        <h3>
          {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month} at{" "}
          {theDateData.ampm}
        </h3>
        <p>Admission was: {es.event_admission}</p>

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

export default OldEventDetail;
