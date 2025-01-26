import React, { useState} from 'react';

const Previous = ({ handlePageChangeProduct, typeOfProducts, page, products }) => {

    const [pageNumber, setPageNumber] = useState(5);

    const handlePageChange = () => {
        if (page === 0) return;
        page = page - 1;
        handlePageChangeProduct("decrease", typeOfProducts, products, page, pageNumber)
    }

    return (
        <div className="md:w-10 md:h-10 w-7 h-7 flex justify-center items-center bg-gray-300 hover:bg-gray-400 transition-all duration-300 rounded-full cursor-pointer">
            <i onClick={handlePageChange} className="fa-solid fa-chevron-left text-white text-xl md:text-2xl"></i>
        </div>
     );
}
 
export default Previous;