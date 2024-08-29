import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import { FaAngleDown } from "react-icons/fa6";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApplied, setJobsApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(jobsApplied);
    } else if (filter === "remote") {
      const remoteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === "Remote"
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
      <h2 className="md:text-5xl text-2xl md:my-20 my-10 text-center">Applied Jobs</h2>
      <div className="text-end">
        <details className="dropdown">
          <summary className="btn m-1">
            Filter By <FaAngleDown />
          </summary>
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
      </div>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <div className="card lg:card-side md:h-52 justify-between bg-base-200 md:mt-5 mt-8 shadow-xl">
             
                <div className="md:flex flex-none items-center gap-10 p-5">
                  <div> <figure>
                <img className="w-auto h-auto md:w-48 md:h-auto  mx-auto object-cover"
                  src={job.logo || "https://via.placeholder.com/150"} // Placeholder or default image
                  alt={`${job.job_title} at ${job.company_name}`}
                />
              </figure></div>
                  <figure className="md:flex flex-row-reverse max-w-5xl  rounded-xl p-8 md:p-0 ">
                    <div ClassName="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <blockquote>
                        <p className="text-lg font-medium ">
                          {job.job_title}
                        </p>
                      </blockquote>
                      <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                          {job.company_name}
                        </div>
                        <div className="flex w-60 text-slate-700 ">
                        <p className="">{job.remote_or_onsite}</p>
                        <p>{job.job_type}</p>
                        </div>
                        <div className="flex w-72"><p>{job.location}</p> <p>{job.salary}</p></div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
                <div className="card-actions md:pe-10 lg:pb-0 pb-5  items-center justify-center md:justify-end">
                  <Link to={`/job/${job.id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
