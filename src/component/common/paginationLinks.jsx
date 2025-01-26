import React from 'react';

const PaginationLinks = ({ text, change }) => {


    return (
        <a onClick={(event) => { event.preventDefault(); change() }} href="" className="bg-blue-600 text-white w-20 px-2 py-1 rounded flex items-center justify-center">{ text }</a>
     );
}
 
export default PaginationLinks;