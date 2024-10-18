import { useEffect, useState } from "react";
import img1_base from "../assets/img/me-1.jpg";
import img1_200 from "../assets/img/me-1-200.avif";
import img1_400 from "../assets/img/me-1-400.avif";
import img1_600 from "../assets/img/me-1-600.avif";
import img1_800 from "../assets/img/me-1-800.avif";
import img1_1000 from "../assets/img/me-1-1000.avif";
import img1_1200 from "../assets/img/me-1-1200.avif";
import img1_1600 from "../assets/img/me-1-1600.avif";
import img2_base from "../assets/img/me-2.jpg";
import img2_200 from "../assets/img/me-2-200.avif";
import img2_400 from "../assets/img/me-2-400.avif";
import img2_600 from "../assets/img/me-2-600.avif";
import img2_800 from "../assets/img/me-2-800.avif";
import img2_1000 from "../assets/img/me-2-1000.avif";
import img2_1200 from "../assets/img/me-2-1200.avif";
import img2_1600 from "../assets/img/me-2-1600.avif";
import SkillsetWrapper from "../components/SkillsetWrapper";
import skillData from "../assets/data/skills.json";
import Loader from "../components/Loader";
import ContactSection from "../components/ContactSection";
import GridSvg from "../components/GridSvg";

const About = () => {
    const [data, setData] = useState(null);
    useEffect(() => setData(skillData), []);
    if (!data) return <div>Loading...</div>;

    return (
        <main className="main main--about">
            <h1 className="visually-hidden">About Me</h1>
            <section className="bio">
                <h2 className="bio__title emph">I&#39;m Jitse</h2>
                <em className="bio__hey hey emph outline">Hey</em>
                <div className="bio__text">
                    <p>I&#39;m a third-year student in <strong>Digital Design and Development</strong> at Howest in Kortrijk, Belgium. Currently I&#39;m on exchange in Norway, studying IT at USN <strong>exploring my interests</strong> within the vast field of IT and development.</p>
                    <p>I&#39;m driven by a passion for <strong>detail</strong> and a commitment to creating <strong>unique</strong>, <strong>high-quality</strong> work. I continually seek to improve and expand my knowledge, <strong>eager to learn</strong> in this ever-evolving industry.</p>
                    <p>My journey into digital design and development started with a curiosity about how creativity and technology intersect. My studies and experiences abroad are <strong>broadening my perspective</strong> and shaping my ability to approach problems from various angles, enabling me to develop innovative, user-centered solutions.</p>
                </div>
                <div className="bio__imgs">
                    <img
                        className="bio__img"
                        srcSet={`${img1_200} 200w, ${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1200} 1200w, ${img1_1600} 1600w`}
                        sizes="(min-width: 1800px) 360px,(min-width:900px) 40vw, 250px"
                        src={img1_base}
                        alt="Jitse Dekeyser"
                    />
                    <img
                        className="bio__img"
                        srcSet={`${img2_200} 200w, ${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1200} 1200w, ${img2_1600} 1600w`}
                        sizes="(min-width: 1800px) 360px,(min-width:900px) 40vw, 250px"
                        src={img2_base}
                        alt="Jitse Dekeyser"
                    />
                </div>
            </section>
            <section className="skillset">
                <h2 className="visually-hidden">Skillsett</h2>
                {data ? (
                    Object.entries(data).map(([type, skills]) => (
                        <SkillsetWrapper key={type} type={type} skills={skills} />
                    ))
                ) : (
                    <Loader message="Loading skills..." />
                )}
            </section>
            <ContactSection />
            <GridSvg />
        </main>
    )
}

export default About;