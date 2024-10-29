import React from 'react';

const Categories = () => {

    const handleDisplay = (event) => {
        event.preventDefault();
        const container = document.querySelector('#menDropDown');
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    }

    return ( 
        <ul className="px-5 w-52 py-5  border-r lg:block hidden">
            <li className="py-1 relative">
                <a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Women's Fashion <i class="fa-solid fa-chevron-right text-sm"></i></a>
                <div className="absolute left-full top-3 bg-lime-200 hidden" id="womenDropDown">
                    <a href="" className="block py-1 hover:bg-lime-100 px-20 transition duration-300 ">T-shirt</a>
                    <a href="" className="block py-1 hover:bg-lime-100 px-20 transition duration-300 ">Shorts</a>
                    <a href="" className="block py-1 hover:bg-lime-100 px-20 transition duration-300 ">Trauser</a>
            </div>
            </li>
            <li className="py-1 relative">
                <a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300" onClick={handleDisplay}>Men's Fahion <i class="fa-solid fa-chevron-right text-sm"></i></a>
                <div className="absolute left-full top-3 bg-lime-200 hidden" id="menDropDown">
                    <a href="" className="block py-1 hover:bg-lime-100 px-20 transition duration-300 ">T-shirt</a>
                    <a href="" className="block py-1 hover:bg-lime-100 px-20 transition duration-300 ">Shorts</a>
                    <a href="" className="block py-1 hover:bg-lime-100 px-20 transition duration-300 ">Trauser</a>
            </div>
            </li>
            <li className="py-1"><a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Electronics</a></li>
            <li className="py-1"><a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Home & Lifestyle</a></li>
            <li className="py-1"><a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Medicine</a></li>
            <li className="py-1"><a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Sports & Outdors</a></li>
            <li className="py-1"><a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Baby's & Toys</a></li>
            <li className="py-1"><a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Groceries & Pets</a></li>
            <li className="py-1"><a href="" className="text-black font-normal font-sans flex items-center justify-between hover:text-gray-500 transition duration-300">Health & Beauty</a></li>
        </ul>
     );
}
 
export default Categories;