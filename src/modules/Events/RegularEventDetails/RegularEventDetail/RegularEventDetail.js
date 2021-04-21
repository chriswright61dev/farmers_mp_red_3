import React from "react";
import "./RegularEventDetail.css";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";

function RegularEventDetail(props) {
  const es = props.data;
  console.log("es", es);
  if (es) {
    return (
      <div className="regular_event_detail">
        <div className="regular_event_detail_text">
          <h3>{es.title}</h3>
          <h4>
            Every {es.event_regular_day} at {es.event_regular_time}
          </h4>
          <p>{es.event_description}</p>

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

export default RegularEventDetail;
