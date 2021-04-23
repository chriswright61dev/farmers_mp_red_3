import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RegularEventDetail from "./RegularEventDetail/RegularEventDetail";
function RegularEventDetails() {
  let { event_id } = useParams();
  let baseUrl =
    "http://levenshulmelife.com/drupal9/api_event_regular_farmers/?event_id=";

  const [eventState, setEventState] = useState({
    loading: false,
    eventData: [],
    used_event_id: [],
    currentEventData: [],
  });

  useEffect(() => {
    let tempEventData = eventState.eventData;
    // have we looked at this data before
    let used_event = eventState.used_event_id;
    let used = used_event.includes(event_id);
    if (used) {
      // we need to get the data from before
      // so find the index of the array for that id
      let currentData = [];
      let dataIndex = eventState.eventData
        .map(function (e) {
          return e.id;
        })
        .indexOf(event_id);

      currentData.push(eventState.eventData[dataIndex]);
      setEventState({
        loading: false,
        eventData: tempEventData,
        used_event_id: used_event,
        currentEventData: currentData,
      });
    } else {
      // id not used so fetch it
      let tempCurrent = [];
      const eventUrl = baseUrl + event_id;

      fetch(eventUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((loadedData) => {
          tempEventData.push(loadedData[0]);
          tempCurrent.push(loadedData[0]);
          used_event.push(event_id);
          setEventState({
            currentEventData: tempCurrent,
            used_event_id: used_event,
            eventData: tempEventData,
            loading: false,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [event_id]);
  //rerun useEffect if new event id is selected

  let eventData = eventState.currentEventData;
  if (eventData) {
    return <RegularEventDetail data={eventData[0]} />;
  } else {
    return "loading";
  }
}

export default RegularEventDetails;
