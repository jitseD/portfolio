export const cursorHover = (type) => {
    const $cursor = document.querySelector(`.cursor`);
    const elements = document.querySelectorAll(`.hover--${type}`);

    const handleEnterLink = () => $cursor.classList.add(`hover--${type}`);
    const handleLeaveLink = () => $cursor.classList.remove(`hover--${type}`);

    elements.forEach($link => $link.addEventListener(`mouseenter`, handleEnterLink));
    elements.forEach($link => $link.addEventListener(`mouseleave`, handleLeaveLink));
}