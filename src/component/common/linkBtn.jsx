import React from 'react';

const LinkBtn = ({text, link, style, display}) => {
    return ( 
        <a href={link} className={`${display} px-10 py-2 bg-red-500 text-white rounded capitalize hover:bg-red-400 hover:text-gray-800 transition duration-300 ${style}`}>{text}</a>
     );
}
 
export default LinkBtn;