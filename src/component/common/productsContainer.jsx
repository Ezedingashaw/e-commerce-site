import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkBtn from './linkBtn';
import Card from './card';
import pagination from '../../services/pagination';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';

const ProductsContainer = ({ products, page, type, display, link, wishedUpdated, remove_wish_product, add_wish_product }) => {
    
    const [pageNumber, setPageNumber] = useState(5);
    const [productsToDisplay, setProductsToDisplay] = useState(null);
    const [user, setUser] = useState(null);
    

    const handleLike = async (product) => {
       
        if (user) {
            const productUpdated = { ...product };
        const userId = user.email;
        if (!productUpdated.productId) {
            productUpdated.userId = userId;
        productUpdated.productId = product._id;
        delete productUpdated._id;
        console.log(productUpdated);
        }
        
        try {
            const response = await axios.post(`http://localhost:3009/wish/wishedProduct/${userId}`, productUpdated);
            
            sessionStorage.setItem("wishedItemsCount", response.data.count);
            
            wishedUpdated();

            if (response.data.type === "remove") {
                remove_wish_product(response.data.productId);
                
            } else
            {
                add_wish_product(response.data.product);
            }

        } catch (err) {
            console.log(err);
            }
            
        } else {
        toast.warning("You need to be logged in")
        }
        
    };

    useEffect(() => {

        const userToken = localStorage.getItem("user");

        if (!userToken) setUser(null);
            
        else {
            
        const decoded = jwtDecode(userToken);
            setUser(decoded);
            
            }
        try {
            const productsToDisplay = pagination(page, pageNumber, products);
            console.log(productsToDisplay, "productsToDisplay");
            setProductsToDisplay(productsToDisplay);
        } catch (err) {
            console.log(err);
        }
    }, [page, products])

    setTimeout(() => {
        console.log("REMOVE PRODUCT", remove_wish_product,add_wish_product, products);
    },5000)

    console.log("Remove_wish_product:", remove_wish_product);

    return (
        <div className="flex flex-col items-center gap-y-10 mb-5 border-b border-gray-300 pb-10">
            <ToastContainer />
            <div className="px-5 grid lg:grid-cols-5 md:grid-cols-4 max-sm:grid-cols-2 sm:grid-cols-3  w-full gap-x-3 gap-y-5">
                {productsToDisplay ? (productsToDisplay.map(product => {
                    return (
                        <Card type={type} id={ product._id } handleLike={() => handleLike(product)} product={product} />
                    )
                })) : ""}
            </div>
            <Link to={link}  className={`${display} px-10 py-2 bg-red-500 text-white rounded capitalize hover:bg-red-400 hover:text-gray-800 transition duration-300`} display={display} text="" >view all products</Link>
        </div>
     );
}
 
export default ProductsContainer;