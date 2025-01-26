import React from 'react';
import ProductSaleHeader from './prodSaleHeader';
import Category from './category';
import phone from '../../assets/phone1.png';
import computer from '../../assets/computer.png';
import SmartWatch from '../../assets/watch.png';
import camera from '../../assets/camera.png';
import headPhone from '../../assets/headSet.png';
import game from '../../assets/gamePad.png';

const CategoryContainer = ({ category, changeCategory }) => {
    return ( 
        <div className="flex gap-y-10 flex-col border-b border-gray-300">
            <ProductSaleHeader text="Categories" header="Browse By Category" />
            <div className="lg:px-10 ms:px-5 px-2 grid lg:grid-cols-6 md:grid-cols-5  sm:grid-cols-4 grid-cols-2 mb-10 gap-y-5">
                <Category category={category} changeCategory={changeCategory} link={"phone"} image={ phone } text="Phones" />
                <Category category={category} changeCategory={changeCategory} link={"computer"} image={ computer } text="Computers" />
                <Category category={category} changeCategory={changeCategory} link={"watch"} image={ SmartWatch } text="SmartWatch" />
                <Category category={category} changeCategory={changeCategory} link={"camera"} image={ camera } text="Camera" />
                <Category category={category} changeCategory={changeCategory} link={"headPhone"} image={ headPhone } text="HeadPhones" />
                <Category category={category} changeCategory={changeCategory} link={"game"} image={ game } text="Gaming" />
            </div>
        </div>
     );
}
 
export default CategoryContainer;