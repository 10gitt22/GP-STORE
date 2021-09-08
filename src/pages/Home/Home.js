import React from 'react';
import { motion } from 'framer-motion';

import About from './page_components/about/About';
import Intro from './page_components/intro/Intro';
import Social from 'layouts/Social';

import './Home.scss';

export default function Home(){

    const transition = {
        duration: 0.5
    }

    const menuBack = {
        "initial": {
            opacity: 0
        },
        "animate": {
            opacity: 1
        },
        "exit": {
            opacity: 0
        }
    }

    return (
        <motion.div
        variants={menuBack} transition={transition} initial="initial" animate="animate" exit="exit"
        className="page" id="home">
            <Intro />
            <About />
            <Social />
        </motion.div>
    )
}