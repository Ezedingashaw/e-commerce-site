import React from 'react';

const Discount = ({discountPercent}) => {
    return ( 
        <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-md absolute top-2 left-2">-{ discountPercent }%</span>
     );
}
 
export default Discount;