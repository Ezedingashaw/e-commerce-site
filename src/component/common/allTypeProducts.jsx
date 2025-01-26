import React from 'react';
import ProductSaleHeader from './prodSaleHeader';
import Card from './card';
import ProductsContainer from './productsContainer';

const AllProducts = ({products, page, link, handleLikeChange, handlePageChangeProduct}) => {
    return ( 
        (products ? (<div className="flex flex-col gap-y-10">
            <ProductSaleHeader products={products} handlePageChangeProduct={handlePageChangeProduct} text="Our Products" header="Explore Our Products" />
            <div className="">
                <ProductsContainer link={link} page={page} handlePageChangeProduct={handlePageChangeProduct} products={products} handleLikeChange={handleLikeChange} />
            </div>
        </div>) : '')
     );
}
 
export default AllProducts;