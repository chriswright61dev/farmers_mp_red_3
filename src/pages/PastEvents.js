import React, { useContext } from "react";
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
          <div className="info_column">
            'This should be a list of old events'
            <OldEvents />
          </div>
          <div className="info_column">' stuff'</div>

          <div className="info_column">' stuff'</div>

          <div className="info_column">
            <Venue />
          </div>
        </div>
      </div>
    );
  }
}

export default PastEvents;
