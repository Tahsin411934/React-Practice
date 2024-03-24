
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Feature = ({ feature }) => {
    const { id, image, jobType, jobSalary, location } = feature;
   
    
    return (
        <div className="border-2 border-black text-center">
            <img src={image} alt="Job Image" />
            <h1>{jobType}</h1>
            <p>Job ID: {id}</p>
            <p>Salary: {jobSalary}</p>
            <p>Location: {location}</p>
            <Link to={`/job/${id}`} ><button>ShowDetails</button></Link>
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        jobType: PropTypes.string.isRequired,
        jobSalary: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired
};

export default Feature;
