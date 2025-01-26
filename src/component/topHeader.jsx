import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return ( 
        <div className="w-full bg-black flex justify-center items-center p-1">
            <p className="text-white sm:text-sm text-xs">Continue with us as a vendor and sell your products.</p>
            <Link to="/register" className="text-white sm:ml-3 ml-0 sm:text-xl text-xs underline">Register</Link>
        </div>
     );
}
 
export default TopHeader;