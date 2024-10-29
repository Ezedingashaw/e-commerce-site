import React from 'react';

const Tag = ({text, style}) => {
    return ( 
        <div className="flex gap-x-5 items-center">
            <div className="h-10 w-5 bg-red-700 rounded"></div>
            <h3 className={` text-xl font-medium ${style}`}>{text}</h3>
        </div>
     );
}
 
export default Tag;