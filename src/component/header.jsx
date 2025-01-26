import React,{ useEffect, useState } from 'react';
import NavBar from './navBar/navBar';
import SearchBar from './common/search';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Header = ({wishedItems, CartUpdated, wishes}) => {

    const [toogle, setToogle] = useState(false);
    const [userToggle, setUserToggle] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [wishedItemsCount, setWishedItemsCount] = useState(0);
    const [user, setUser] = useState(null);
    

    useEffect(() => {

        const user = localStorage.getItem('user');
        if (!user) return setUser(null);
        
        const decoded = jwtDecode(user);
        setUser(decoded);

        const cartItemsCount = sessionStorage.getItem('cartItemsCount') || 0;
        setCartItemsCount(cartItemsCount);
        
        const wishedItemsCount = sessionStorage.getItem('wishedItemsCount') || 0;
        setWishedItemsCount(wishedItemsCount);
    }, [CartUpdated, wishes]);

    const handleToogle = () => {
        setToogle(!toogle);
    }

    const handleUserToogle = () => {
        setUserToggle(!userToggle);
    }

    const handleLoggingout = () => {
        localStorage.removeItem('user');

        window.location.reload();
    }

    return (
        <nav className="flex justify-between p-2 items-center relative px-10 border-b border-gray-400 border-b-1 py-5">
            <h3 className="text-xl font-bold">Exclusive</h3>
            <NavBar toogle={toogle} />
            <div className="flex items-center gap-x-7">
                <SearchBar />
                <div className="flex gap-x-5">
                    <Link className="relative" to="/wishList"><i className="fa-regular fa-heart text-xl"></i><div className="w-5 h-5 absolute top-0 rounded-full left-1/2 flex justify-center items-center bg-red-600 font-light text-white text-sm">{wishedItemsCount}</div></Link>
                    <Link className="relative" to="/cart"><i className="fa-solid fa-cart-shopping text-xl"></i><div className="w-5 h-5 absolute top-0 rounded-full left-1/2 flex justify-center items-center bg-red-600 font-light text-white text-sm">{ cartItemsCount }</div></Link>
                    <div className="relative">
                    {user && <i className="fa-regular fa-user text-xl relative cursor-pointer" onClick={handleUserToogle}></i>}
                        <div className={`w-60 ${userToggle ? "block" : "hidden"} h-52 rounded-md rounded-tr-none bg-gray-200 backdrop-blur-lg  absolute right-0 top-7 z-20`}>
                            {user && <ul className="p-2">
                                <li className="p-1"><i class="text-lg mr-2 fa-regular fa-user"></i><span className="text-base">{user.name}</span></li>
                                <li className="p-1"><i class="text-lg mr-2 fa-regular fa-envelope"></i><span className="text-base">{user.email}</span></li>
                                <Link to="/setting" className="p-1 block"><i class="text-lg mr-2 fa-solid fa-gear"></i><span className="text-base">Setting</span></Link>
                                <Link onClick={handleLoggingout} className="p-1 block"><i class="text-lg mr-2 fa-solid fa-right-from-bracket"></i><span className="text-base">logout</span></Link>
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
            <i onClick={handleToogle} className="fa-solid fa-bars text-xl cursor-pointer block lg:hidden"></i>
        </nav>
    );
}

export default Header;