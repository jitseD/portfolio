import PropTypes from "prop-types";

const Loader = ({ message }) => {
    return (
        <div className="loader__wrapper">
            <div className="loader"></div>
            <p>{message}</p>
        </div>
    );
}

Loader.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Loader;