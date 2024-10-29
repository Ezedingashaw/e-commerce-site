import React from 'react';

const SearchBar = () => {
    return ( 
        <div className="bg-gray-100 w-60 sm:flex items-center hidden sm:visible px-2 gap-x-2 rounded">
            <input type="text"placeholder="What are you looking for?" className="bg-transparent grow py-2 outline-none" />
            <i className="fa-solid fa-magnifying-glass w-5 cursor-pointer"></i>
        </div>
     );
}
 
export default SearchBar;