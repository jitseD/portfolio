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

        const footerOpacity = gsap.to(':root', {
            scrollTrigger: {
                trigger: body,
                start: 'bottom bottom',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
            },
            '--footerOpacity': '1',
            duration: 0.01,
        });

        return () => {
            parallaxText.kill();
            footerOpacity.kill();
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
