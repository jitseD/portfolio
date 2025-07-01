import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
import projectsData from "../assets/data/projects.json";
import ProjectItem from "../components/ProjectItem";
import Loader from "../components/Loader";
import ContactSection from "../components/ContactSection";
import GridSvg from "../components/GridSvg";

const Home = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => setProjects(projectsData.projects), []);

    const highlightedProjects = projects ? projects.filter(project => project.highlighted) : [];

    return (
        <main className="main main--home">
            <section className="header">
                <h1 className="header__title">
                    <span className="title__section title--wrapped">Digital <span className="emph">Designer</span></span>
                    <span className="visually-hidden">and</span>
                    <span className="title__section title--wrapped">Creative <span className="emph">Developer</span></span>
                </h1>
                <div className="header__imgs stacked__imgs">
                    <img
                        className="header__img header__img--flipped"
                        srcSet={`${img1_200} 200w, ${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1200} 1200w, ${img1_1600} 1600w`}
                        sizes="(min-width: 1800px) 450px, (min-width: 1050px) 30vw, (min-width:750px) 40vw, 60vw"
                        src={img1_base}
                        alt="Jitse Dekeyser"
                    />
                    <img
                        className="header__img"
                        srcSet={`${img2_200} 200w, ${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1200} 1200w, ${img2_1600} 1600w`}
                        sizes="(min-width: 1800px) 450px, (min-width: 1050px) 30vw, (min-width:750px) 40vw, 60vw"
                        src={img2_base}
                        alt="Jitse Dekeyser"
                    />
                </div>
            </section>
            <section className="intro">
                <h2 className="intro__title emph">I&#39;m Jitse</h2>
                <em className="intro__hey hey emph outline">Hey</em>
                <p className="intro__text">I recently graduated in <strong>Digital Design and Development</strong> from Howest in Belgium. After studying abroad and completing a semester-long internship, I&#39;m ready to step into the professional world, combining creativity and technology to build unique and innovative projects.</p>
                <div className="intro__imgs stacked__imgs">
                    <img
                        className="intro__img"
                        srcSet={`${img2_200} 200w, ${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1200} 1200w, ${img2_1600} 1600w`}
                        sizes="(min-width: 1800px) 450px, (min-width: 1050px) 30vw, (min-width:750px) 40vw, 60vw"
                        src={img2_base}
                        alt="Jitse Dekeyser"
                    />
                    <img
                        className="intro__img intro__img--flipped"
                        srcSet={`${img1_200} 200w, ${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1200} 1200w, ${img1_1600} 1600w`}
                        sizes="(min-width: 1800px) 450px, (min-width: 1050px) 30vw, (min-width:750px) 40vw, 60vw"
                        src={img1_base}
                        alt="Jitse Dekeyser"
                    />
                </div>
                <Link className="intro__button button hover--arrow" to={`${import.meta.env.BASE_URL}about`}>
                    <p>more about me</p>
                    <svg width="57" height="30" viewBox="0 0 57 30" fill="none">
                        <path d="M55.9991 14.9996L0 14.9999M55.9991 14.9996L41.9995 1M55.9991 14.9996L41.9998 29" stroke="#F2F2F2" />
                    </svg>
                </Link>
            </section>
            <section className="recent">
                <h2 className="recent__title title--wrapped">Recent <span className="emph">Works</span></h2>
                <ul className="recent__projects">
                    {highlightedProjects ? (
                        highlightedProjects.map((project, index) => (
                            <ProjectItem key={project.id} project={project} index={index} totalProjects={highlightedProjects.length} />
                        ))
                    ) : (
                        <Loader message="Loading recent projects..." />
                    )}
                </ul>
                <Link className="recent__button button hover--arrow" to={`${import.meta.env.BASE_URL}projects`}>
                    <p>more projects</p>
                    <svg width="57" height="30" viewBox="0 0 57 30" fill="none">
                        <path d="M55.9991 14.9996L0 14.9999M55.9991 14.9996L41.9995 1M55.9991 14.9996L41.9998 29" stroke="#F2F2F2" />
                    </svg>
                </Link>
            </section>
            <ContactSection />
            <GridSvg />
        </main >
    )
}

export default Home;