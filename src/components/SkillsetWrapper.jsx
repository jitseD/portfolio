import PropTypes from "prop-types";
import SkillWrapper from "../components/SkillWrapper";

const SkillsetWrapper = ({ type, skills }) => {
    const suffix = type.endsWith('e') ? 'r' : 'er';

    return (
        <section className={`skillset__wrapper skillset__wrapper--${type}`}>
            <h3 className="skillset__title">Part <em className="emph h2">{type + suffix}</em></h3>
            <ul className={`skillset__skills skillset__skills--${type}`}>
                {Object.entries(skills).map(([category, skillList]) => (
                    <SkillWrapper key={category} category={category} skills={skillList} />
                ))}
            </ul>
        </section>
    )
}

SkillsetWrapper.propTypes = {
    type: PropTypes.string.isRequired,
    skills: PropTypes.object.isRequired
};

export default SkillsetWrapper