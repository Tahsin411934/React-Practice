import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>OPPS !</h1>
            
            <Link to="/">go back</Link>
        </div>
    );
};

export default ErrorPage;