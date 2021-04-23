import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RegularEventDetail from "./RegularEventDetail/RegularEventDetail";
function RegularEventDetails() {
  let { event_id } = useParams();
  // console.log("event_id", event_id);

  // let singleEventUrl =
  //   "http://levenshulmelife.com/drupal9/api_regular_event_farmers/?event_id=" +
  //   event_id;
  // console.log("singleEventUrl", singleEventUrl);

  const [eventState, setEventState] = useState({
    loading: false,
    eventData: [],
  });

  useEffect(() => {
    // let tempArray = eventState.eventData;

    setEventState({ loading: true });
    const eventUrl =
      "http://levenshulmelife.com/drupal9/api_event_regular_farmers/?event_id=" +
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
        // tempArray.push(loadedData[0]);
        setEventState({
          loading: false,
          //   eventData: tempArray,
          eventData: loadedData[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [event_id]);

  //   let eventDataArray = eventState.eventData;
  let es = eventState.eventData;

  if (es) {
    return <RegularEventDetail data={es} />;
  } else {
    return "not working null";
  }
}

export default RegularEventDetails;
