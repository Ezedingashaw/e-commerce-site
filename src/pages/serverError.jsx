import React from 'react';
import warningImage from '../assets/warningImage.png';

const ServerError = () => {
    return ( 
        <div className="flex flex-col w-full items-center justify-center p-5">
            <img src={warningImage} className="w-60 m-10" alt="" />
            <div className="flex flex-col gap-7 items-center justify-center w-full">
                <h1 className="text-5xl font-bold text-gray-500">Internal Server Error</h1>
                <p className=" text-xl">Oops! Something went wrong.</p>
                <p className="text-center text-xl">The server encountered an internal error or misconfiguration and was <br /> unable to complete your request.</p>
                <p><span className="font-medium">Error Code</span>: 500</p>
            </div>
        </div>
     );
}
 
export default ServerError;