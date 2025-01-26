import React from 'react';

const Input = ({ type, placeholder, style, data, change, name }) => {
    console.log(data, "data ");
    const handleChange = (event) => {
        const { value, name } = event.target;
        console.log(name);
        change(value, name);
    };

    return (
        <input onChange={ handleChange } type={type} placeholder={placeholder} value={data} name={name} className={`outline-none ${style}`} />
     );
}
 
export default Input;