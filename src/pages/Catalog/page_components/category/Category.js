import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import { db } from '../../../../firebase';

import CategoryCard from './CategoryCard';
import './Category.scss';
import { useApp } from 'contexts/App.context';
import { useCategory } from 'contexts/Category.context';
import { useLocation } from 'react-router';

export default function Category() {
    const [loading, setLoading] = useState(true);
    const {categories, setCategories } = useCategory();
    const { setVisibleLink } = useApp();

    useEffect(() => {
        db.collection('categories').onSnapshot(snapshot => {
            setCategories(snapshot.docs);
            setLoading(false);
            setVisibleLink(true);
        });
    }, [])

    useEffect(() => {
        return () => {
            setVisibleLink(false);
        }
    }, [])

    return(
        <section className="section_block" id="category">
        
            {loading ? 
                    <Loader type="Oval" className="loader-spinner" color="#000" height={80} width={80}/>
                :
                    categories.map(category => {
                        return <CategoryCard to={`products/${category.id}`} id={category.id} data={category.data()} key={category.id} />
                    })
            }
        </section>
    )
}