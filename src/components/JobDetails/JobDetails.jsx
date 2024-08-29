import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobapplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        saveJobapplication(idInt);
        toast('You have applied successfully');
        navigate('/applied');
    }

    if (!job) {
        return <p>Job not found</p>;
    }

    const { job_title, company_name, logo, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-4">
                    <p className="mb-4"><strong>Job Responsibility:</strong> {job_description}</p>
                    <p className="mb-4"><strong>Responsibilities:</strong> {job_responsibility}</p>
                    <p className="mb-4"><strong>Educational Requirements:</strong> {educational_requirements}</p>
                    <p className="mb-4"><strong>Experience:</strong> {experiences}</p>
                </div>

                <div className="border p-4">
                    <h2 className="text-2xl font-bold border-b mb-4">Job Details</h2>

                    <p><strong>Salary:</strong> {salary}</p>
                    <p><strong>Job Title:</strong> {job_title}</p>
                    <h2 className="font-bold my-4 border-b">Contact Information</h2>
                    <p><strong>Phone:</strong> {contact_information.phone}</p>
                    <p><strong>Email:</strong> {contact_information.email}</p>
                    <p><strong>Address:</strong> {contact_information.address}</p>
                    <button 
                        onClick={handleApplyJob}
                        className="btn btn-primary w-full mt-4"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
