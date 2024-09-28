import { useEffect } from "react";

const Cursor = () => {
    useEffect(() => {
        const $cursor = document.querySelector(`.cursor`);

        const handleMouseMove = e => {
            $cursor.style.left = `${e.clientX}px`;
            $cursor.style.top = `${e.clientY}px`;
        }
        
        document.addEventListener(`mousemove`, handleMouseMove);
    })

    return (
        <svg className="cursor" width="50" height="50" viewBox="0 0 50 50">
            <path className="cursor__circle" d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z" fill="#0D0D0D" stroke="#F2F2F2" />
            <path className="cursor__arrow" d="M24.9997 11L38.9993 24.9996M38.9993 24.9996L25 39M38.9993 24.9996L11 24.9997" stroke="#F2F2F2" />
        </svg>
)
}

export default Cursor;