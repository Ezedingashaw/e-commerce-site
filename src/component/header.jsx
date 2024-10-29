import React from 'react';
import NavBar from './navBar/navBar';
import SearchBar from './common/search';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-between p-2 items-center px-10 border-b border-gray-400 border-b-1 py-5">
            <h3 className="text-xl font-bold">Exclusive</h3>
            <NavBar />
            <div className="flex items-center gap-x-7">
                <SearchBar />
                <div className="flex gap-x-5">
                    <Link to="/wishList"><i className="fa-regular fa-heart text-xl"></i></Link>
                    <Link to="/cart"><i className="fa-solid fa-cart-shopping text-xl"></i></Link>
                </div>
            </div>
            <i className="fa-solid fa-bars text-xl cursor-pointer block lg:hidden"></i>
        </nav>
    );
}

export default Header;