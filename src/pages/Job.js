import React, { useContext } from "react";
import { MainDataContext } from "../data/MainDataContext";
import Loading from "../components/Loading/Loading";
import Venue from "../modules/Venue/Venue";
import JobsList from "../modules/Jobs/JobsList";
import JobDetail from "../modules/Jobs/JobDetail";

function Job() {
  const feedsCount = useContext(MainDataContext).mainState.feedsCount;
  const loadCount = useContext(MainDataContext).mainState.loadCount;
  console.log("feedsCount", feedsCount, "loadCount", loadCount);
  if (feedsCount !== loadCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          <div className="detail_column">
            <JobDetail />
          </div>

          <div className="info_column">
            <JobsList />
          </div>
          <div className="info_column">
            <Venue />
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
