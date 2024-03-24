import { useLoaderData, useParams } from "react-router-dom";


const ShowDetails = () => {
    const Job=useLoaderData();
    const {id} = useParams();
    
    const jobs= Job.find(job=>job.id==id)
    const { itemId, image, jobType, jobSalary, location,jobDescription,jobResponsibility,requiredEducation,experience} = jobs;
    return (
        <div className="text-center">
              <img src={image} alt="Job Image" />
            <h1>{jobType}</h1>
            <p>Job ID: {itemId}</p>
            <p>Salary: {jobSalary}</p>
            <p>Location: {location}</p>
            <p>Description: {jobDescription}</p>
            <p>Responsibility: {jobResponsibility}</p>
            <p>Education: {requiredEducation}</p>
            <p>Experience: {experience}</p>
        </div>
    );
};

export default ShowDetails;