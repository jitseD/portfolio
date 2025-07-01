import { useEffect, useState } from 'react';
import img1_base from '../assets/img/me-1.jpg';
import img1_200 from '../assets/img/me-1-200.avif';
import img1_400 from '../assets/img/me-1-400.avif';
import img1_600 from '../assets/img/me-1-600.avif';
import img1_800 from '../assets/img/me-1-800.avif';
import img1_1000 from '../assets/img/me-1-1000.avif';
import img1_1200 from '../assets/img/me-1-1200.avif';
import img1_1600 from '../assets/img/me-1-1600.avif';
import img2_base from '../assets/img/me-2.jpg';
import img2_200 from '../assets/img/me-2-200.avif';
import img2_400 from '../assets/img/me-2-400.avif';
import img2_600 from '../assets/img/me-2-600.avif';
import img2_800 from '../assets/img/me-2-800.avif';
import img2_1000 from '../assets/img/me-2-1000.avif';
import img2_1200 from '../assets/img/me-2-1200.avif';
import img2_1600 from '../assets/img/me-2-1600.avif';
import SkillsetWrapper from '../components/SkillsetWrapper';
import skillData from '../assets/data/skills.json';
import Loader from '../components/Loader';
import ContactSection from '../components/ContactSection';
import GridSvg from '../components/GridSvg';

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
                    <p>
                        I recently graduated from the{' '}
                        <strong>Digital Design and Development</strong> program
                        at Howest in Kortrijk, Belgium. As part of my studies, I
                        went on Erasmus to Norway, where I studied IT at USN and
                        explored my interests in the broader field of
                        development and technology.
                    </p>
                    <p>
                        In my final year, I completed a{' '}
                        <strong>14-week internship</strong> at Antenna in Ghent.
                        There, I gained <strong>hands-on experience</strong> by
                        working closely with a team, taking ownership of
                        projects, and developing both my technical and creative
                        skills.
                    </p>
                    <p>
                        I&#39;m passionate about <strong>detail</strong> and
                        committed to creating <strong>unique</strong>,{' '}
                        <strong>high-quality</strong> work. Studying abroad and
                        completing an internship gave me a broader perspective
                        on the industry. It taught me to adapt and collaborate,
                        but most importantly to <strong>keep learning</strong>.
                    </p>
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
                        <SkillsetWrapper
                            key={type}
                            type={type}
                            skills={skills}
                        />
                    ))
                ) : (
                    <Loader message="Loading skills..." />
                )}
            </section>
            <ContactSection />
            <GridSvg />
        </main>
    );
};

export default About;
