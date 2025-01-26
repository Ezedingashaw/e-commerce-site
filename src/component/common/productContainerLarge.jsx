import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkBtn from './linkBtn';
import Card from './card';
import pagination from '../../services/pagination';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ProductsContainerLarge = ({ products, page, display, link, handleLikeChange, wishedUpdated }) => {
    
    const [pageNumber, setPageNumber] = useState(15);
    const [productsToDisplay, setProductsToDisplay] = useState(null);
    const [user, setUser] = useState(null);
    

    useEffect(() => {

        const userToken = localStorage.getItem("user");

        if (!userToken) return setUser(null);

        const decoded = jwtDecode(userToken);

        setUser(decoded);
    })
    
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
            const { data } = await axios.post(`http://localhost:3009/wish/wishedProduct/${userId}`, productUpdated);
            
            wishedUpdated();
            

        } catch (err) {
            console.log(err);
        }
        }
        else toast.warning("You need to logged in")
    };

    useEffect(() => {
        try {
            const productsToDisplay = pagination(page, pageNumber, products);
            console.log(productsToDisplay, "productsToDisplay");
            setProductsToDisplay(productsToDisplay);
        } catch (err) {
            console.log(err);
        }
    }, [page])


    return (
        <div className="flex flex-col items-center gap-y-10 mb-5 border-b border-gray-300 pb-10">
            <ToastContainer />
            <div className="px-5 grid lg:grid-cols-5 md:grid-cols-4 max-sm:grid-cols-2 sm:grid-cols-3  w-full gap-x-3 gap-y-5">
                {productsToDisplay ? (productsToDisplay.map(product => {
                    return (
                        <Card id={product._id} handleLike={() => handleLike(product)} product={product} />
                    )
                })) : ""}
            </div>
            <LinkBtn link={link} display={display} text="view all products" />
        </div>
     );
}
 
export default ProductsContainerLarge;