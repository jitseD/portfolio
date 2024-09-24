import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import img1 from "../assets/img/me-1.png";
import img2 from "../assets/img/me-2.png";
import projectData from "../assets/data/projects.json";
import RecentWorkItem from "../components/RecentWorkItem";
import Loader from "../components/Loader";

const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => setData(projectData), []);

    return (
        <main className="main main--home">
            <section className="header">
                <h1 className="header__title">
                    <span className="title__section title--wrapped">Digital <span className="emph">Designer</span></span>
                    <span className="visually-hidden">and</span>
                    <span className="title__section title--wrapped">Creative <span className="emph">Developer</span></span>
                </h1>
                <div className="header__imgs stacked__imgs">
                    <img className="header__img stacked__img stacked__img--flipped" src={img1} alt="Jitse Dekeyser" />
                    <img className="header__img stacked__img" src={img2} alt="Jitse Dekeyser" />
                </div>
            </section>
            <section className="intro">
                <h2 className="intro__title emph">I&#39;m Jitse</h2>
                <em className="intro__hey hey emph outline">Hey</em>
                <p className="intro__text">I&#39;m a student in <strong>Digital Design and Development</strong> at Howest in Belgium, currently on Erasmus studying IT at USN in Norway. I love combining creativity and technology to create beautiful and innovative projects.</p>
                <div className="intro__imgs stacked__imgs">
                    <img className="intro__img stacked__img" src={img2} alt="Jitse Dekeyser" />
                    <img className="intro__img stacked__img stacked__img--flipped" src={img1} alt="Jitse Dekeyser" />
                </div>
                <Link className="intro__button button button--left" to={`${import.meta.env.BASE_URL}about`}>
                    <p className="button__text">more about me</p>
                    <svg className="button__arrow" width="57" height="30" viewBox="0 0 57 30" fill="none">
                        <path d="M55.9991 14.9996L0 14.9999M55.9991 14.9996L41.9995 1M55.9991 14.9996L41.9998 29" stroke="#F2F2F2" />
                    </svg>
                </Link>
            </section>
            <section className="recent">
                <h2 className="recent__title title--wrapped">Recent <span className="emph">Works</span></h2>
                <ul className="recent__works">
                    {data ? (
                        data.projects.map((work) => (
                            <RecentWorkItem key={work.id} work={work} />
                        ))
                    ) : (
                        <Loader message="Loading recent works..." />
                    )}
                </ul>
                <Link className="recent__button button button--left" to={`${import.meta.env.BASE_URL}projects`}>
                    <p className="button__text">more projects</p>
                    <svg className="button__arrow" width="57" height="30" viewBox="0 0 57 30" fill="none">
                        <path d="M55.9991 14.9996L0 14.9999M55.9991 14.9996L41.9995 1M55.9991 14.9996L41.9998 29" stroke="#F2F2F2" />
                    </svg>
                </Link>
            </section>
        </main >
    )
}

export default Home;