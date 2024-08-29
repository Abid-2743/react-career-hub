import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl mb-4">Featured Jobs</h2>
                <p className="mb-8">Explore thousands of job opportunities with all the information you need. It’s your future.</p>
            </div>
            <div className="grid md:grid-cols-2 md:mt-0 mt-20 gap-6 mb-8">
                {jobs.slice(0, dataLength).map((job) => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
            {dataLength < jobs.length && (
                <div className="text-center">
                    <button 
                        onClick={() => setDataLength(jobs.length)}
                        className="btn btn-primary"
                    >
                        Show All Jobs
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedJobs;
