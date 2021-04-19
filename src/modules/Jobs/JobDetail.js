import React, { useContext } from "react";

import { MainDataContext } from "../../data/MainDataContext";
import { useParams } from "react-router-dom";
import "./JobDetail.css";

function JobDetail() {
  const allData = useContext(MainDataContext);
  const jobsdata = allData.mainState.jobsData;
  let { job_id } = useParams();

  if (jobsdata.length > 0) {
    const jbs = jobsdata.filter((job) => job.id === job_id)[0];

    return (
      <div className="jobsListItem">
        <h3> {jbs.job_title}</h3>
        <div
          className="jobsbody"
          dangerouslySetInnerHTML={{ __html: jbs.job_body }}
        />
      </div>
    );
  } else {
    return "jobs data loading";
  }
}

export default JobDetail;
