
const $videos = document.querySelectorAll(`video`);

const init = () => {
    $videos.forEach($video => {
        $video.play();
    });
}

init();