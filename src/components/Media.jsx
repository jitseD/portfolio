import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { loadMedia } from '../utils/loadMedia';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Media = ({ className, media }) => {
    const [mediaImgPath, setMediaImgPath] = useState(null);
    const [mediaSrcSet, setMediaSrcSet] = useState("");
    const [controlsVisible, setControlsVisible] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (media.mediaType === "img" && media.srcSet) {
            const loadMediaAsync = async () => {
                const srcSetPromises = media.srcSet.sizes.map(async (size) => {
                    const mediaSrc = await loadMedia(`${media.filePath}-${size}.${media.srcSet.type}`);
                    return `${mediaSrc} ${size}w`;
                })

                const srcSetArray = await Promise.all(srcSetPromises);
                const srcSetStr = srcSetArray.join(", ");
                const baseImgPath = await loadMedia(`${media.filePath}-${media.srcSet.sizes[0]}.${media.srcSet.type}`);

                setMediaSrcSet(srcSetStr);
                setMediaImgPath(baseImgPath);
            };

            loadMediaAsync();
        } else {
            const loadMediaAsync = async () => {
                if (media.filePath) {
                    const mediaSrc = await loadMedia(`${media.filePath}.${media.fileExtension}`);
                    setMediaImgPath(mediaSrc);
                } else {
                    setMediaImgPath(null);
                }
            };

            loadMediaAsync();
        }
    }, [media]);

    useEffect(() => {
        if (media.mediaType === "img") return

        const trigger = gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top 90%",
                end: "bottom 10%",
                onEnter: () => playVideo(),
                onLeave: () => pauseVideo(),
                onEnterBack: () => playVideo(),
                onLeaveBack: () => pauseVideo()
            }
        })
        const timeoutId = setTimeout(() => ScrollTrigger.refresh(), 100);

        return () => {
            clearTimeout(timeoutId);
            trigger.scrollTrigger?.kill();
        };
    }, [media]);

    useEffect(() => {
        if (!controlsVisible) {
            const timeoutId = setTimeout(() => setControlsVisible(true), 500);

            return () => clearTimeout(timeoutId);
        }
    }, [controlsVisible])

    const playVideo = () => {
        videoRef.current.play()
        setControlsVisible(false)
    }

    const pauseVideo = () => {
        videoRef.current.pause()
        setControlsVisible(false)
    }

    const handleVideoClick = () => setControlsVisible(true);

    return media.mediaType === "img" ? (
        <img className={className} srcSet={mediaSrcSet} sizes={media.sizes} src={mediaImgPath} alt={media.alt} />
    ) : media.mediaType === "video" && (
        <video className={`${className} hover--play`} src={mediaImgPath} alt={media.alt} ref={videoRef}
            loop playsInline controls={controlsVisible ? true : false} onClick={handleVideoClick} />
    )
}

Media.propTypes = {
    className: PropTypes.string.isRequired,
    media: PropTypes.object.isRequired
}

export default Media;