import React from 'react';
import Tag from './tag';
import Previous from './previous';
import Next from './next';

const ProductSaleHeader = ({time, products, text, header, typeOfProducts, page, link, handlePageChangeProduct}) => {
    return (
        <div className="flex flex-col lg:px-10 md:px-5 px-2 mt-20 gap-y-5">
            <div>
                <Tag text={text} />
            </div>
            <div className="flex md:flex-row justify-between items-end">
                <div className="flex lg:gap-x-20 gap-y-5 gap-x-10 md:flex-row flex-col md:items-end">
                    <h2 className="lg:text-3xl text-2xl font-semibold">{header}</h2>
                    
                </div>
                {link || <div className="flex gap-x-3">
                    <Previous products={products} typeOfProducts={typeOfProducts} page={page} handlePageChangeProduct={handlePageChangeProduct} />
                    <Next products={products} typeOfProducts={typeOfProducts} page={page} handlePageChangeProduct={handlePageChangeProduct} />
                </div>}
            </div>
        </div>
     );
}
 
export default ProductSaleHeader;