import React from 'react';
import { motion } from 'framer-motion';

import Category from './page_components/category/Category';


import './Catalog.scss';

export default function Catalog(){
    return (
        <motion.div initial={{opacity: 1}} in={{opacity: 0}} exit={{opacity: 1}} className="page" id="catalog">
            <Category />
        </motion.div>
    )
}