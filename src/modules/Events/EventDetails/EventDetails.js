import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventDetail from "./EventDetail/EventDetail";
// get and store event details
function EventDetails() {
  // let used_event_id_array = [];
  let { event_id } = useParams();
  //   used_event_id_array.push(event_id);
  console.log("event_id", event_id);

  let singleEventUrl =
    "http://levenshulmelife.com/drupal9/api_event_farmers/?event_id=" +
    event_id;
  console.log("singleEventUrl", singleEventUrl);

  const [eventState, setEventState] = useState({
    loading: false,
    eventData: [],
  });

  useEffect(() => {
    let tempArray = eventState.eventData;

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
        tempArray.push(loadedData[0]);
        setEventState({
          loading: false,
          eventData: tempArray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [event_id]);

  let eventDataArray = eventState.eventData;

  //   get last item of the array
  if (eventDataArray) {
    let es = eventDataArray[eventDataArray.length - 1];
    // console.log("es in details", es);
    return <EventDetail data={es} />;
  } else {
    return "not working null";
  }
}

export default EventDetails;
