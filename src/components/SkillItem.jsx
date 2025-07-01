import PropTypes from 'prop-types';
import Media from './Media';

const SkillItem = ({ skill }) => {
    return (
        <li className="skill__item">
            {skill.mediaType && <Media className="skill__img" media={skill} />}
            <p className="skill__name">{skill.name}</p>
        </li>
    );
};

SkillItem.propTypes = {
    skill: PropTypes.object.isRequired,
};

export default SkillItem;
