import React from 'react';
import joyStick from '../../assets/joystick.png';
import CardRate from './productRate';
import Discount from './discount';
import View from './view';
import Like from './like';

const Card = ({ product, type, handleLike }) => {
    
    const calculateDiscount = (percentage, price) => {
        if (percentage > 0)
            return price - Math.floor((percentage / 100) * price);
        else
            return price;
    };

    const reviewsCount = (reviews) => {
        if (reviews) return reviews.length
        
    }

    return (
        <div className="w-full">
            <div className="bg-gray-100 h-56 w-full flex justify-center items-center relative">
                {product.discount > 0 ? (<Discount discountPercent={product.discount} />) : ''}
                <View id={ type === "wished" ? product.productId : product._id} />
                <Like handleLike={handleLike} likeStatus={product.like} />
                <img className="w-40 object-cover" src={`http://localhost:3009/uploads/${product.imageOne}`} alt="" />
            </div>
            <div className="mt-3">
                <h3 className="font-medium">{ product.name }</h3>
                <div className="flex gap-x-5"><span className="text-red-500 font-medium">${calculateDiscount(product.discount, product.price)}</span><span className="text-gray-400 line-through font-medium">{product.discount > 0 ? `$${product.price}` : ""}</span></div>
                <div className="flex gap-x-3">
                <CardRate rate={product.reviews} /><span className="text-gray-400">({ reviewsCount(product.reviews) || 0})</span>
                </div>
            </div>
        </div>
     );
}

export default Card;