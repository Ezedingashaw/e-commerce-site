import React from 'react';

const Footer = () => {
    return ( 
        <div className="text-white bg-black p-3 flex flex-col items-center">
            <div className="p-10 grid grid-cols-2 items-center gap-10 md:justify-between w-full md:flex">
                <ul>
                    <li>
                        <h3 className="mb-2 text-xl">Exclusive</h3>
                    </li>
                    <li className="py-1">
                        <h4>Subscribe</h4>
                    </li>
                    <li className="py-1">
                        <p href="" className="text-sm font-light">Get off your first order</p>
                    </li>
                    <li className="py-1">
                        <div className="flex gap-x-2 items-center justify-between border-gray-400 border px-1 rounded w-full">
                            <input type="text" placeholder="Enter your email" className="grow bg-transparent outline-none p-1" />
                            <i className="fa-regular fa-paper-plane inline-block"></i>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3 className="mb-2 text-xl">Support</h3>
                    </li>
                    <li>
                        <a href="" className="text-sm font-light py-1">111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</a>
                    </li>
                    <li>
                        <a href="" className="text-sm font-light py-1">exclusive@gmail.com</a>
                    </li>
                    <li>
                        <a href="" className="text-sm font-light py-1">+88015-88888-9999</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3 className="mb-2 text-xl">Account</h3>
                    </li>
                    <li><a href="" className="text-sm font-light py-1">My Account</a></li>
                    <li><a href="" className="text-sm font-light py-1">Login / Register</a></li>
                    <li><a href="" className="text-sm font-light py-1">Cart</a></li>
                    <li><a href="" className="text-sm font-light py-1">Wishlist</a></li>
                    <li><a href="" className="text-sm font-light py-1">Shop</a></li>
                </ul>
                <ul>
                    <li>
                        <h3 className="mb-2 text-xl">Quick Link</h3>
                    </li>
                    <li><a href="" className="text-sm font-light py-1">Privacy Policy</a></li>
                    <li><a href="" className="text-sm font-light py-1">Terms of use</a></li>
                    <li><a href="" className="text-sm font-light py-1">FAQ</a></li>
                    <li><a href="" className="text-sm font-light py-1">Contact</a></li>
                </ul>
            </div>
            <p className="font-light text-sm">© Copyright 2024.All right reserved</p>
        </div>
     );
}
export default Footer;