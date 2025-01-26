import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import VoucherOff from '../component/voucherOff';
import Categories from '../component/common/categories';
import ProductSaleHeader from '../component/common/prodSaleHeader';
import TimeBox from '../component/common/timeBox';
import ProductsContainer from '../component/common/productsContainer';
import CategoryContainer from '../component/common/categoryContainer';
import LinkBtn from '../component/common/linkBtn';
import AllProducts from '../component/common/allTypeProducts';
import NewProducts from '../component/common/newArrival';
import Services from '../component/common/services';
import Footer from '../component/footer';
import {GridLoader} from 'react-spinners';
import pagination from '../services/pagination.js';

const Home = ({ cartItemcount, user, category, changeCategory, pendinProduct, newProduct, CartUpdated, wishedUpdated, wishes }) => {

    const [page, setPage] = useState(0);
    const [discountPage, setDiscountPage] = useState(0);
    const [voucher_off_products, setVoucher_off_products] = useState(null);
    const [voucher_off_products_count, setVoucher_off_products_count] = useState(0);
    // const [productDiscount, setProductsDiscount] = useState([]);
    // const [product, setProducts] = useState([]);
    const [products, setProductAll] = useState([]);
    // const [bestSellingProducts, setBestSellingProducts] = useState([]);
    
    // const [pageProduct, setPageProduct] = useState(0);
    const [pageBestSell, setPageBestSell] = useState(0);
    

    // const handleLikeChange = (products) => {
    //     setProductsDiscount(products);
    // };
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3009/products/allProducts');
            if (pendinProduct) {
                const product = response.data.products.filter(product => product._id !== pendinProduct)
                console.log(product, "pendinProduct", pendinProduct)
                setProductAll(product)
            } else {
                setProductAll(response.data.products);
            }

            if (newProduct) {
                const product = [...products];
                product.push(newProduct);

                setProductAll(product);
            }
            
        };

        fetchData();

        async function fetchCartData() {
       
            if (user) {
              try {
                const { data } = await axios.get(`http://localhost:3009/cart/cartItemsCount/${user.email}`);
                sessionStorage.setItem('cartItemsCount', data);
                console.log("CART items count", data);
            } catch (err) {
                console.log(err)
            }
             }
              
          }
          
          fetchCartData();
      
          async function fetchWishedData() {
            if (user) {
              try {
                const { data } = await axios.get(`http://localhost:3009/wish/wishedProductCount/${user.email}`);
                sessionStorage.setItem('wishedItemsCount', data);
                console.log("WISHED items count", data);
            } catch (err) {
                console.log(err)
              }
            }
            
          }
      
        fetchWishedData();
        
        async function fetchVoucherOffProducts() {
            
            const { data } = await axios.get('http://localhost:3009/products/voucher_off_products');
            
            const count = data.products.length;

            setVoucher_off_products_count(count);

            setVoucher_off_products(data.products);
        }

        fetchVoucherOffProducts();

    }, [user, pendinProduct, newProduct]);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        textAlign: "center",
        paddingTop: "30px",
        color: "#4542f5"
      };

    const productsWithDiscount = products.filter(product => product.discount > 0);
    

    const handlePageChangeProduct = (type, typeOfProducts, products, pages, pageNumber) => {
        console.log(type, typeOfProducts, products, pageNumber, pages)
        let updatedPage = 0;
        
        if (typeOfProducts === "discount") {

            if (type === "increase") {
                updatedPage = discountPage + 1;
                if (updatedPage * pageNumber >= products.length) return 0;
                setDiscountPage(updatedPage);
            } else {
                updatedPage = discountPage - 1;
                if (updatedPage < 0) return;
                setDiscountPage(updatedPage);
            }

            }
        else if (typeOfProducts === "bestSelling") {

            if (type === "increase") {
                updatedPage = pageBestSell + 1;
                if (updatedPage * pageNumber >= products.length) return 0;
                setPageBestSell(updatedPage);
            } else {
                updatedPage = pageBestSell - 1;
                if (updatedPage < 0) return;
                setPageBestSell(updatedPage);
            }

        } else {

            if (type === "increase") {
                updatedPage = page + 1;
                if (updatedPage * pageNumber >= products.length) return 0;
                setPage(updatedPage);
            } else {
                updatedPage = page - 1;
                if (updatedPage < 0) return;
                setPage(updatedPage);
            }

            }
           
            
    };
    console.log("pendinProduct",pendinProduct)

    // console.log(products, "products");

    return (
        (products.length > 0 ? (
            <Fragment>
            <TopHeader />
                <Header wishes={wishes}  cartItemcount={ cartItemcount } wishedUpdated={wishedUpdated} CartUpdated={CartUpdated} />
            <div className="flex">
                <Categories />
                <VoucherOff products={voucher_off_products} />
            </div>
            <div className="flex flex-col gap-y-10">
            <ProductSaleHeader products={productsWithDiscount} page={discountPage} typeOfProducts="discount"  handlePageChangeProduct={handlePageChangeProduct} text="Today's" time={<TimeBox />} header="Flash Sales" />
            <ProductsContainer wishedUpdated={wishedUpdated}  products={productsWithDiscount} page={discountPage} link="/products/select/discount/?type=discount" />
            </div>
            <CategoryContainer category={category} changeCategory={changeCategory} />
            <div className="flex flex-col gap-y-10">
                <ProductSaleHeader products={products} handlePageChangeProduct={handlePageChangeProduct} text="This Month" header="Best Selling Products"   />
            <ProductsContainer wishedUpdated={wishedUpdated} products={products} page={page} link="/products/select/all/?type=all"  />
            </div>
            <AllProducts wishedUpdated={wishedUpdated} handlePageChangeProduct={handlePageChangeProduct}  products={products} page={page} link="/products/select/discount/?type=all"/>
            <NewProducts wishedUpdated={wishedUpdated} />
            <Services />
            <Footer />
        </Fragment>
        ) : <div className="h-screen w-scree flex items-center justify-center">
                <GridLoader
                     color="#4542f5"
                     loading={true}
                     cssOverride={override}
                     size={10}
                     aria-label="Loading Spinner"
                     data-testid="loader"
                />
       </div>)
     );
}
 
export default Home;