import { db } from '../../../../firebase';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useLocation } from 'react-router';
import './ProductDetails.scss'

const parseField = (str) => {
    return str.split('_').join(' ');
}

const getProductFromURL = (url) => {
	let arr = url.split('/');
	return arr[arr.length - 1];
}


export default function ProductDetails() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const [product, setProduct] = useState(
        // {id:1, brand: 'Taylor', category: 'acoustic', model: 'GS-mini', price: 550, info: {body_type: 'Folk', frets: 20, scale_length: '624mm', size: '4/4', strings_brand: 'Elixir 13/56', strings_count: 6},mainPhoto: {src: 'https://8nota.com.ua/uploads/shop/products/large/57fa339fa4591501df8dd1ccdbdd3ee4.jpg'}}
    );

    useEffect(() => {
        db.collection(`products`).doc(getProductFromURL(location.pathname)).onSnapshot(snap => {
            setProduct(snap.data());
            setLoading(false)
        })
    },[])

    console.log(product);
    return (
       <motion.section className="page" id="product_details"
       initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
           {
               loading ? 
               <Loader type="Oval" className="loader-spinner" color="#000" height={80} width={80}/>
               :
               <div className="main-info">
                    <div className="main-info-block photo">
                            <img className="main_photo" src={product.mainPhoto.src} alt={product.model}/>
                    </div>
                    <div className="main-info-block details">
                            <div className="details_brand">{product.brand}</div>
                            <div className="details_model">{product.model}</div>
                            <div className="details_price">{product.price}$</div>

                            <div className='details_quantity'>
                                <label htmlFor="quantity">Count: </label> 
                                <input type="number" id="quantity"/>
                            </div>

                            <ul className="details_info">
                                {Object.keys(product.info).map(el => {
                                    return <li key={el}>
                                        <div className="parameter">{parseField(el)}:</div> <div>{product.info[el]}</div>
                                    </li>
                                })}
                            </ul>

                            <div id="button_add">add to cart</div>
                    </div>
                </div>
           }
       </motion.section>
    )
}
