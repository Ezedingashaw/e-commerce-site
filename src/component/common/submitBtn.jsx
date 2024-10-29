import React from 'react';

const SubmitBtn = ({style, text}) => {
    return ( 
        <button className={`bg-red-500 text-white px-10 py-2 rounded capitalize ${style}`} type="submit">{text}</button>
     );
}
 
export default SubmitBtn;