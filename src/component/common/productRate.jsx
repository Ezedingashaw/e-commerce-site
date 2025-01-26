import React, { useState } from 'react';

const CardRate = ({ rate, style, change}) => {
    
    const [rated, setRated] = useState();

    const rateAverage = () => {
        let total = 0;
        if (rate) {
            rate.map(rate => {
                total = total + rate.rate;
            })
            
            return Math.floor(total / rate.length);
       }
        return;
        
    }
    // const handleRateChange = (rateValue) => {
    //     setRated(rateValue);
    //     change(rateValue);
    // };

    return ( 
        <div className="flex gap-x-1">
            <i className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 1 || rated >=1 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 2 || rated >=2 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 3 || rated >=3 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 4 || rated >=4 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 5 || rated >=5 ? "text-orange-400" : "text-gray-200"  }`}></i>
        </div>
     );
}
 
export default CardRate;