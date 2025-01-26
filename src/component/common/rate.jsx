import React, { useEffect, useState } from 'react';

const Rate = ({ rate, style, change}) => {
    
    const [rated, setRated] = useState();


    const rateAverage = () => {
        let total = 0;
        if (rate) {
            console.log(rate.length)
            rate.map(rate => {
                total = total + rate.rate;
            })
            console.log(total);
            return Math.floor(total / rate.length);
       }
        return;
        
    }
    const handleRateChange = (rateValue) => {
        setRated(rateValue);
        change(rateValue);
    };

    return ( 
        <div className="flex gap-x-1">
            <i onClick={() => handleRateChange(1)} className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 1 || rated >=1 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i onClick={() => handleRateChange(2)} className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 2 || rated >=2 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i onClick={() => handleRateChange(3)} className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 3 || rated >=3 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i onClick={() => handleRateChange(4)} className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 4 || rated >=4 ? "text-orange-400" : "text-gray-200"  }`}></i>
            <i onClick={() => handleRateChange(5)} className={`fa-solid fa-star text-xl ${style} ${rateAverage() >= 5 || rated >=5 ? "text-orange-400" : "text-gray-200"  }`}></i>
        </div>
     );
}
 
export default Rate;