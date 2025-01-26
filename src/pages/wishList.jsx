import React, { useState, useEffect, useCallback } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import BtnLinkNoBg from '../component/common/btnLinkNoBg';
import ProductsContainer from '../component/common/productsContainer';
import Tag from '../component/common/tag';
import Footer from '../component/footer';
import axios from 'axios';
import ProductSaleHeader from '../component/common/prodSaleHeader';
import { jwtDecode } from 'jwt-decode';

const WishList = ({wishes}) => {

    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        textAlign: "center",
        paddingTop: "30px",
        color: "#4542f5"
      };

    useEffect(() => {

        const userToken = localStorage.getItem("user");

        if (!userToken) return setUser(null);
        
        const decoded = jwtDecode(userToken);
        setUser(userToken);

        async function fetchData() {
            if (decoded) {
                try {
                    const { data } = await axios.get(`http://localhost:3009/wish/wishedProduct/${decoded.email}`)
                    console.log("WISHED PRODUCT", data);
                    if (data.length > 0) setProducts(data);
                    
                    else setProducts(null);
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
               }
            } 
        }

        fetchData();
    },[])

    const itemsWished = 2;

    
    const handlePageChangeProduct = (type, products, pageNumber) => {
        let updatedPage = 0;
        if (type === "increase") {
            updatedPage = page + 1;
            if (updatedPage * pageNumber > products.length) return;
            setPage(updatedPage);
        } else {
            updatedPage = page - 1;
            if (updatedPage < 0) return; 
            setPage(updatedPage);
        }
            
    };

    const add_products_to_wish = (product) => {
        const products_to_update = [ ...products ];
        products_to_update.push(product);

        setProducts(products_to_update);
    }

    const remove_products_to_wish = useCallback((product_id) => {
        const products_to_update = [...products];
        const products_filtered = products_to_update.filter(product => product.productId !== product_id);

        if (products_filtered.length > 0) setProducts(products_filtered);
        else setProducts(null);
    }, []);

    console.log("Remove products from the list", remove_products_to_wish);

    console.log("Remove products from PRODUCTS", products);
    return ( 
        <div className="h-screen flex flex-col content-between">
            <div>
                <div className="self-start w-full">
                    <TopHeader />
                    <Header wishes={wishes} wishedItems={itemsWished} />
                </div>
                <div className="flex justify-between items-center p-10">
                    <h3>Whishlist <span>(400)</span></h3>
                    <BtnLinkNoBg text="Move all to bag" />
                </div>
            </div>
            {loading ? (<PropagateLoader
                     color="#4542f5"
                     loading={loading}
                     cssOverride={override}
                     size={10}
                     aria-label="Loading Spinner"
                     data-testid="loader"
                />) : (products && <div>
            <ProductSaleHeader handlePageChangeProduct={handlePageChangeProduct} />
                <ProductsContainer add_wish_product={add_products_to_wish} remove_wish_product={remove_products_to_wish} type="wished" products={products} page={page} />
            </div>)}
            {/* <div className="">
                <Footer />
            </div> */}
        </div>
     );
}

export default WishList;