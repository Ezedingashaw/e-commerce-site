import React from 'react';

const Input = ({type, placeholder, style}) => {
    return ( 
        <input type={type} placeholder={placeholder} className={`outline-none ${style}`} />
     );
}
 
export default Input;