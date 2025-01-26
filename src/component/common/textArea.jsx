import React from 'react';

const TextArea = ({style, placeholder}) => {
    return ( 
        <div>
            <textarea name="" className={`${style}`} id="" placeholder={placeholder}></textarea>
        </div>
     );
}
 
export default TextArea;