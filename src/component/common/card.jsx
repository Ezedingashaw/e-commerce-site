import React from 'react';
import joyStick from '../../assets/joystick.png';
import Rate from './rate';
import Discount from './discount';
import View from './view';
import Like from './like';

const Card = () => {
    return ( 
        <div className="w-full">
            <div className="bg-gray-100 h-56 w-full flex justify-center items-center relative">
                <Discount />
                <View />
                <Like />
                <img className="w-40 object-cover" src={joyStick} alt="" />
            </div>
            <div className="mt-3">
                <h3 className="font-medium">HAVIT HV-G92 Gamepad</h3>
                <div className="flex gap-x-5"><span className="text-red-500 font-medium">$120</span><span className="text-gray-400 line-through font-medium">$160</span></div>
                <div className="flex gap-x-3">
                <Rate /> <span className="text-gray-400">(200)</span>
                </div>
            </div>
        </div>
     );
}
 
export default Card;