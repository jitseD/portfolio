import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const RecentWorkItem = ({ work }) => {

    const [coverImgPath, setCoverImgPath] = useState(null);
    const [overviewImgPath, setOverviewImgPath] = useState(null);

    useEffect(() => {
        import(`../assets/img/projects/${work.id}-cover.png`)
            .then((module) => {
                setCoverImgPath(module.default);
            })
            .catch((error) => {
                console.error(`Image not found for skill: ${work.id}`, error);
                setCoverImgPath(null);
            });
        import(`../assets/img/projects/${work.id}-overview.png`)
            .then((module) => {
                setOverviewImgPath(module.default);
            })
            .catch((error) => {
                console.error(`Image not found for skill: ${work.id}`, error);
                setOverviewImgPath(null);
            });
    }, [work]);

    return (
        <li className="recent__work">
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