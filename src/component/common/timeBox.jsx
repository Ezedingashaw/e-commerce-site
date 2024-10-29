import React from 'react';

const TimeBox = () => {
    return ( 
        <ul className="flex lg:gap-x-5 gap-x-3">
            <li>
                <h4 className="text-sm font-semibold">Days</h4>
                <span className="lg:text-2xl font-bold">03</span>
            </li>
            <li className="flex justify-center items-end text-3xl relative bottom-1 text-red-700">:</li>
            <li>
                <h4 className="text-sm font-semibold">Hours</h4>
                <span className="lg:text-2xl font-bold">23</span>
            </li>
            <li className="flex justify-center items-end text-3xl relative bottom-1 text-red-700">:</li>
            <li>
                <h4 className="text-sm font-semibold">Minutes</h4>
                <span className="lg:text-2xl font-bold">19</span>
            </li>
            <li className="flex justify-center items-end text-3xl relative bottom-1 text-red-700">:</li>
            <li>
                <h4 className="text-sm font-semibold">Seconds</h4>
                <span className="lg:text-2xl font-bold">56</span>
            </li>
            
        </ul>
     );
}
 
export default TimeBox;