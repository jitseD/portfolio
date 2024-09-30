import { useState, useEffect } from "react";
import projectsData from "../assets/data/projects.json";
import ProjectItem from "../components/ProjectItem";
import Loader from "../components/Loader";
import FilterTag from "../components/FilterTag";

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [tags, setTags] = useState(null);
    const [filter, setFilter] = useState("all");

    useEffect(() => setProjects(projectsData.projects), []);
    useEffect(() => {
        if (!projects) return;

        const allTagTypes = projectsData.projects.flatMap(project => project.tags.map(tag => tag.tagType));
        const tagTypes = Array.from(new Set(allTagTypes)).sort();
        setTags(tagTypes);
    }, [projects]);

    const handleFilterClick = e => {
        const newFilter = e.target.textContent;
        if (filter == newFilter) setFilter("all");
        else setFilter(newFilter);
    }

    useEffect(() => {
        if (filter == "all") setProjects(projectsData.projects);
        else {
            const filteredProjects = projectsData.projects.filter((project) => {
                const projectTags = project.tags.map(tag => tag.tagType);
                return projectTags.includes(filter);
            });

            setProjects(filteredProjects);
        }

    }, [filter])

    return (
        <main className="main main--projects">
            <section className="filter">
                <h1 className="filter__title title--wrapped">{filter} <span className="emph">Projects</span></h1>
                <ul className="filter__tags">
                    {tags &&
                        tags.map((tag) => (
                            <FilterTag key={tag} name={tag} filter={filter} onClick={handleFilterClick} />
                        ))
                    }
                </ul>
            </section>
            <section className="projects">
                <h2 className="visually-hidden">Projects</h2>
                <ul className="projects__list">
                    {projects ? (
                        projects.map((project, index) => (
                            <ProjectItem key={project.id} project={project} index={index} first={index === 0} />
                        ))
                    ) : (
                        <Loader message={`Loading ${filter} projects...`} />
                    )}
                </ul>
            </section>
        </main>
    )
}

export default Projects;