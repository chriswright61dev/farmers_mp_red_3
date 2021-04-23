import React, { useContext } from "react";
import "./PastEvents.css";
import { MainDataContext } from "../data/MainDataContext";
import Loading from "../components/Loading/Loading";
import Venue from "../modules/Venue/Venue";
import OldEvents from "../modules/Events/OldEvents/OldEvents";

function PastEvents() {
  const feedCount = useContext(MainDataContext).mainState.feedsCount;
  const allLoaded = useContext(MainDataContext).mainState.loadCount;

  if (allLoaded !== feedCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          <h3>These event have passed and are for reference only</h3>
          <div className="flexy_column">
            <OldEvents />
          </div>
          <div className="info_column">
            <Venue />
          </div>
        </div>
      </div>
    );
  }
}

export default PastEvents;
