import React, { Fragment } from 'react';

const PriceTotal = ({ priceTotal }) => {
    return ( 
        <Fragment>
            <li className="border-b border-gray-400 py-2 flex justify-between"><span className="text-sm font-medium">Subtotal:</span><span className="text-sm font-medium">${priceTotal}</span></li>
                            <li className="border-b border-gray-400 py-2 flex justify-between"><span className="text-sm font-medium">Shiping:</span><span className="text-sm font-medium">Free</span></li>
                            <li className="flex justify-between py-2"><span className="text-sm font-medium">Total:</span><span className="text-sm font-medium">${priceTotal}</span></li>
        </Fragment>
     );
}
 
export default PriceTotal;