import React from 'react';

const Category = ({image, text}) => {
    return ( 
        <div className="w-40 h-36 justify-self-center  border-gray-300 border-2 rounded flex flex-col justify-center items-center gap-y-2 hover:bg-red-200 focus:bg-red-200 hover:cursor-pointer transition duration-200">
            <div>
                <img className="w-20" src={image} alt="" />
            </div>
            <div>
                <h3 className="text-xl">{ text }</h3>
            </div>
        </div>
     );
}
 
export default Category;