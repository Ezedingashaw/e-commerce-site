import React, { useEffect, useState } from 'react';
import appleImage from '../assets/apple.png';
import iphoneImage from "../assets/iphone1.png";
import { Link } from 'react-router-dom';
import axios from 'axios';

const VoucherOff = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const [count, setCount] = useState(0);
    const [voucherOffProducts, setVoucherOffProducts] = useState([]);
    const intervalRef = React.useRef(null);

    useEffect(() => {
        // Fetch voucher-off products on component mount
        async function fetchVoucherOffProducts() {
            try {
                const { data } = await axios.get("http://localhost:3009/products/voucher_off_products");
                setVoucherOffProducts(data.products || []);
                setCurrentProduct(data.products?.[0] || null);
            } catch (error) {
                console.error("Error fetching voucher off products:", error);
            }
        }
        fetchVoucherOffProducts();

        return () => {
            // Cleanup any intervals if they exist
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (voucherOffProducts.length > 0) {
            // Set up interval to change products
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = (prevCount + 1) % voucherOffProducts.length;
                    setCurrentProduct(voucherOffProducts[newCount]);
                    return newCount;
                });
            }, 10000);

            // Clear interval on component unmount
            return () => clearInterval(intervalRef.current);
        }
    }, [voucherOffProducts]);

    
    return (
        <div className="lg:px-20 px-5 md:px-10 py-5 grow text-white">
            <div className="bg-black rounded grow w-full h-full flex flex-col justify-between px-10">
                {currentProduct ? (
                    <>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-5 items-center">
                    <div className="flex flex-col sm:items-start gap-y-1 items-center pt-10">
                        <div className="flex items-center">
                            {/* <img src={appleImage} alt="" className="h-15 w-20" /> */}
                            <span className="font-light relative left-5">{ currentProduct.name }</span>
                        </div>
                        <h2 className="px-5 text-4xl leading-tight font-medium">Up to 10% <br /> off Voucher</h2>
                        <Link to={`product/${currentProduct._id}`} className="px-5 mt-10 flex items-center hover:text-gray-400 transition duration-300"><span className="inline-block border-gray-500 border-b  pb-1 font-light">Shop Now </span><i className="fa-solid fa-arrow-right relative left-2"></i></Link>
                    </div>
                    <div className="flex justify-center">
                        <img src={`http://localhost:3009/uploads/${currentProduct.imageOne}`} alt="" className="h-48" />
                    </div>
                </div>
                <div className="self-center flex gap-2 mb-2">
                    {/* <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span> */}
                    {voucherOffProducts && voucherOffProducts.map(product => {
                        return (
                            <span key={product._id}  className={`${product._id === currentProduct._id ? "bg-red-500" : "bg-gray-400"} inline-block w-2 h-2  rounded-full cursor-pointer`}></span>
                        )
                    })}
                </div>
                    </>
                ) : (<div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-7xl ">Exclusive</h1>
                </div>)}
            </div>
        </div>
     );
}

export default VoucherOff;