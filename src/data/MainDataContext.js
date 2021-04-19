import React, { createContext, useEffect, useReducer } from "react";

export const MainDataContext = createContext();

function countProperties(obj) {
  // count properties of object
  // used for counting active feeds in the apiURL object

  let count = 0;

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) ++count;
  }

  return count;
}
function MainDataContextProvider(props) {
  // basic data needed

  const mainApiURL = {
    venue: "http://levenshulmelife.com/drupal9/api_venue_farmers/",
    news: "http://levenshulmelife.com/drupal9/api_news_farmers",
    drinks: "http://levenshulmelife.com/drupal9/api_drinks_farmers",
    events: "http://levenshulmelife.com/drupal9/api_events_farmers",
    regularEvents:
      "http://levenshulmelife.com/drupal9/api_regular_events_farmers",
    posterEvents:
      "http://levenshulmelife.com/drupal9/api_poster_events_farmers",
    otherVenueEvents:
      "http://levenshulmelife.com/drupal9/api_events_other_venue_farmers",
    foods: "http://levenshulmelife.com/drupal9/api_food_farmers",
    jobs: "http://levenshulmelife.com/drupal9/api_jobs_farmers",
  };

  //   oldEvents: "http://levenshulmelife.com/drupal9/api_events_old_farmers",

  function feedCounter(feedList) {
    const feedcount = countProperties(feedList);
    dispatch({ type: "FEEDS_COUNTED", value: feedcount });
  }

  function fetchData(dataName) {
    const url = mainApiURL[dataName];
    let correctedDataName = dataName.split(/(?=[A-Z])/).join("_");
    // console.log("correctedDataName", correctedDataName);
    const dispatchName1 = "ADD_" + correctedDataName.toUpperCase() + "_DATA";
    const dispatchName2 = correctedDataName.toUpperCase() + "_DATA_LOADED";
    fetch(url)
      .then((res) => res.json())
      .then((loadedData) => {
        dispatch({ type: dispatchName1, value: loadedData });
        dispatch({ type: dispatchName2 });
      });
  }

  function fetchDataSingle(dataName) {
    const url = mainApiURL[dataName];

    const dispatchName1 = "ADD_" + dataName.toUpperCase() + "_DATA";
    const dispatchName2 = dataName.toUpperCase() + "_DATA_LOADED";
    fetch(url)
      .then((res) => res.json())
      .then((loadedData) => {
        dispatch({ type: dispatchName1, value: loadedData[0] });
        dispatch({ type: dispatchName2 });
      });
  }

  function reducerfn(mainState, action) {
    switch (action.type) {
      case "ADD_VENUE_DATA": {
        return { ...mainState, venueData: action.value };
      }
      case "ADD_NEWS_DATA": {
        return { ...mainState, newsData: action.value };
      }
      case "ADD_EVENTS_DATA": {
        return { ...mainState, eventsData: action.value };
      }
      case "ADD_OTHER_VENUE_EVENTS_DATA": {
        return { ...mainState, otherVenueEventsData: action.value };
      }
      case "ADD_OLD_EVENTS_DATA": {
        return { ...mainState, oldEventsData: action.value };
      }
      case "ADD_REGULAR_EVENTS_DATA": {
        return { ...mainState, regularEventsData: action.value };
      }
      case "ADD_POSTER_EVENTS_DATA": {
        return { ...mainState, posterEventsData: action.value };
      }
      case "ADD_DRINKS_DATA": {
        return { ...mainState, drinksData: action.value };
      }
      case "ADD_FOODS_DATA": {
        return { ...mainState, foodsData: action.value };
      }
      case "ADD_JOBS_DATA": {
        return { ...mainState, jobsData: action.value };
      }
      case "VENUE_DATA_LOADED": {
        return {
          ...mainState,
          venueLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "NEWS_DATA_LOADED": {
        return {
          ...mainState,
          newsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "EVENTS_DATA_LOADED": {
        return {
          ...mainState,
          eventsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "OTHER_VENUE_EVENTS_DATA_LOADED": {
        return {
          ...mainState,
          otherVenueEventsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "OLD_EVENTS_DATA_LOADED": {
        return {
          ...mainState,
          oldEventsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "REGULAR_EVENTS_DATA_LOADED": {
        return {
          ...mainState,
          regularEventsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "POSTER_EVENTS_DATA_LOADED": {
        return {
          ...mainState,
          posterEventsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "DRINKS_DATA_LOADED": {
        return {
          ...mainState,
          drinksLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "FOODS_DATA_LOADED": {
        return {
          ...mainState,
          foodsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "JOBS_DATA_LOADED": {
        return {
          ...mainState,
          jobsLoaded: true,
          loadCount: mainState.loadCount + 1,
        };
      }
      case "FEEDS_COUNTED": {
        return {
          ...mainState,
          feedsCount: action.value,
        };
      }
      case "ALL_DATA_LOADED": {
        return { ...mainState, allLoaded: true };
      }

      default: {
        return { ...mainState };
      }
    }
  }

  const initialState = {
    venueLoaded: false,
    newsLoaded: false,
    posterEventsLoaded: false,
    eventsLoaded: false,
    regularEventsLoaded: false,
    otherVenueEventsLoaded: false,
    oldEventsLoaded: false,
    drinksLoaded: false,
    foodsLoaded: false,
    jobsLoaded: false,
    allLoaded: false,
    feedsCount: 0,
    loadCount: 0,
    venueData: [],
    newsData: [],
    eventsData: [],
    regularEventsData: [],
    posterEventsData: [],
    otherVenueEventsData: [],
    // oldEventsData: [],
    drinksData: [],
    foodsData: [],
    jobsData: [],
  };

  const [mainState, dispatch] = useReducer(reducerfn, initialState);

  useEffect(() => {
    feedCounter(mainApiURL);
  }, []);

  useEffect(() => {
    fetchDataSingle("venue");
  }, []);

  useEffect(() => {
    fetchData("news");
  }, []);

  useEffect(() => {
    fetchData("events");
  }, []);

  //   useEffect(() => {
  //     fetchData("oldEvents");
  //   }, []);

  useEffect(() => {
    fetchData("otherVenueEvents");
  }, []);

  useEffect(() => {
    fetchData("regularEvents");
  }, []);

  useEffect(() => {
    fetchData("posterEvents");
  }, []);

  useEffect(() => {
    fetchData("drinks");
  }, []);

  useEffect(() => {
    fetchData("foods");
  }, []);

  useEffect(() => {
    fetchData("jobs");
  }, []);

  return (
    <MainDataContext.Provider value={{ mainState }}>
      {props.children}
    </MainDataContext.Provider>
  );
}
export default MainDataContextProvider;
