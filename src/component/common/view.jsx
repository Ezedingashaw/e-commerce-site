import React from 'react';
import { Link } from 'react-router-dom';

const View = ({id}) => {
    return ( 
        <Link to={`/product/${id}`} className="w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer absolute right-2 top-16">
            <i className="fa-regular fa-eye text-gray-400 text-2xl"></i>
        </Link>
     );
}
 
export default View;