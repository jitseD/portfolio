import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const RecentWorkItem = ({ work }) => {
    const [coverImgPath, setCoverImgPath] = useState(null);
    const [overviewImgPath, setOverviewImgPath] = useState(null);
    const workRef = useRef(null);

    useEffect(() => {
        import(`../assets/img/projects/${work.id}-cover.png`)
            .then((module) => setCoverImgPath(module.default))
            .catch(() => setCoverImgPath(null));

        import(`../assets/img/projects/${work.id}-overview.png`)
            .then((module) => setOverviewImgPath(module.default))
            .catch(() => setOverviewImgPath(null));
    }, [work]);

    useEffect(() => {
        gsap.to(
            workRef.current,
            {
                scrollTrigger: {
                    trigger: workRef.current,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleClass: "open",
                    markers: false,
                },
            }
        );
    }, [work]);

    return (
        <li className="recent__work" ref={workRef}>
            <h3 className="work__title emph">{work.name}</h3>
            <div className="work__imgs">
                <img className="work__img work__img--cover" src={coverImgPath} alt={`${work.id} cover`} />
                <img className="work__img work__img--overview" src={overviewImgPath} alt={`${work.id} overview`} />
            </div>
        </li>
    )
}


RecentWorkItem.propTypes = {
    work: PropTypes.object.isRequired,
};


export default RecentWorkItem