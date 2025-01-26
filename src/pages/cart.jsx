import React, { useState, useEffect } from 'react';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import joyStickImage from '../assets/joystick.png';
import LinkBtn from '../component/common/linkBtn';
import Footer from '../component/footer';
import PriceTotal from '../component/common/priceTotal';
import items from '../services/cartItems';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom'

const Cart = ({ user, CartUpdated}) => {

    // const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(null);

    useEffect(() => {

        async function fetchData() {
            if (user) {
                try {
                    const { data } = await axios.get(`http://localhost:3009/cart/cartItems/${user.email}`)

                    if (data.length > 0) {
                        setCartItemsCount(data.length)
                    }

                    setCartItems(data);
                    console.log(data,"DATAA")
                } catch (err) {
                    console.log(err)
                }
            }

        }

        fetchData();

    }, [user])

    const handleIncrease = async (id, productId) => {
        const userId = "123123de";
        const _id = id;
        try {
            const increaseProductQuantity = await axios.put(`http://localhost:3009/cart/cartProduct/${productId}/?type=increment`, { userId: user.email});
                
            const updateOnCartProducts = [...cartItems];
            const index = updateOnCartProducts.findIndex(product => product.productId === productId);
            updateOnCartProducts[index].quantity = increaseProductQuantity.data;

            setCartItems(updateOnCartProducts);
        //     const cartItem = [...cartItems];
        // const index = cartItem.findIndex(items => items._id === _id);
        // cartItem[index].quantity += 1;
        // cartItem[index].totalPrice = cartItem[index].quantity * cartItem[index].price;

        // setCartItems(cartItem);
        } catch (err) {
            console.log(err);
        }
     };

    const handleDecrease = async (id, productId) => {
        const userId = "123123de";
        const _id = id;

        try {
            const decreaseProductQuantity = await axios.put(`http://localhost:3009/cart/cartProduct/${productId}/?type=decrement`, {userId: user.email});
            
            const updateOnCartProducts = [...cartItems];
            const index = updateOnCartProducts.findIndex(product => product.productId === productId);
            if (decreaseProductQuantity.data === 0) {

                updateOnCartProducts.splice(index, 1);
            }
            else {
                updateOnCartProducts[index].quantity = decreaseProductQuantity.data;
            }

            setCartItems(updateOnCartProducts);
        //     const cartItem = [...cartItems];
        // const index = cartItem.findIndex(items => items._id === _id);
        // cartItem[index].quantity -= 1;
        // cartItem[index].totalPrice = cartItem[index].quantity * cartItem[index].price;
        // if (cartItem[index].quantity === 0) {
        //     cartItem.splice(index, 1);
        // }
        // setCartItems(cartItem);
        } catch (err) {
            
        }
        
    };
    
    const priceTotal = () => {
        let price = 0
        cartItems.map(items => {
            price += items.price * items.quantity;
        });

        return price;
    };

    const removeItem = async (id) => {

        const data = {
            productId: id,
            userId: user.email
        }
        try {
            const removeProduct = await axios.delete(`http://localhost:3009/cart/removeProduct/${id}`, {params: data});
            if (removeProduct.status === 200) {
                
                const cartProducts = [...cartItems];
                
                const index = cartProducts.findIndex(product => product.productId === id);
                
                const cart_item_count = removeProduct.data.count;

                sessionStorage.setItem("cartItemsCount", cart_item_count);
                cartProducts.splice(index, 1);

                setCartItems(cartProducts);

                // const cartItemsCount = sessionStorage.getItem("cartItemsCount") || 0;

                // if (cartItemsCount > 0) {
                    
                //     cartItemsCount -= 1;
                //     sessionStorage.setItem("cartItemsCount", cartItemsCount);
                //      CartUpdated();
                // }

                
            }
            
        } catch (error) {
            
        }
        // const cartItem = [...cartItems];
        // const index = cartItem.findIndex(items => items._id === _id);
        // cartItem.splice(index, 1);

        // setCartItems(cartItem);
    };
    
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
                    {cartItems.length > 0 ? (cartItems.map(item => {
                        return (
                            <li className="flex justify-between items-center p-5 shadow-lg">
                        <p className="relative">
                            <img className="w-14" src={`http://localhost:3009/uploads/${item.image}`} alt="" />
                            <span onClick={() => removeItem(item.productId)} className="w-4 h-4 bg-red-500 absolute top-0 flex justify-center items-center rounded-full cursor-pointer"><i className="fa-solid fa-xmark text-xs text-white"></i></span>
                        </p>
                                <p>${item.price}</p>
                        <div>
                            <p className="border border-gray-400 py-1 px-1 flex items-center gap-x-4 rounded">
                                        <span className="inline-block text-xs">{item.quantity}</span>
                                <span className="flex flex-col">
                                    <i onClick={()=> handleIncrease(item._id, item.productId)} class="fa-solid fa-chevron-up text-xs cursor-pointer hover:text-gray-500"></i>
                                    <i onClick={()=> handleDecrease(item._id, item.productId)} class="fa-solid fa-chevron-down text-xs cursor-pointer hover:text-gray-500"></i>
                                </span>
                            </p>
                    </div>
                    <p>${(item.price * item.quantity)}</p>
                    </li>
                        )
                    })) : (<div className="min-h-96 w-full flex items-center justify-center">
                      <p>Empty</p>
                    </div>)}
                </ul>
                <div className="flex items-center sm:flex-row gap-y-10 flex-col justify-between ">
                    <div className="flex lg:flex-row gap-y-4 flex-col gap-x-5">
                    <input type="text" placeholder="Coupon Code" className="border border-gray-500 px-2 lg:py-0 py-2 outline-none rounded"/>
                    <LinkBtn text="apply coupon" />
                    </div>
                    <div className="border rounded w-72 border-gray-700 p-3 flex flex-col items-center gap-y-2">
                        <ul className="w-full">
                            <li><h3 className="font-semibold">Cart Total</h3></li>
                            <PriceTotal priceTotal={priceTotal()} />
                        </ul>
                        <Link className="bg-red-500 px-5 py-2 text-white rounded"  to={ cartItemsCount ? "/checkOut" : ""}>Process to checkout</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Cart;