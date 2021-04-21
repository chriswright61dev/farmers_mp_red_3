import React, { useContext } from "react";
import { MainDataContext } from "../data/MainDataContext";
import Loading from "../components/Loading/Loading";
import Venue from "../modules/Venue/Venue";
import DatedEvents from "../modules/Events/DatedEvents/DatedEvents";
import RegularEvents from "../modules/Events/RegularEvents/RegularEvents";
import RegularEventDetails from "../modules/Events/RegularEventDetails/RegularEventDetails";

function RegularEvent() {
  const feedsCount = useContext(MainDataContext).mainState.feedsCount;
  const loadCount = useContext(MainDataContext).mainState.loadCount;

  if (feedsCount !== loadCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          <div className="detail_column">
            <RegularEventDetails />
          </div>
          <div className="info_column">
            <DatedEvents />
            <RegularEvents />
          </div>
          <div className="info_column">
            <Venue />
          </div>
        </div>
      </div>
    );
  }
}

export default RegularEvent;
