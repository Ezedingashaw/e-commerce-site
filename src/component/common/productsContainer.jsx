import React from 'react';
import LinkBtn from './linkBtn';
import Card from './card';

const ProductsContainer = () => {
    return ( 
        <div className="flex flex-col items-center gap-y-10 mb-5 border-b border-gray-300 pb-10">
            <div className="px-5 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  w-full gap-x-3 gap-y-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <LinkBtn text="view all products" />
        </div>
     );
}
 
export default ProductsContainer;