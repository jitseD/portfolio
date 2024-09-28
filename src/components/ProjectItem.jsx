import PropTypes from "prop-types";
import React from 'react';
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getMediaObject } from "../utils/loadMedia";
import Media from "./Media";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ project, index }) => {
    const projectRef = useRef(null);
    const media = getMediaObject(project.id);

    useEffect(() => {
        const trigger = gsap.to(projectRef.current, {
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top 50%",
                end: "bottom 50%",
                toggleClass: "open",
                markers: false,
            },
        });

        const timeoutId = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            trigger.scrollTrigger?.kill();
        };
    }, [project]);

    return (
        <li className={`recent__project ${index % 2 == 0 ? `left` : `right`}`} ref={projectRef}>
            <div className="project__info">
                <h3 className="project__title emph">{project.name}</h3>
                {project.tags &&
                    <ul className="project__tags">
                        {project.tags.map((tag, index) => (
                            <React.Fragment key={tag.tagType}>
                                <li className="project__tag" key={tag.tagType}>
                                    {tag.tagType}
                                </li>
                                {
                                    index < project.tags.length - 1 &&
                                    <li key={`${tag.tagType}--x`}>x</li>
                                }
                            </React.Fragment>
                        ))}
                    </ul>
                }
                <div className="project__button button">
                    <p>discover</p>
                    <svg width="57" height="30" viewBox="0 0 57 30" fill="none">
                        <path d="M55.9991 14.9996L0 14.9999M55.9991 14.9996L41.9995 1M55.9991 14.9996L41.9998 29" stroke="#F2F2F2" />
                    </svg>
                </div>
            </div>
            <Link className="project__imgs" to={`${import.meta.env.BASE_URL}projects/${project.id}`}>
                <Media className="project__img project__img--cover" media={media.cover} />
                <Media className="project__img project__img--overview" media={media.overview} />
            </Link>

        </li>
    )
}


ProjectItem.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};


export default ProjectItem