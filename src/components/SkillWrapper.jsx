import PropTypes from "prop-types";
// import { useState } from "react";
import SkillItem from "./SkillItem";

const SkillWrapper = ({ category, skills, currentSkill, onClick }) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const handleClick = () => setIsOpen(prev => !prev);

    return (
        <li className={`skill__wrapper skill__wrapper--${category.replace(/\s+/g, '-')} ${currentSkill == category ? `open` : ``}`} onClick={() => onClick(category)}>
            <div className="category__wrapper">
                <h4 className="skill__category emph">{category}</h4>
                <svg className="toggle__img" width="16" height="9" viewBox="0 0 16 9" fill="none">
                    <path d="M15 1L8.0002 7.9998L1 1.00015" stroke="#F2F2F2" strokeWidth="1.5px" />
                </svg>
            </div>
            <ul className={`skills skills--${category.replace(/\s+/g, '-')}`}>
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </ul>
        </li>
    )
}

SkillWrapper.propTypes = {
    category: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    currentSkill: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SkillWrapper