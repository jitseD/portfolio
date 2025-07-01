import { useState, useEffect } from 'react';
import projectsData from '../assets/data/projects.json';
import ProjectItem from '../components/ProjectItem';
import Loader from '../components/Loader';
import FilterTag from '../components/FilterTag';
import ContactSection from '../components/ContactSection';
import GridSvg from '../components/GridSvg';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [tags, setTags] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => setProjects(projectsData.projects), []);
    useEffect(() => {
        if (!projects) return;
        const tagOrder = ['development', 'design', 'branding', 'motion'];

        const allTagTypes = projectsData.projects.flatMap((project) => project.tags.map((tag) => tag.tagType));
        const uniqueTags = Array.from(new Set(allTagTypes));

        const sortedTags = uniqueTags
            .filter((tag) => tagOrder.includes(tag))
            .sort((a, b) => tagOrder.indexOf(a) - tagOrder.indexOf(b));

        setTags(sortedTags);
    }, [projects]);

    const handleFilterClick = (e) => {
        const newFilter = e.target.textContent;
        if (filter == newFilter) setFilter('all');
        else setFilter(newFilter);
    };

    useEffect(() => {
        if (filter == 'all') setProjects(projectsData.projects);
        else {
            const filteredProjects = projectsData.projects.filter((project) => {
                const projectTags = project.tags.map((tag) => tag.tagType);
                return projectTags.includes(filter);
            });

            setProjects(filteredProjects);
        }
    }, [filter]);

    return (
        <main className="main main--projects">
            <section className="filter">
                <h1 className="filter__title title--wrapped">
                    {filter} <span className="emph">Projects</span>
                </h1>
                <ul className="filter__tags">
                    {tags &&
                        tags.map((tag) => (
                            <FilterTag key={tag} name={tag} filter={filter} onClick={handleFilterClick} />
                        ))}
                </ul>
            </section>
            <section className="projects">
                <h2 className="visually-hidden">Projects</h2>
                <ul className="projects__list">
                    {projects ? (
                        projects.map((project, index) => (
                            <ProjectItem
                                key={project.id}
                                project={project}
                                index={index}
                                totalProjects={projects.length}
                            />
                        ))
                    ) : (
                        <Loader message={`Loading ${filter} projects...`} />
                    )}
                </ul>
                {filter == 'development' && (
                    <div className="github">
                        <p>
                            for more development projects, <br />
                            check out my github
                        </p>
                        <a className="button" href="https://github.com/jitseD" target="_blank">
                            <p>go to GitHub</p>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d="M28.999 1L7.99957 21.9997M28.999 1H18.4994M28.999 1L28.9996 11.5M11.4996 4.5H0.999573L1.00066 29H25.4996V18.5"
                                    stroke="#F2F2F2"
                                />
                            </svg>
                        </a>
                    </div>
                )}
            </section>
            <ContactSection />
            <GridSvg />
        </main>
    );
};

export default Projects;
