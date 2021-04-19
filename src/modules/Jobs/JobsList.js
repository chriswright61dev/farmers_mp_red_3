import React, { useContext } from "react";
import "./JobsList.css";
import { MainDataContext } from "../../data/MainDataContext";
import JobsShort from "./JobsShort";
function JobsList() {
  const allData = useContext(MainDataContext);
  const jobsdata = allData.mainState.jobsData;

  if (!jobsdata) {
    return "jobs loading";
  } else {
    return (
      <div className="jobslist">
        {jobsdata.map((job) => {
          return (
            <JobsShort
              key={job.id}
              job_id={job.id}
              title={job.job_title}
              description={job.job_short_description}
              // body={job.job_body}
            />
          );
        })}
      </div>
    );
  }
}
export default JobsList;
