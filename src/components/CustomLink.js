import { motion } from 'framer-motion';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const CustomLink = ({label, to, activeOnlyWhenExact}) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    const transition = {
        duration: 0.5
    }

    const linkAnimations = {
        "in": {
            y: '0%'
        }, 
        "out": {
            y: '100%'
        }
    }

    return (
        <Link to={to} className={match ? "li_nav active" : "li_nav"}>
            <li>
                <motion.span variants={linkAnimations} initial="out" animate="in" exit="out" transition={transition}>{label}</motion.span>
            </li>
        </Link>
    );
}

export default CustomLink;