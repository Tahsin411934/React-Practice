import PropTypes from 'prop-types'

const SectionHeading = ({Title, Description}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-3'>{Title}</h1>
            <h1 className='text-center mb-5'>{Description}</h1>
        </div>
    );
};

SectionHeading.propTypes = {
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
};

export default SectionHeading;