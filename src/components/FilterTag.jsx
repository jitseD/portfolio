import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { cursorHover } from '../utils/cursorHover';

const FilterTag = ({ name, filter, onClick }) => {
    useEffect(() => cursorHover(`circle`));

    return (
        <li className={`filter__tag ${name == filter && `active`} hover--circle`} onClick={onClick}>
            {name}
        </li>
    );
};

FilterTag.propTypes = {
    name: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FilterTag;
