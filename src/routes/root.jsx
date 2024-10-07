import { Outlet } from "react-router-dom";
import { ReactLenis } from 'lenis/react';
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar"
import Cursor from "../components/Cursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Root = () => {
    useEffect(() => {
        const body = document.querySelector('body');

        const parallaxText = gsap.to(':root', {
            scrollTrigger: {
                trigger: body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
            '--translateY': '10vh',
            duration: 1,
        })

        return () => {
            parallaxText.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, []);

    return (
        <ReactLenis root>
            <ScrollToTop>
                <Cursor />
                <NavBar />
                <Outlet />
                <FooterBar />
            </ScrollToTop>
        </ReactLenis>
    );
};

export default Root;
