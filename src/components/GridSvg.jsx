import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GridSvg = () => {
    const [screenWidth, setScreenWidth] = useState(null);
    const gridRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        const handleScreenResize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleScreenResize);
        handleScreenResize();

        return () => window.removeEventListener("resize", handleScreenResize);

    }, [])

    useEffect(() => {
        if (gridRef.current && parentRef.current) {
            const gridSize = {
                desktop: { width: 1800, height: 2425 },
                tablet: { width: 745, height: 1906 },
                mobile: { width: 360, height: 1931 }
            }

            let relativeSize = {}

            if (screenWidth > 1050) relativeSize = gridSize.desktop
            else if (screenWidth > 750) relativeSize = gridSize.tablet
            else relativeSize = gridSize.mobile

            const gridHeight = (relativeSize.height / relativeSize.width) * screenWidth;

            const trigger = gsap.fromTo(gridRef.current,
                { top: 0 },
                {
                    top: () => parentRef.current.offsetHeight - gridHeight,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "main",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                    }
                }
            )

            const timeoutId = setTimeout(() => ScrollTrigger.refresh(), 100);

            return () => {
                clearTimeout(timeoutId);
                trigger.scrollTrigger?.kill();
            };
        }
    }, [gridRef, screenWidth]);

    return (
        <div className="grid__wrapper" ref={parentRef}>
            {screenWidth > 1050 ? (

                <svg className="grid" width="1800" height="2425" viewBox="0 0 1800 2425" fill="none" ref={gridRef}>
                    <path d="M1638 1V2425" stroke="#F2F2F2" />
                    <path d="M82 0V2425" stroke="#F2F2F2" />
                    <path d="M1140 1V2425" stroke="#F2F2F2" />
                    <path d="M1800 57.0469L2.49654 57.0469" stroke="#F2F2F2" />
                    <path d="M1800 429.031L2.49654 429.031" stroke="#F2F2F2" />
                    <path d="M1800 889.641L2.49654 889.641" stroke="#F2F2F2" />
                    <path d="M1800 1277.85H2.49654" stroke="#F2F2F2" />
                    <path d="M1797.5 1916.96H0.00044632" stroke="#F2F2F2" />
                    <path d="M1797.5 2234.02H0.00044632" stroke="#F2F2F2" />
                </svg>
            ) : screenWidth > 750 ? (
                <svg className="grid" width="745" height="1906" viewBox="0 0 745 1906" fill="none" ref={gridRef}>
                    <path d="M603 0V1906" stroke="#F2F2F2" />
                    <path d="M745 169L0.999989 169" stroke="#F2F2F2" />
                    <path d="M745 629H0.999989" stroke="#F2F2F2" />
                    <path d="M745 953H0.999989" stroke="#F2F2F2" />
                    <path d="M744 1122H-1.14441e-05" stroke="#F2F2F2" />
                    <path d="M745 1811H0.999989" stroke="#F2F2F2" />
                    <path d="M745 1487H0.999989" stroke="#F2F2F2" />
                    <path d="M723 0V1906" stroke="#F2F2F2" />
                    <path d="M22 0V1906" stroke="#F2F2F2" />
                </svg>
            ) : (
                <></>
            )}
        </div>
    )
}

export default GridSvg;