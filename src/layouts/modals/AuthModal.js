import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CloseModal from 'layouts/buttons/CloseModal';
import LoginForm from 'layouts/forms/LoginForm';
import SignupForm from 'layouts/forms/SignupForm';

import './AuthModal.scss';

const modalBackTransition = {
    duration: 0.3,
}
const modalBackAnim = {
    "in": {
        opacity: 1
    },
    "out": {
        opacity: 0
    }
}


const modalTransition = {
    type: 'tween',
    duration: 0.5,
    ease: 'easeOut'   
}
const modalAnim={
    'in': {
        x: '0%',
    },
    'out': {
        x: '100%'
    }
}

const formTransition = {
    duration: 0.5  
}
const formAnim = {
    'in': {
        opacity: 1
    },
    'out': {
        opacity: 0
    }
}

const value = {
    variants: formAnim, 
    transition: formTransition,
    initial: "out", 
    animate: "in",
    exit: "out"
}

export default function AuthModal({authModalState, setAuthModalState}){
    const [hasAccount, setHasAccount] = useState(true)
    return (
        <>
            <AnimatePresence>
                {authModalState && (
                        <motion.div
                        variants={modalBackAnim} transition={modalBackTransition} initial="out" animate="in" exit="out"
                        className="modal-background" onClick={(e)=> {
                            e.target.className === 'modal-background' && setAuthModalState(false)
                            }}>    
                            <motion.div 
                            variants={modalAnim} transition={modalTransition} initial="out" animate="in" exit="out"
                            className="modal">
                                <CloseModal setAuthModalState={setAuthModalState}/>
                                {
                                    hasAccount ? 
                                    <LoginForm value={value} setAuthModalState={setAuthModalState} setHasAccount={setHasAccount}/> : 
                                    <SignupForm value={value} setAuthModalState={setAuthModalState} setHasAccount={setHasAccount}/>
                                }
                            </motion.div>
                        </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

