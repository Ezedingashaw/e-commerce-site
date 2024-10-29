import React from 'react';

const ServiceIcons = ({header, text, icon}) => {
    return ( 
        <div className="flex flex-col justify-center items-center gap-y-1">
            <div className=" m-4 w-16 h-16 bg-gray-200 flex justify-center items-center rounded-full">
                <div className="w-12 h-12 bg-black flex justify-center items-center rounded-full">
                {icon}
                </div>
            </div>
            <h3 className="text-base uppercase font-bold">{ header }</h3>
            <p className="capitalize font-medium text-xs">{ text }</p>
        </div>
     );
}
 
export default ServiceIcons;