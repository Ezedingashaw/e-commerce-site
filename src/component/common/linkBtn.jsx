import React from 'react';

const LinkBtn = ({text, link,style}) => {
    return ( 
        <a href={link} className={`px-10 py-2 bg-red-500 text-white rounded capitalize hover:bg-red-400 hover:text-gray-800 transition duration-200 ${style}`}>{text}</a>
     );
}
 
export default LinkBtn;