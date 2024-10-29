import React from 'react';
import ProductSaleHeader from './prodSaleHeader';
import Card from './card';
import ProductsContainer from './productsContainer';

const AllProducts = () => {
    return ( 
        <div className="flex flex-col gap-y-10">
            <ProductSaleHeader text="Our Products" header="Explore Our Products" />
            <div className="">
                <ProductsContainer />
            </div>
        </div>
     );
}
 
export default AllProducts;