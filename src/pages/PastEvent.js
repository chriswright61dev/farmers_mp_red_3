import React, { useContext } from "react";
import { MainDataContext } from "../data/MainDataContext";
import Loading from "../components/Loading/Loading";
import Venue from "../modules/Venue/Venue";
import OldEvents from "../modules/Events/OldEvents/OldEvents";
import OldEventDetails from "../modules/Events/OldEventDetails/OldEventDetails";
function PastEvent() {
  const feedsCount = useContext(MainDataContext).mainState.feedsCount;
  const loadCount = useContext(MainDataContext).mainState.loadCount;

  if (feedsCount !== loadCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          <div className="detail_column">
            'this is where the details are'
            <OldEventDetails />
          </div>
          <div className="info_column">
            a list of old events
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

export default PastEvent;
