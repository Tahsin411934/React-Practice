import Banner from "../Banner/Banner";
import Features from "../Freatures/Features";

import SectionHeading from "../SectionHrading/SectionHeading";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <SectionHeading Title= "Job Category List" Description="Explore thousands of job opportunities with all the information you need. Its your future" ></SectionHeading>
            <Features></Features>
        </div>
    );
};

export default Home;