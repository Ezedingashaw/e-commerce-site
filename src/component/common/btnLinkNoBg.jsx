import React from 'react';

const BtnLinkNoBg = ({ text }) => {
    return (
        <a href="" className="px-10 py-2 bg-transparent text-gray-900 rounded capitalize hover:bg-red-400 border hover:border-red-400 border-gray-400 hover:text-gray-800 transition duration-200">{text}</a>
     );
}

export default BtnLinkNoBg;