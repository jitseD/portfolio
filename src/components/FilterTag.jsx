import PropTypes from "prop-types"

const FilterTag = ({ name, filter, onClick }) => {
    return (
        <li className={`filter__tag ${name == filter && `active`}`} onClick={onClick}>{name}</li>
    )
}

FilterTag.propTypes = {
    name: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


export default FilterTag