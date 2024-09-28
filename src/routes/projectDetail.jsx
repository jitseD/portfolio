import { Link, useLoaderData } from "react-router-dom";
import { getMediaObject } from "../utils/loadMedia";
import projectsData from "../assets/data/projects.json";
import Media from "../components/Media";

const loader = async ({ params }) => {
    const project = projectsData.projects.find((proj) => proj.id === params.id);
    return { project };
}

const ProjectDetail = () => {
    const { project } = useLoaderData();

    const projectIndex = projectsData.projects.findIndex(proj => proj.id === project.id);
    const prevProject = projectsData.projects[projectIndex - 1] || projectsData.projects[projectsData.projects.length - 1];
    const nextProject = projectsData.projects[projectIndex + 1] || projectsData.projects[0];

    const media = getMediaObject(project.id);
    const prevMedia = getMediaObject(prevProject.id);
    const nextMedia = getMediaObject(nextProject.id);

    return (
        <main className="main main--detail">
            <Link className="detail__nav" to={`${import.meta.env.BASE_URL}projects`}>
                <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                    <path d="M8.99976 0.5L0.999979 8.49978L8.99958 16.5" stroke="#F2F2F2" />
                </svg>
                <p>go back</p>
            </Link>
            <section className="info">
                <div className="detail__imgs stacked__imgs">
                    <Media className="detail__img detail__img--cover" media={media.cover} />
                    <Media className="detail__img detail__img--overview" media={media.overview} />
                </div>
                <h1 className="detail__name emph">{project.name}</h1>
                {
                    project.tags &&
                    <div className="detail__tags">
                        {project.tags.map((tag, index) => <p className="detail__tag" key={index}>{tag.tag}</p>)}
                    </div>
                }
                <p className="detail__date">-- {project.date}</p>
                <p className="detail__description">{project.description}</p>
                {
                    project.url &&
                    <a className="detail__website button" href={project.url} target="_blank">
                        <p>view project</p>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M28.999 1L7.99957 21.9997M28.999 1H18.4994M28.999 1L28.9996 11.5M11.4996 4.5H0.999573L1.00066 29H25.4996V18.5" stroke="#F2F2F2" />
                        </svg>
                    </a>
                }
            </section>
            <section className="results">
                <h2 className="results__title outline emph">Results</h2>
                <div className={`results__imgs results__imgs--${project.id}`}>
                    {project.media.map((media, index) => (
                        <Media className="results__img" media={media} key={index} />
                    ))}
                </div>
                {project.behanceUrl && (
                    <div className="behance__wrapper">
                        <p>Learn more about the project on Behance</p>
                        <a className="button" href={project.behanceUrl} target="_blank">
                            <p>go to behance</p>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M28.999 1L7.99957 21.9997M28.999 1H18.4994M28.999 1L28.9996 11.5M11.4996 4.5H0.999573L1.00066 29H25.4996V18.5" stroke="#F2F2F2" />
                            </svg>
                        </a>
                    </div>
                )}
            </section>
            <section className="more">
                <h2 className="more__title outline emph">More</h2>
                <ul className="more__projects">
                    <li className="more__project">
                        <Link className="stacked__imgs" to={`${import.meta.env.BASE_URL}projects/${prevProject.id}`}>
                            <Media className="more__img more__img--cover" media={prevMedia.cover} />
                            <Media className="more__img more__img--overview" media={prevMedia.overview} />
                        </Link>
                    </li>
                    <li className="more__project">
                        <Link className="stacked__imgs" to={`${import.meta.env.BASE_URL}projects/${nextProject.id}`}>
                            <Media className="more__img more__img--cover" media={nextMedia.cover} />
                            <Media className="more__img more__img--overview" media={nextMedia.overview} />
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}

ProjectDetail.loader = loader;

export default ProjectDetail;
