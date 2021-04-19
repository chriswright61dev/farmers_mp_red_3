import React, { useContext } from "react";
import { MainDataContext } from "../data/MainDataContext";

import Loading from "../components/Loading/Loading";
import Venue from "../modules/Venue/Venue";
import VenueAbout from "../modules/Venue/VenueAbout";
import VenueOpeningTimes from "../modules/Venue/VenueOpeningTimes";
import News from "../modules/News/News";
import Foods from "../modules/Foods/Foods";
import DrinksDraughtOffers from "../modules/Drinks/DrinksDraughtOffers/DrinksDraughtOffers";
import PosterEvents from "../modules/Events/PosterEvents/PosterEvents";
import RegularEvents from "../modules/Events/RegularEvents/RegularEvents";
import DatedEvents from "../modules/Events/DatedEvents/DatedEvents";
import SportsEvents from "../modules/Events/SportsEvents/SportsEvents";
// import JobsList from "../modules/Jobs/JobsList";
import VenueMap from "../modules/Venue/VenueMap";
import VenueStreetView from "../modules/Venue/VenueStreetView";

function Home() {
  const feedsCount = useContext(MainDataContext).mainState.feedsCount;
  const loadCount = useContext(MainDataContext).mainState.loadCount;

  if (feedsCount !== loadCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          <div className="info_column">
            <Venue />
            <News />
            <VenueOpeningTimes />
            <VenueAbout />
          </div>
          <div className="info_column">
            <DrinksDraughtOffers />
          </div>
          <div className="info_column">
            <PosterEvents />
            <DatedEvents />
            <RegularEvents />
          </div>
          <div className="info_column">
            <SportsEvents />
            <Foods />
          </div>
          <VenueMap />
          <VenueStreetView />
        </div>
      </div>
    );
  }
}

export default Home;
