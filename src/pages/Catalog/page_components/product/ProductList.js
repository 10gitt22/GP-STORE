import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../../../../firebase';
import { motion } from 'framer-motion';

import { useCategory } from 'contexts/Category.context';

import ProductItem from './ProductItem';
import Loader from 'react-loader-spinner';

import './ProductList.scss'
import { useApp } from 'contexts/App.context';


export default function ProductList() {
    const {categoryState} = useApp();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    useEffect(() => {
        categoryState !== 'products' ?
        db.collection('products').where('category', '==', categoryState).onSnapshot(snap => {
            setProducts(snap.docs);
            setLoading(false);
        }) : 
        db.collection('products').onSnapshot(snap => {
            setProducts(snap.docs);
            setLoading(false);
        })

    }, [])

    return (
        <motion.section className="section_block" id="products"
        initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .5}}
        >
            {
                loading ? 
                <Loader type="Oval" className="loader-spinner" color="#000" height={80} width={80}/>
                :
                products.map(product => {
                    return <ProductItem id={product.id} data={product.data()} key={product.id}/>
                })
            }
            
        </motion.section>
    )
}

