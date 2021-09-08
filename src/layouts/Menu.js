import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CustomLink from 'components/CustomLink';

import './Menu.scss';
export default function Menu({menuState}){

    const links = [
        {label: 'main', path: '/'},
        {label: 'store', path: '/categories'},
        {label: 'workshop', path: '/workshop'}
    ]

    const transition = {
        duration: 0.5,
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
        <>
            <AnimatePresence>
                {menuState && (
                    <motion.div 
                    variants={menuBack} transition={transition} initial="initial" animate="animate" exit="exit"
                    className="menu-background">
                        <ul className="menu">
                            {links.map(link => {
                                return <CustomLink to={link.path} label={link.label} key={link.label} activeOnlyWhenExact={true}/>
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )    
}   