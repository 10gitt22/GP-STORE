import React, { useEffect } from 'react';
import gsap from 'gsap/gsap-core';
import {Expo, Power2 } from 'gsap/all';
import './Preloader.scss';

const banner_scene = () => {
    let tl = gsap.timeline();
    // const words = gsap.utils.selector(html_el);

    tl.to(".banner_show", {
        y: 0,
        stagger: 0.25,
        opacity: 1,
        duration: 1.5,
        ease: Expo.easeOut
    }).to('.preloader', {
        y: '-100%',
        duration: 1,
        ease: Power2.easeIn,
    })
}

export default function Preloader() {
    useEffect(() => {
        banner_scene();
    }, []);


    return(
        <section className="preloader">
            <div className="banner">
                <div className="top-text hide">
                    <div className="banner_show">Guitar</div>
                </div> 
                <div className="middle-text hide">
                    <div className="banner_show">paradise</div>
                </div> 
            </div> 
        </section>
    )
}