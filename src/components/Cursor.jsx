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
        // <svg className="cursor" width="50" height="50" viewBox="0 0 50 50">
        //     <path className="cursor__circle" d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z" fill="#0D0D0D" stroke="#F2F2F2" />
        //     <path className="cursor__arrow" d="M24.9997 11L38.9993 24.9996M38.9993 24.9996L25 39M38.9993 24.9996L11 24.9997" stroke="#F2F2F2" />
        // </svg>
        <svg className="cursor" width="50" height="50" viewBox="0 0 50 50">
            <path className="cursor__circle" d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z" fill="#0D0D0D" stroke="#F2F2F2" />
            <path className="cursor__arrow" d="M24.9997 11L38.9993 24.9996M38.9993 24.9996L25 39M38.9993 24.9996L11 24.9997" stroke="#F2F2F2" />
            <path className="cursor__back" d="M24.9996 11L11 24.9996M11 24.9996L24.9993 39M11 24.9996L38.9993 24.9997" stroke="#F2F2F2" />
            <path className="cursor__send" d="M41.0002 25.0003L13.0002 12.5L19.9999 25M41.0002 25.0003L19.9999 25M41.0002 25.0003L13 37.5L19.9999 25" stroke="#0D0D0D" />
            <path className="cursor__external" d="M37.4995 12.5L18.75 31.2497M37.4995 12.5H28.1249M37.4995 12.5L37.5 21.875M21.875 15.625H12.5L12.501 37.5H34.375V28.125" stroke="#F2F2F2" />
        </svg>
    )
}

export default Cursor;