import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getMediaObject } from "../utils/loadMedia";
import Media from "./Media";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const RecentWorkItem = ({ work }) => {
    const workRef = useRef(null);

    const media = getMediaObject(work.id);

    useEffect(() => {
        const trigger = gsap.to(workRef.current, {
            scrollTrigger: {
                trigger: workRef.current,
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
    }, [work]);

    return (
        <li className="work__wrapper" ref={workRef}>
            <Link className="recent__work" to={`${import.meta.env.BASE_URL}projects/${work.id}`}>
            <h3 className="work__title emph">{work.name}</h3>
            <div className="work__imgs">
                <Media className="work__img work__img--cover" media={media.cover} />
                <Media className="work__img work__img--overview" media={media.overview} />
            </div>
            </Link>
        </li>
    )
}


RecentWorkItem.propTypes = {
    work: PropTypes.object.isRequired,
};


export default RecentWorkItem