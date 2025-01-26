import React from 'react';

const Icons = ({icon}) => {
    return ( 
        <div className="w-10 h-10 bg-red-500 flex justify-center items-center rounded-full">
            {icon}
        </div>
     );
}
 
export default Icons;