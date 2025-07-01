export const cursorHover = (type) => {
    const $cursor = document.querySelector(`.cursor`);
    const elements = document.querySelectorAll(`.hover--${type}`);

    const handleEnterLink = (e) => {
        let className = type;
        if (type === `play`) {
            if (!e.target.paused) className = `pause`;
            e.target.addEventListener('play', handlePlayPause);
            e.target.addEventListener('pause', handlePlayPause);
        }

        $cursor.classList.add(`hover--${className}`);
    };

    const handleLeaveLink = (e) => {
        if (type === `play`) {
            e.target.removeEventListener('play', handlePlayPause);
            e.target.removeEventListener('pause', handlePlayPause);
        }

        removerHoverClasses();
    };

    const handlePlayPause = (e) => {
        if (e.type === 'play') {
            $cursor.classList.remove('hover--play');
            $cursor.classList.add('hover--pause');
        } else if (e.type === 'pause') {
            $cursor.classList.remove('hover--pause');
            $cursor.classList.add('hover--play');
        }
    };

    elements.forEach(($link) =>
        $link.addEventListener(`mouseenter`, handleEnterLink)
    );
    elements.forEach(($link) =>
        $link.addEventListener(`mouseleave`, handleLeaveLink)
    );
};

export const removerHoverClasses = () => {
    const $cursor = document.querySelector(`.cursor`);
    $cursor.classList.remove(
        `hover--arrow`,
        `hover--back`,
        `hover--send`,
        `hover--external`,
        `hover--play`,
        `hover--pause`,
        `hover--circle`
    );
};
