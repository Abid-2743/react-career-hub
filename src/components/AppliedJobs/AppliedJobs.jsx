import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApplied, setJobsApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(jobsApplied); // Use state variable jobsApplied
    } else if (filter === "remote") {
      const remoteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === "Remote" // Corrected spelling
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storeJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const appliedJobs = [];
      for (const id of storeJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }
      setJobsApplied(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className="text-2xl">Jobs I applied: {jobsApplied.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} at {job.company_name}: {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
