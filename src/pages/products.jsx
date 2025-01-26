import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useParams } from 'react-router-dom';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import ProductSaleHeader from '../component/common/prodSaleHeader';
import ProductsContainer from '../component/common/productsContainer';
import productNotFound from '../assets/productNotFound.avif';

const Products = () => {
    
    const params = useParams();

    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        
        async function fetchData(){
            try {

                const category = params["*"];
                try {
                    const { data } = await axios.get(`http://localhost:3009/products/category/?category=${category}`);
                    setProducts(data);
                } catch (err) {
                    console.log("Error")
                } finally {
                    setLoading(false);
                }

            } catch (err) {
                console.log(err);
           }
        }

        setTimeout(() => {
            fetchData();
        }, 3000);

    }, []);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        textAlign: "center",
        paddingTop: "30px",
        color: "#4542f5"
      };
      

    return ( 
        <div>
            <TopHeader />
            <Header />
            {!loading ? (products ?
                <div className="flex flex-col gap-y-10">
                    <ProductSaleHeader handlePageChangeProduct={handlePageChangeProduct} text="Our Products" header="Explore Our Products" />
                    <ProductsContainer products={products} page={page} />
                </div>
                :
                (<div className="min-h-96 w-screen flex flex-col items-center justify-center">
                    <img className="h-56" src={productNotFound} alt="" />
                    <p className="text-red-600 text-3xl">No products Found</p>
            </div>
            )
                
            ) : (<div className="min-h-96 w-screen flex items-center justify-center">
                <PropagateLoader
                     color="#4542f5"
                     loading={loading}
                     cssOverride={override}
                     size={10}
                     aria-label="Loading Spinner"
                     data-testid="loader"
                />
                </div>)}
        </div>
     );
}
 
export default Products;