import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';

const SubmitBtn = ({ style, text, logging }) => {


    return (
        <button className={`bg-red-500 text-white px-10 py-2 rounded capitalize flex items-center justify-center ${style}`} type="submit">
            {logging ? <div><Oval
            height="20"
            width="20"
            color="#fff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
    </div> : text}</button>
     );
}
 
export default SubmitBtn;