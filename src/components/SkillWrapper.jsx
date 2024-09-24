import PropTypes from "prop-types";
import { useState } from "react";
import SkillItem from "./SkillItem";

const SkillWrapper = ({ category, skills }) => {
    const showImages = category !== "design skills" && category !== "branding";
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(prev => !prev);

    return (
        <li className={`skill__wrapper ${isOpen ? `open` : ``}`} onClick={handleClick}>
            <div className="category__wrapper">
                <h4 className="skill__category emph">{category}</h4>
                <svg className="toggle__img" width="16" height="9" viewBox="0 0 16 9" fill="none">
                    <path d="M15 1L8.0002 7.9998L1 1.00015" stroke="#F2F2F2" strokeWidth="1.5px" />
                </svg>
            </div>
            <ul className={`skills skills--${category.replace(/\s+/g, '-')}`}>
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} showImage={showImages} />
                ))}
            </ul>
        </li>
    )
}

SkillWrapper.propTypes = {
    category: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
};

export default SkillWrapper