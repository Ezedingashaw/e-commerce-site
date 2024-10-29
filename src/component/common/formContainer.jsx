import React from 'react';
import image from '../../assets/cart.avif';
import Form from '../common/form';

const FormContainer = ({ page, header2, header3, text }) => {
    

    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-row-1 grid-row-2">
                    <div className="h-screen">
                        <img className="w-full h-full object-cover" src={image} alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                <Form page={page} header2={ header2 } header3={ header3 } btnText={text} />
                    </div>
                </div>
     );
}
 
export default FormContainer;