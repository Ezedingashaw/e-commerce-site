import React from 'react';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import BtnLinkNoBg from '../component/common/btnLinkNoBg';
import ProductsContainer from '../component/common/productsContainer';
import Tag from '../component/common/tag';
import Footer from '../component/footer';

const WishList = () => {
    return ( 
        <div>
            <TopHeader />
            <Header />
            <div className="flex justify-between items-center p-10">
                <h3>Whishlist <span>(400)</span></h3>
                <BtnLinkNoBg text="Move all to bag" />
            </div>
            <div>
                <ProductsContainer />
                <div className="flex justify-between p-10">
                    <Tag text="Just For You" style="text-black" />
                    <BtnLinkNoBg text="see all" />
                </div>
                <ProductsContainer />
            </div>
            <Footer />
        </div>
     );
}

export default WishList;