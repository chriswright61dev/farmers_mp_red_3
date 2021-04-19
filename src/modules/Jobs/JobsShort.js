import React from "react";
import "./JobsShort.css";
import { Link } from "react-router-dom";
function JobsShort(props) {
  // console.log("props in jobs short", props);
  return (
    <Link to={`/jobs/${props.job_id}`}>
      <div className="jobsListItem">
        <h3> {props.title}</h3>
        <p>{props.description}</p>
        <p>Click for details</p>
      </div>
    </Link>
  );
}

export default JobsShort;
