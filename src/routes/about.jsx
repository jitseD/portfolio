import { useEffect, useState } from "react";
import img1 from "../assets/img/me-1.png";
import img2 from "../assets/img/me-2.png";
import SkillsetWrapper from "../components/SkillsetWrapper";
import skillData from "../assets/data/skills.json";

const About = () => {
    const [data, setData] = useState(null);
    useEffect(() => setData(skillData), []);
    if (!data) return <div>Loading...</div>;

    return (
        <main className="main main--about">
            <h1 className="visually-hidden">About Me</h1>
            <section className="bio">
                <h2 className="bio__title emph">I&#39;m Jitse</h2>
                <em className="bio__hey emph outline">Hey</em>
                <div className="bio__text">
                    <p>I&#39;m a third-year student in <strong>Digital Design and Development</strong> at Howest in Kortrijk, Belgium. Currently, I&#39;m on Erasmus in Norway, studying IT at USN <strong>exploring my interests</strong> within the vast field of IT and development.</p>
                    <p>I&#39;m driven by a passion for <strong>detail</strong> and a commitment to creating <strong>unique</strong>, <strong>high-quality</strong> work. I continually seek to improve and expand my knowledge, <strong>eager to learn</strong> in this ever-evolving industry.</p>
                    <p>My journey into digital design and development started with a curiosity about how creativity and technology intersect. My studies and experiences abroad are <strong>broadening my perspective</strong> and shaping my ability to approach problems from various angles, enabling me to develop innovative, user-centered solutions.</p>
                </div>
                <div className="bio__imgs">
                    <img className="bio__img" src={img1} alt="Jitse Dekeyser" />
                    <img className="bio__img" src={img2} alt="Jitse Dekeyser" />
                </div>
            </section>
            <section className="skillset">
                <h2 className="visually-hidden">Skillsett</h2>
                {Object.entries(data).map(([type, skills]) => (
                    <SkillsetWrapper key={type} type={type} skills={skills} />
                ))}
            </section>
        </main>
    )
}

export default About;