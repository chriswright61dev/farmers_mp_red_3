import React, { useState, useEffect } from "react";
import "./EventDetail.css";
import { useParams } from "react-router-dom";
import { DateFormat } from "../../../../utilities/utilities";

function EventDetail() {
  let { event_id } = useParams();

  const [eventState, setEventState] = useState({
    loading: false,
    eventData: [],
  });

  // console.log("eventState", eventState);

  // console.log(event_id);

  // function useAsync(asyncFn, onSuccess) {
  //   useEffect(() => {
  //     let isMounted = true;
  //     asyncFn().then(data => {
  //       if (isMounted) onSuccess(data);
  //     });
  //     return () => { isMounted = false };
  //   }, [asyncFn, onSuccess]);
  // }

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    setEventState({ loading: true });
    const eventUrl =
      "http://levenshulmelife.com/drupal9/api_event_farmers/?event_id=" +
      event_id;
    fetch(eventUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((loadedData) => {
        if (isMounted)
          setEventState({ loading: false, eventData: loadedData[0] });
        return () => {
          isMounted = false;
          console.log("isMounted", isMounted);
        }; // use effect cleanup to set flag false, if unmounted
      })
      .catch((error) => {
        console.log(error);
      });
  }, [event_id]);

  // useEffect(() => {
  //   setEventState({ loading: true });
  //   const eventUrl =
  //     "http://levenshulmelife.com/drupal9/api_event_farmers/?event_id=" +
  //     event_id;

  //   fetch(eventUrl)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Something went wrong");
  //       }
  //     })
  //     .then((loadedData) => {
  //       setEventState({
  //         loading: false,
  //         eventData: loadedData[0],
  //         // the api returns an array with one object in it
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [event_id]);

  let es = eventState.eventData;
  console.log("es", es);
  // console.log("es.length", es.length);
  if (es && es.length > 0) {
    const theDateData = DateFormat(es.event_date_long);
    return (
      <div className="dated_event_detail">
        dated event detail
        <div className="dated_event_detail_text"></div>
        <h3>
          {theDateData.dayofweek} {theDateData.daysuffix} {theDateData.month} at{" "}
          {theDateData.ampm}
        </h3>
      </div>
    );
  } else {
    // return null;
    return "not working";
  }
}

export default EventDetail;
