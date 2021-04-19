import React, { useContext } from "react";
import { MainDataContext } from "../data/MainDataContext";
import Loading from "../components/Loading/Loading";

import Venue from "../modules/Venue/Venue";

import JobsList from "../modules/Jobs/JobsList";

function Jobs() {
  const feedCount = useContext(MainDataContext).mainState.feedsCount;
  const allLoaded = useContext(MainDataContext).mainState.loadCount;

  if (allLoaded !== feedCount) {
    return <Loading />;
  } else {
    return (
      <div className="theme_dark">
        <div className="container">
          {/* <div className="jobs_list_column"> */}
          <div className="detail_column">
            <JobsList />
          </div>
          <div className="info_column">'more stuff here'</div>{" "}
          <div className="info_column">
            <Venue />
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
