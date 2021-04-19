import React, { useContext } from "react";
import "./OldEventDetail.css";
import { MainDataContext } from "../../../data/MainDataContext";
import { useParams } from "react-router-dom";
import { DateFormat } from "../../../utilities/utilities";

function OldEventDetail() {
  const oed = useContext(MainDataContext).mainState.oldEventsData;
  console.log("old events oed", oed);
  let { past_event_id } = useParams();
  console.log("params", past_event_id);
  if (oed.length > 0) {
    // console.log("params", past_event_id);
    // params undefined

    // event id
    const es = oed.filter((past_event) => past_event.id === past_event_id)[0];
    // the parameter id from match
    console.log("old events es", es);
    const theDateData = DateFormat(es.event_date_long);
    return (
      <div className="old_dated_event_detail">
        <div className="old_dated_event_detail_text">
          <h3>
            {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month}{" "}
            at {theDateData.ampm}
          </h3>
          {/* {es.id} */}
          <h3>{es.event_name}</h3>
          {/* <p>{theDateData}</p> */}

          {/* {es.event_description} */}
          <div
            className="old_dated_event_detail_body"
            dangerouslySetInnerHTML={{ __html: es.event_body }}
          />
        </div>
        <div className="old_dated_event_detail_images">
          <img
            src={es.event_poster_220_medium}
            alt={es.event_name.name + " poster"}
          />

          {es.event_image_1 ? (
            <img src={es.event_image_1} alt={es.event_name.name + " image 1"} />
          ) : null}
          {es.event_image_2 ? (
            <img src={es.event_image_2} alt={es.event_name.name + " image 2"} />
          ) : null}
          {es.event_image_3 ? (
            <img src={es.event_image_3} alt={es.event_name.name + " image 3"} />
          ) : null}
          {/* <img src={es.event_image_2} alt={es.event_name.name + " image 2"} /> */}
          {/* <img src={es.event_image_3} alt={es.event_name.name + " image 3"} /> */}
        </div>
        ​​
      </div>
    );
  } else {
    return null;
  }
}

export default OldEventDetail;
