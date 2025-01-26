import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useParams, useLocation } from 'react-router-dom';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import productNotFound from '../assets/productNotFound.avif';
import ProductsContainerLarge from '../component/common/productContainerLarge';
import PaginationLinks from '../component/common/paginationLinks';
import pageGen from '../services/pagesGenerator';
import pagination from '../services/pagination';

const ProductsSelect = () => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const params = useParams();
    const query = useQuery();

    const [pageNumber, setPageNumber] = useState(15);
    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState(null);
    
    
    useEffect(() => {
        const type = query.get("type");
        setType(type);
        
        async function fetchData(){
            try {

                const category = params["*"];
                try {
                    const { data } = await axios.get(`http://localhost:3009/products/select/?type=${type}`);
                    setProducts(data);
                    if (data) {
                        setTimeout(() => {
                            const dataOnPage = pageGen(data.length, pageNumber);
                            console.log(dataOnPage,"Data on page");
                        setPages(dataOnPage);
                        }, 1000)
                    }
                    
                } catch (err) {
                    console.log("Error")
                } finally {
                    setLoading(false);
                }

            } catch (err) {
                console.log(err);
           }
        }

            fetchData();

    }, []);

    const handleNextPage = () => {
        
        const pageUpdate = page + 1;
       
        if (pageUpdate >= pages.length) return 0;
        setPage(pageUpdate);
     }
    
    const handlePreviousPage = () => {
        const pageUpdate = page - 1;
       
        if (pageUpdate < 0) return 0;
        setPage(pageUpdate);
    }

    

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        textAlign: "center",
        paddingTop: "30px",
        color: "#4542f5"
      };
      

    return ( 
        <div className="mb-10">
            <TopHeader />
            <Header />
            {!loading ? (products ?
                <div className="flex flex-col gap-y-10">
                    <ProductsContainerLarge display="hidden" products={products} page={page} />
                    <div className="w-full flex items-center justify-center gap-2">
                        <PaginationLinks change={handlePreviousPage} text="Previous" />
                        <div>
                            {pages ? pages.map(page => <span className="border border-gray-300 py-1 px-2 mr-1 rounded">{page}</span>) : ''}
                        </div>
                    <PaginationLinks change={handleNextPage} text="Next" />
                    </div>
                    <p>{ page }</p>
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
 
export default ProductsSelect;