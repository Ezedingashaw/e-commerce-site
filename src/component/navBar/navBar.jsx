import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <ul className="hidden lg:block">
            <li className="inline-block ml-8"><Link to="/" className="text-gray-700 hover:text-gray-500 transition duration-200">Home</Link></li>
            <li className="inline-block ml-8"><Link to="" className="text-gray-700 hover:text-gray-500 transition duration-200">Contact</Link></li>
            <li className="inline-block ml-8"><Link to="" className="text-gray-700 hover:text-gray-500 transition duration-200">About</Link></li>
            <li className="inline-block ml-8"><Link to="/signUp" className="text-gray-700 hover:text-gray-500 transition duration-200">Sign up</Link></li>
        </ul>
     );
}
 
export default NavBar;