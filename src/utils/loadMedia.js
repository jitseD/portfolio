const media = import.meta.glob('../assets/img/**/*.(png|svg|avif|mp4)');

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
        cover: {
            mediaType: "img",
            filePath: `projects/${project}/cover`,
            fileExtension: "jpg",
            alt: `${project} cover`,
            sizes: "(min-width: 1050px) 25vw, 80vw",
            srcSet: {
                type: "avif",
                sizes: [200, 400, 600, 800, 1000, 1200]
            },
        },
        overview: {
            mediaType: "img",
            filePath: `projects/${project}/overview`,
            fileExtension: "jpg",
            alt: `${project} overview`,
            sizes: "(min-width: 1050px) 25vw, 80vw",
            srcSet: {
                type: "avif",
                sizes: [200, 400, 600, 800, 1000, 1200]
            },
        }

    }
};