import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import PropagateLoader from 'react-spinners/PropagateLoader';
import TopHeader from '../topHeader';
import Header from '../header';
import returnImage from '../../assets/return.png';
import carImage from '../../assets/car.png';
import ProductRate from './productRate.jsx'
import LinkBtn from './linkBtn';
import Tag from './tag';
import ProductsContainer from './productsContainer';
import products from '../../services/products.js'
import image from '../../assets/istockphoto-1337144146-612x612-removebg-preview.png';

import reviews from '../../services/reviews.js';

const ViewProduct = ({ user, CartUpdated }) => {

    const params = useParams();
    const [product, setProduct] = useState(null);
    const [imageLarge, setImageLarge] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [loading, setLoading] = useState(true);
    const [rate, setRate] = useState();

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        textAlign: "center",
        paddingTop: "30px",
        color: "#4542f5"
      };
    
    useEffect(() => {
        
        const { id } = params;

        async function fetchData(){
            try {
                const response = await axios.get(`http://localhost:3009/products/oneProduct/${id}`);
            setProduct(response.data.products);
            setImageLarge(`http://localhost:3009/uploads/${response.data.products[0].imageOne}`)
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
        
        
    }, []);

    const handleImageChange = (event) => {
        const { src } = event.target;
        console.log(src);
        setImageLarge(src);
    }

    const handleIncreament = () => {
        setQuantity(quantity => quantity + 1)
    }

    const handleDecreament = () => {
        let quantityToDec = quantity;
        if (quantityToDec === 0) return setQuantity(0)
        
            setQuantity(quantity => quantity -1)
    }

    const handleAddToCart = async (product) => {

        if (user) {
            console.log(product)
            const productInfo = {
            name: product[0].name,
            image: product[0].imageOne,
            productId: product[0]._id,
            ownerId: product[0].ownerId,
            quantity: 1,
            price: product[0].price,
            userId: user.email
        }
        console.log(product[0]._id, product, productInfo);

            const response = await axios.post('http://localhost:3009/cart/addProductToCart', productInfo);
            
            const cart_items_count = response.data.count;

            sessionStorage.setItem("cartItemsCount", cart_items_count);

        CartUpdated();
        }else
        toast.warning("You need to logged in");
        
    } 

    const handleReviewCount = (reviews) => {

        let reviewCount = 0;

        reviews.map(review => reviewCount = reviewCount + 1)
       
        return reviewCount;

    }


    return (
        (product ? (<div className="flex flex-col gap-y-10">
            <div>
                <ToastContainer />
                <TopHeader />
                <Header />
                <div className="lg:px-10 px-5 py-5 grid lg:grid-cols-3 grid-cols-2 gap-x-10">
                    <div className="flex gap-y-5 max-sm:flex-col lg:col-span-2 col-span-3 gap-x-5">
                        <ul className="grid max-sm:flex max-ms:flex-row gap-x-3 grid-cols-1 sm:w-36 gap-y-4">
                            <li className="bg-gray-100 rounded flex items-center justify-center cursor-pointer" onClick={handleImageChange}><img className="w-32 h-24 object-contain" src={`http://localhost:3009/uploads/${product[0].imageOne}`} alt="" /></li>
                            <li className="bg-gray-100 rounded flex items-center justify-center cursor-pointer" onClick={handleImageChange}><img className="w-32 h-24 object-contain" src={`http://localhost:3009/uploads/${product[0].imageTwo}`} alt="" /></li>
                            <li className="bg-gray-100 rounded flex items-center justify-center cursor-pointer" onClick={handleImageChange}><img className="w-32 h-24 object-contain" src={`http://localhost:3009/uploads/${product[0].imageThree}`} alt="" /></li>
                            <li className="bg-gray-100 rounded flex items-center justify-center cursor-pointer" onClick={handleImageChange}><img className="w-32 h-24 object-contain" src={`http://localhost:3009/uploads/${product[0].imageFour}`} alt="" /></li>
                        </ul>
                        <div className=" bg-gray-100 flex flex-grow justify-center items-center rounded">
                            <img className="w-80 object-cover" src={imageLarge} alt="" />
                        </div>
                    </div>
                    <div className="max-lg:col-span-3">
                        <ul className="max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1">
                            <li className="flex flex-col gap-y-3 mb-5">
                                <h2 className="text-2xl font-semibold">{ product[0].name }</h2>
                                <div className="flex gap-x-5 items-center"><ProductRate rate={product[0].reviews} /> <p><span className="text-gray-400">({handleReviewCount(product[0].reviews)} Reviews) |</span> <span className="text-green-400">in stock</span></p><Link to={`/rating/${product[0]._id}`} className="text-blue-600 font-medium hover:text-blue-500 transition-all duration-200" >Rate product</Link></div>
                                <span className="text-xl font-medium">${product[0].price}</span>
                                <p className="text-left text-base font-normal">{ product[0].discription }</p>
                            </li>
                            <li className="flex flex-col gap-3">
                                {/* <div className="flex items-center gap-x-5">
                                <span className="font-normal text-base">Colors:</span>
                                    <div className="flex gap-x-2 items-center">
                                    <input type="radio" name="color" className="text-xl" id="" />
                                    <input type="radio" name="color" className="text-xl" id="" />
                                    </div>
                                </div> */}
                                {/* <div className="flex gap-x-5 items-end">
                                    <span className="text-base inline-block font-normal">Size:</span>
                                    <div className="flex gap-x-3">
                                        <div className="w-9 h-9 border border-gray-300 flex justify-center items-center rounded hover:bg-red-400 hover:text-white hover:border-red-300 cursor-pointer transition duration-300">
                                            <span className="inline-block text-xs font-medium">XS</span></div>
                                        <div className="w-9 h-9 border border-gray-300 flex justify-center items-center rounded hover:bg-red-400 hover:text-white hover:border-red-300 cursor-pointer transition duration-300">
                                            <span className="inline-block text-xs font-medium">S</span></div>
                                        <div className="w-9 h-9 border border-gray-300 flex justify-center items-center rounded hover:bg-red-400 hover:text-white hover:border-red-300 cursor-pointer transition duration-300">
                                            <span className="inline-block text-xs font-medium">M</span></div>
                                        <div className="w-9 h-9 border border-gray-300 flex justify-center items-center rounded hover:bg-red-400 hover:text-white hover:border-red-300 cursor-pointer transition duration-300">
                                            <span className="inline-block text-xs font-medium">L</span></div>
                                        <div className="w-9 h-9 border border-gray-300 flex justify-center items-center rounded hover:bg-red-400 hover:text-white hover:border-red-300 cursor-pointer transition duration-300">
                                            <span className="inline-block text-xs font-medium">XL</span></div>
                                    </div>
                                </div> */}
                                <div className="flex items-center gap-x-5">
                                   
                                    <div className="">
                                        <button onClick={() => handleAddToCart(product)} className="bg-red-600 text-white py-1 px-4 rounded-sm">Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-5">
                                <div className="border border-gray-400 rounded  max-md:w-9/12">
                                    <div className="flex items-center gap-x-5 p-2 border-b border-gray-400">
                                        <img className="w-7 h-7" src={ carImage} alt="" />
                                        <div>
                                            <h3 className="text-sm font-medium">Free Delivery</h3>
                                            <a className="text-xs underline" href="">Enter your postal code for Delivery Availability</a>
                                        </div>
                                        </div>
                                    <div className="flex items-center gap-x-5 p-2">
                                        <img className="w-7 h-7" src={ returnImage } alt="" />
                                        <div>
                                            <h3 className="text-sm font-medium">Return Delivery</h3>
                                            <p className="text-xs">Free 30 Days Delivery Returns.<a href="">Details</a></p>
                                        </div>
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-10">
                <h2 className="text-red-600 text-2xl">Reviews</h2>
                { product[0].reviews.map(review => {
                    return (
                        <div className="border-b border-gray-300 p-4">
                    <div className="flex items-center gap-5">
                    <div className="w-10 h-10 bg-gray-600 rounded-full">
                    <img src={image} className="w-full" alt="" />
                        </div>
                        <span>{review.name}</span>
                    </div>
                    <div className="flex gap-5 items-end">
                        <div>
                        <i class={`fa-solid fa-star ${review.rate >= 1 ? "text-amber-400" : "text-gray-300"}`}></i>
                        <i class={`fa-solid fa-star ${review.rate >= 2 ? "text-amber-400" : "text-gray-300"}`}></i>
                        <i class={`fa-solid fa-star ${review.rate >= 3 ? "text-amber-400" : "text-gray-300"}`}></i>
                        <i class={`fa-solid fa-star ${review.rate >= 4 ? "text-amber-400" : "text-gray-300"}`}></i>
                        <i class={`fa-solid fa-star ${review.rate >= 5 ? "text-amber-400" : "text-gray-300"}`}></i>
                        </div>
                        <span>12/04/2024</span>
                    </div>
                    <p className="max-w-96">{review.comment}</p>
                </div>
                    )
                })}
            </div>
        </div>) : (<div className="min-h-96 w-full flex items-center justify-center">
                <PropagateLoader
                color="#4542f5"
                loading={loading}
                cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
                
                />
            </div>))
     );
}
 
export default ViewProduct;