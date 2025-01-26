import React from 'react';
import { Oval } from 'react-loader-spinner';
import image from '../../assets/cart.avif';
import Form from '../common/form';

const FormContainer = ({ page, header2, header3, logging, data, text, change, submit, errors }) => {
    console.log("Logging", logging);
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-row-1 grid-row-2">
                    <div className="h-full">
                        <img className="w-full h-full object-cover" src={image} alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                <Form errors={errors} submit={submit} logging={logging} change={change} data={data} page={page} header2={ header2 } header3={ header3 } btnText={text} />
                    </div>
                </div>
     );
}

export default FormContainer;