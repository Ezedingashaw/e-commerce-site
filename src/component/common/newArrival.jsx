import React from 'react';
import ProductSaleHeader from './prodSaleHeader';
import playstationImage from '../../assets/playstation.jpg';
import womenFashion from '../../assets/girl2.avif';
import perfumeImage from '../../assets/perfume.jpg';
import speakers from '../../assets/speakers.jpg';

const NewProducts = () => {
    return ( 
        <div className="flex flex-col gap-y-10 mb-10">
         <ProductSaleHeader text="Featured" header="New Arrival" />
            <div className="grid grid-cols-3 gap-5 w-full md:px-10 px-5">
                <div className="lg:row-span-2 md:col-span-1 col-span-3 lg:h-full h-96 max-w-full relative">
                    <img src={playstationImage} alt="" className="h-full w-full object-cover" />
                    <div className="flex flex-col gap-y-2 absolute bottom-5 left-5">
                        <h2 className="text-2xl text-white font-semibold">Playstation 5</h2>
                        <p className="text-white">Black and White version of the PS5 <br /> coming out on sale.</p>
                        <a href="" className="text-white border-b self-start hover:text-gray-400">Shop Now</a>
                    </div>
                    </div>
                <div className="h-96 md:col-span-2 col-span-3 relative">
                    <img src={womenFashion} alt="" className="h-full w-full object-cover" />
                    <div className="flex flex-col gap-y-2 absolute bottom-5 left-5">
                        <h2 className="text-2xl text-white font-semibold">Women's Collections</h2>
                        <p className="text-white">Featured woman collections that <br /> give you another vibe.</p>
                        <a href="" className="text-white border-b self-start hover:text-gray-400">Shop Now</a>
                    </div>
                    </div>
                <div className="h-96  relative lg:col-span-1 md:col-span-2 col-span-3">
                    <img src={speakers} alt="" className="h-full w-full object-cover" />
                    <div className="flex flex-col gap-y-2 absolute bottom-5 left-5">
                        <h2 className="text-2xl text-white font-semibold">Speakers</h2>
                        <p className="text-white">Amazon wireless speakers</p>
                        <a href="" className="text-white border-b self-start hover:text-gray-400">Shop Now</a>
                    </div>
                    </div>
                <div className="h-96 relative md:col-span-1 col-span-3">
                    <img src={perfumeImage} alt="" className="h-full w-full object-cover" />
                    <div className="flex flex-col gap-y-2 absolute bottom-5 left-5">
                        <h2 className="text-2xl text-white font-semibold">Perfume</h2>
                        <p className="text-white">GUCCI INTENSE OUD EDP</p>
                        <a href="" className="text-white border-b self-start hover:text-gray-400">Shop Now</a>
                    </div>
                    </div>
            </div>
        </div>
     );
}
 
export default NewProducts;