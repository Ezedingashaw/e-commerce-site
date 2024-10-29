import React from 'react';
import appleImage from '../assets/apple.png';
import iphoneImage from "../assets/iphone1.png";

const VoucherOff = () => {
    return ( 
        <div className="lg:px-20 px-5 md:px-10 py-5 grow text-white">
            <div className="bg-black grow w-full h-full flex flex-col justify-between px-10">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-5 items-center">
                    <div className="flex flex-col sm:items-start gap-y-1 items-center">
                        <div className="flex items-center">
                            <img src={appleImage} alt="" className="h-15 w-20" />
                            <span className="font-light">iphone 14 Series</span>
                        </div>
                        <h2 className="px-5 text-4xl leading-tight font-medium">Up to 10% <br /> off Voucher</h2>
                        <a href="" className="px-5 mt-10 flex items-center hover:text-gray-400 transition duration-300"><span className="inline-block border-gray-500 border-b  pb-1 font-light">Shop Now </span><i className="fa-solid fa-arrow-right relative left-2"></i></a>
                    </div>
                    <div className="flex justify-center">
                        <img src={iphoneImage} alt="" className="h-full" />
                    </div>
                </div>
                <div className="self-center flex gap-2 mb-2">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                </div>
            </div>
        </div>
     );
}

export default VoucherOff;