import React, { useContext } from "react";
import { MainDataContext } from "../data/MainDataContext";
import Loading from "../components/Loading/Loading";
import Venue from "../modules/Venue/Venue";
import PosterEvents from "../modules/Events/PosterEvents/PosterEvents";
import DatedEvents from "../modules/Events/DatedEvents/DatedEvents";
import RegularEvents from "../modules/Events/RegularEvents/RegularEvents";
import OtherVenueEvents from "../modules/Events/OtherVenueEvents/OtherVenueEvents";
import OldEventsHere from "../modules/Events/OldEvents/OldEventsHere";
function Events() {
  const feedCount = useContext(MainDataContext).mainState.feedsCount;
  const allLoaded = useContext(MainDataContext).mainState.loadCount;

  if (allLoaded !== feedCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          <div className="info_column">
            <PosterEvents />
          </div>
          <div className="info_column">
            <DatedEvents />
            <RegularEvents />
          </div>
          <div className="info_column">
            <OldEventsHere />
            <OtherVenueEvents />
          </div>

          <div className="info_column">
            <Venue />
          </div>
        </div>
      </div>
    );
  }
}
export default Events;
