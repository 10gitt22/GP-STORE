import React from 'react';
import { motion } from 'framer-motion';

import './ErrorAlert.scss';

export default function ErrorAlert({label}) {

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
            {label !== '' && (
                <motion.div className="error-alert"
                variants={animation} transition={transition} initial='out' animate="in" exit='out'>
                    {label}
                </motion.div>
                )
            }
        </>
    )
}
