import React, { Fragment } from 'react';
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

const Home = () => {
    return ( 
        <Fragment>
            <TopHeader />
            <Header />
            <div className="flex">
                <Categories />
                <VoucherOff />
            </div>
            <div className="flex flex-col gap-y-10">
            <ProductSaleHeader text="Today's" time={<TimeBox />} header="Flash Sales" />
            <ProductsContainer />
            </div>
            <CategoryContainer />
            <div className="flex flex-col gap-y-10">
            <ProductSaleHeader text="This Month" header="Best Selling Products" link={<LinkBtn text="view all" />} />
            <ProductsContainer />
            </div>
            <AllProducts />
            <NewProducts />
            <Services />
            <Footer />
        </Fragment>
     );
}
 
export default Home;