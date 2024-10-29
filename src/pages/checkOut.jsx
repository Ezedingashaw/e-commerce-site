import React, { Component } from 'react';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Input from '../component/common/input';
import joystick from '../assets/joystick.png';
import PriceTotal from '../component/common/priceTotal';
import LinkBtn from '../component/common/linkBtn';
import Footer from '../component/footer';

const CheckOut = () => {
    return ( 
        <div>
            <TopHeader />
            <Header />
            <div className="grid md:grid-cols-2 grid-cols gap-y-10 md:p-10 ms:p-5 mb-5">
                <div className="flex flex-col gap-y-2 justify-center items-center ms:px-0 px-2">
                    <div className="lg:w-9/12 w-full ">
                        <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">First Name</label>
                        <Input style="bg-gray-100 rounded p-2 w-full"/>
                        </div>
                    <div className="lg:w-9/12 w-full ">
                        <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Street Address</label>
                        <Input style="bg-gray-100 rounded p-2 w-full"/>
                        </div>
                    <div className="lg:w-9/12 w-full ">
                        <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Apartment,floor,etc.(optional)</label>
                        <Input style="bg-gray-100 rounded p-2 w-full"/>
                        </div>
                    <div className="lg:w-9/12 w-full ">
                        <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Town/City</label>
                        <Input style="bg-gray-100 rounded p-2 w-full"/>
                        </div>
                    <div className="lg:w-9/12 w-full ">
                        <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Phone Number</label>
                        <Input style="bg-gray-100 rounded p-2 w-full"/>
                        </div>
                    <div className="lg:w-9/12 w-full ">
                        <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Email Address</label>
                        <Input style="bg-gray-100 rounded p-2 w-full"/>
                        </div>
                </div>
                <div className="flex flex-col items-center gap-y-5 p-2">
                    <div className="flex flex-col gap-y-2 lg:w-6/12 ms:w-9/12 w-full max-h-36 overflow-scroll itemsScroll px-2">
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                    </div>
                    <ul className="lg:w-6/12 w-9/12">
                        <PriceTotal />
                    </ul>
                    <div className="lg:w-4/12 w-9/12 flex flex-col gap-y-3">
                        <div className="flex gap-x-2">
                            <input className="w-4 cursor-pointer" type="radio" name="paymentMethod" id="" />
                            <label className="text-sm font-normal" htmlFor="">Bank</label>
                            </div>
                        <div className="flex gap-x-2">
                            <input className="w-4 cursor-pointer" type="radio" name="paymentMethod" id="" />
                            <label className="text-sm font-normal" htmlFor="">Cash on delivery</label>
                            </div>
                    </div>
                    <div className="flex md:flex-row md:items-normal  gap-y-5 flex-col justify-between  gap-x-2 my-2">
                    <input type="text" placeholder="Coupon Code" className="border border-gray-500 px-2 lg:py-0 py-3 outline-none rounded"/>
                    <LinkBtn text="apply coupon" />
                    </div>
                    <LinkBtn text="place order" style="self-end" />
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default CheckOut;