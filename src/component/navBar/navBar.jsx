import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toogle }) => {
    
    const classes = () => {
        if (toogle) return "absolute lg:relative lg:bg-none max-lg:bg-black max-lg:w-full lg:block max-lg:top-full max-lg:left-0 max-lg:text-center z-10";
        else return "absolute lg:relative hidden lg:bg-none max-lg:bg-black max-lg:w-full lg:block max-lg:top-full max-lg:left-0 max-lg:text-center z-10";
    }
    return (
        <ul className={classes()}>
            <li className="lg:inline-block lg:ml-8 block "><Link to="/" className="text-gray-700 hover:text-gray-500 transition duration-200 max-lg:text-white max-lg:w-full max-lg:inline-block max-lg:hover:bg-gray-800 p-2">Home</Link></li>
            <li className="lg:inline-block lg:ml-8 block "><Link to="/contact" className="text-gray-700 hover:text-gray-500 transition duration-200 max-lg:text-white max-lg:w-full max-lg:inline-block max-lg:hover:bg-gray-800 p-2">Contact</Link></li>
            <li className="lg:inline-block lg:ml-8 block "><Link to="" className="text-gray-700 hover:text-gray-500 transition duration-200 max-lg:text-white max-lg:w-full max-lg:inline-block max-lg:hover:bg-gray-800 p-2">About</Link></li>
            <li className="lg:inline-block lg:ml-8 block "><Link to="/signUp" className="text-gray-700 hover:text-gray-500 transition duration-200 max-lg:text-white max-lg:w-full max-lg:inline-block max-lg:hover:bg-gray-800 p-2">Sign up</Link></li>
        </ul>
     );
}
 
export default NavBar;