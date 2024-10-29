import React from 'react';
import Tag from './tag';
import Previous from './previous';
import Next from './next';

const ProductSaleHeader = ({time, text, header, link}) => {
    return ( 
        <div className="flex flex-col lg:px-10 md:px-5 px-2 mt-20 gap-y-5">
            <div>
                <Tag text={text} />
            </div>
            <div className="flex md:flex-row justify-between items-end">
                <div className="flex lg:gap-x-20 gap-y-5 gap-x-10 md:flex-row flex-col md:items-end">
                    <h2 className="lg:text-3xl text-2xl font-semibold">{header}</h2>
                    { time }
                </div>
                {link || <div className="flex gap-x-3">
                    <Previous />
                    <Next />
                </div>}
            </div>
        </div>
     );
}
 
export default ProductSaleHeader;