import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({image, text, link}) => {
    return (
        <Link to={`products/${link}`} className="w-40 h-36 justify-self-center  border-gray-300 border-2 rounded flex flex-col justify-center items-center gap-y-2 hover:bg-red-300 hover:shadow-lg hover:border-red-300 focus:bg-red-200 hover:cursor-pointer transition duration-200">
            <div>
                <img className="w-20" src={image} alt="" />
            </div>
            <div>
                <h3 className="text-xl">{ text }</h3>
            </div>
        </Link>
     );
}
 
export default Category;