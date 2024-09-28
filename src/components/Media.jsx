import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { loadMedia } from '../utils/loadMedia';

const Media = ({ className, media }) => {
    // const [mediaImgPath, setMediaImgPath] = useState(null);

    // useEffect(() => {
    //     const mediaLoader = async () => {

    //     const mediaSrc = await loadMedia(`../assets/img`, media);
    //     setMediaImgPath(mediaSrc);
    //     };

    //     if (media.filePath) mediaLoader();
    //     else setMediaImgPath(null)
    // }, [media]);

    const [mediaImgPath, setMediaImgPath] = useState(null);

    useEffect(() => {
        const loadMediaAsync = async () => {
            if (media.filePath) {
                const mediaSrc = await loadMedia(`${media.filePath}.${media.fileExtension}`); // Call loadMedia
                setMediaImgPath(mediaSrc);
            } else {
                setMediaImgPath(null);
            }
        };

        loadMediaAsync();
    }, [media]);

    if (media.mediaType == "img") return <img className={className} src={mediaImgPath} alt={media.alt} />
    if (media.mediaType == "video") return <video className={className} src={mediaImgPath} alt={media.alt} loop autoPlay playsInline muted controls />
}

Media.propTypes = {
    className: PropTypes.string.isRequired,
    media: PropTypes.object.isRequired
}

export default Media;