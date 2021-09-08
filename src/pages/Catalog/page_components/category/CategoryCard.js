import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
 
import { useCategory } from 'contexts/Category.context';
    
import './CategoryCard.scss';

const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: .5,
}

export default function CategoryCard({id, data, to}) {
    return(
        <Link to={to} className="category-link">
            <motion.div className="card category-card" 
            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={transition}
            // onClick={() => setCategory(id)}
            >
                <div className="mask">{data.display_name}</div>
                <div className="title"><span>{data.display_name}</span></div>
                <img src={data.img.low_src} className="category-card-image" alt={data.category_name}/>            
                <div className="goto">
                    <div>go<br/>to<br/>category</div>
                    <svg width="512" height="248" viewBox="0 0 512 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M506.134 109.843C506.128 109.837 506.123 109.83 506.116 109.824L401.612 5.82394C393.783 -1.96706 381.12 -1.93807 373.327 5.89193C365.535 13.7209 365.565 26.3839 373.394 34.1759L443.558 104H20C8.954 104 0 112.954 0 124C0 135.046 8.954 144 20 144H443.557L373.395 213.824C365.566 221.616 365.536 234.279 373.328 242.108C381.121 249.939 393.785 249.966 401.613 242.176L506.117 138.176C506.123 138.17 506.128 138.163 506.135 138.157C513.968 130.339 513.943 117.635 506.134 109.843Z" />
                    </svg>
                </div>
            </motion.div>
        </Link>
    )
}