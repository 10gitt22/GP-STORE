import React from 'react'
import { Link } from 'react-router-dom';
import './ProductItem.scss';

export default function ProductItem({id, data}) {
    return (
        <Link to={`/${data.category}/${id}`}>
            <div className="product-card">
                <img className="product_img" src={data.mainPhoto.src} alt={data.model}/>

                <div className="product_price">{data.price}$</div>

                <div className="product-name">
                    <div className="product_brand">{data.brand}</div>
                    <div className="product_model">{data.model}</div>
                </div>

                <div className="product_category">{data.category}</div>

                <div className="add_to_cart">add to cart</div>
            </div>
        </Link>
    )
}
