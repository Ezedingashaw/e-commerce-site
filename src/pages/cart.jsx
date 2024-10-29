import React from 'react';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import joyStickImage from '../assets/joystick.png';
import LinkBtn from '../component/common/linkBtn';
import Footer from '../component/footer';
import PriceTotal from '../component/common/priceTotal';

const Cart = () => {
    return ( 
        <div>
            <TopHeader />
            <Header />
            <div className="lg:p-10 md:p-5 px-2 flex flex-col gap-y-10 mb-5">
                <ul className="list-none flex flex-col gap-y-5">
                    <li className="flex justify-between items-center p-5 shadow-lg">
                    <p className="font-semibold">Product</p>
                    <p className="font-semibold">Price</p>
                    <p className="font-semibold">Quantity</p>
                    <p className="font-semibold">Subtotal</p>
                    </li>
                    <li className="flex justify-between items-center p-5 shadow-lg">
                        <p className="relative">
                            <img className="w-14" src={joyStickImage} alt="" />
                            <span className="w-4 h-4 bg-red-500 absolute top-0 flex justify-center items-center rounded-full cursor-pointer"><i className="fa-solid fa-xmark text-xs text-white"></i></span>
                        </p>
                    <p>$650</p>
                        <div>
                            <p className="border border-gray-400 py-1 px-1 flex items-center gap-x-4 rounded">
                                <span className="inline-block text-xs">01</span>
                                <span className="flex flex-col">
                                    <i class="fa-solid fa-chevron-up text-xs cursor-pointer hover:text-gray-500"></i>
                                    <i class="fa-solid fa-chevron-down text-xs cursor-pointer hover:text-gray-500"></i>
                                </span>
                            </p>
                    </div>
                    <p>Subtotal</p>
                    </li>
                    <li className="flex justify-between items-center p-5 shadow-lg">
                        <p className="relative">
                            <img className="w-14" src={joyStickImage} alt="" />
                            <span className="w-4 h-4 bg-red-500 absolute top-0 flex justify-center items-center rounded-full cursor-pointer"><i className="fa-solid fa-xmark text-xs text-white"></i></span>
                        </p>
                    <p>$650</p>
                        <div>
                            <p className="border border-gray-400 py-1 px-1 flex items-center gap-x-4 rounded">
                                <span className="inline-block text-xs">01</span>
                                <span className="flex flex-col">
                                    <i class="fa-solid fa-chevron-up text-xs cursor-pointer hover:text-gray-500"></i>
                                    <i class="fa-solid fa-chevron-down text-xs cursor-pointer hover:text-gray-500"></i>
                                </span>
                            </p>
                    </div>
                    <p>Subtotal</p>
                    </li>
                    <li className="flex justify-between items-center p-5 shadow-lg">
                        <p className="relative">
                            <img className="w-14" src={joyStickImage} alt="" />
                            <span className="w-4 h-4 bg-red-500 absolute top-0 flex justify-center items-center rounded-full cursor-pointer"><i className="fa-solid fa-xmark text-xs text-white"></i></span>
                        </p>
                    <p>$650</p>
                        <div>
                            <p className="border border-gray-400 py-1 px-1 flex items-center gap-x-4 rounded">
                                <span className="inline-block text-xs">01</span>
                                <span className="flex flex-col">
                                    <i class="fa-solid fa-chevron-up text-xs cursor-pointer hover:text-gray-500"></i>
                                    <i class="fa-solid fa-chevron-down text-xs cursor-pointer hover:text-gray-500"></i>
                                </span>
                            </p>
                    </div>
                    <p>Subtotal</p>
                    </li>
                </ul>
                <div className="flex items-center sm:flex-row gap-y-10 flex-col justify-between ">
                    <div className="flex lg:flex-row gap-y-4 flex-col gap-x-5">
                    <input type="text" placeholder="Coupon Code" className="border border-gray-500 px-2 lg:py-0 py-2 outline-none rounded"/>
                    <LinkBtn text="apply coupon" />
                    </div>
                    <div className="border rounded w-72 border-gray-700 p-3 flex flex-col items-center gap-y-2">
                        <ul className="w-full">
                            <li><h3 className="font-semibold">Cart Total</h3></li>
                            <PriceTotal />
                        </ul>
                        <LinkBtn text="Process to checkout" link="/checkOut" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Cart;