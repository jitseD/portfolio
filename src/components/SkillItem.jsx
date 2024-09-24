import PropTypes from "prop-types";
import { useEffect, useState } from "react";


const SkillItem = ({ skill, showImage }) => {
    const [skillImgPath, setSkillImgPath] = useState(null);

    useEffect(() => {
        if (showImage) {

            const skillKey = skill.toLowerCase().replace(/\s+/g, '-');

            import(`../assets/img/skills/${skillKey}.svg`)
                .then((module) => {
                    setSkillImgPath(module.default);
                })
                .catch((error) => {
                    console.error(`Image not found for skill: ${skill}`, error);
                    setSkillImgPath(null);
                });
        }
    }, [skill, showImage]);

    return (
        <li className="skill__item">
            {skillImgPath && <img className="skill__img" src={skillImgPath} alt={skill}/>}
            <p className="skill__name">{skill}</p>
        </li>
    )
}

SkillItem.propTypes = {
    skill: PropTypes.string.isRequired,
    showImage: PropTypes.bool.isRequired
};

export default SkillItem