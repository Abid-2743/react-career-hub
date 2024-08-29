const getStoredJobApplication = () => {
    const StoredJobApplication = localStorage.getItem('job-applications')
    if(StoredJobApplication){
        return JSON.parse(StoredJobApplication);
    }
    return[];
}


const saveJobapplication = id => {
    const StoredJobApplications = getStoredJobApplication();
    const exists = StoredJobApplications.find(jobId => jobId === id);
    if(!exists){
        StoredJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(StoredJobApplications))
    };
};
export {getStoredJobApplication, saveJobapplication }