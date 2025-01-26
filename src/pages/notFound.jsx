import React from 'react';
import LinkBtn from '../component/common/linkBtn';
import { Link } from 'react-router-dom';

const Error = () => {
    return ( 
        <div className="h-screen flex justify-center items-center"> 
            <div className="flex flex-col justify-center items-center gap-y-5">
            <h1 className="text-6xl">404 Not Found</h1>
                <p className="text-sm">Your visited page not found. You may go home page.</p>
                <Link to="/" className={`px-10 py-2 bg-red-500 text-white rounded capitalize hover:bg-red-400 hover:text-gray-800 transition duration-300`} >Go Back To Home Page</Link>
            </div>
       </div>
     );
}
 
export default Error;