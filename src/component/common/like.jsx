import React from 'react';

const Like = ({ likeStatus, handleLike }) => {
    
    return ( 
        <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer absolute top-2 right-2">
            <i onClick={handleLike} className={`${likeStatus ? "fa-solid text-red-500" : "fa-regular text-gray-400" } fa-heart  text-2xl`}></i>
        </div>
     );
}
 
export default Like;