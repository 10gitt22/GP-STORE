import React from 'react';
import { motion } from 'framer-motion';

import './SignedUpAlert.scss';

export default function SignedUpAlert({value}) {
    console.log(value);
    const transition = {
        duration: 0.5  
    }
    const animation = {
        'in': {
            opacity: 1
        },
        'out': {
            opacity: 0
        }
    }

    return (
        <>
            {value === '' && (
                <motion.div className="signedup-alert"
                variants={animation} transition={transition} initial='out' animate="in" exit='out'>
                    Signed Up!!!
                </motion.div>
                )
            }
        </>
    )
}
