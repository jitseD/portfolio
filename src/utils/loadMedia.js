const media = import.meta.glob('../assets/img/**/*.(png|svg|mp4)');

export const loadMedia = async (filePath) => {
    const mediaKey = `../assets/img/${filePath}`;
    if (media[mediaKey]) {
        const mediaModule = await media[mediaKey]();
        return mediaModule.default;
    }
    return null;
};

export const getMediaObject = (project) => {
    return {
        cover: { mediaType: "img", filePath: `projects/${project}/cover`, fileExtension: "png", alt: `${project} cover` },
        overview: { mediaType: "img", filePath: `projects/${project}/overview`, fileExtension: "png", alt: `${project} overview` }
    }
};