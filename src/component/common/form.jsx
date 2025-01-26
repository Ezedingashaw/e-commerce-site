import React from 'react';
import { Oval } from 'react-loader-spinner';
import Input from './input';
import SubmitBtn from './submitBtn';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Form = ({ page, header2, header3, logging, btnText, data, change, submit, errors }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        submit()
    };
    
    
    return ( 
        <form onSubmit={handleSubmit} className="flex gap-y-5 lg:w-9/12 w-full  flex-col p-5">
            <h2 className="text-2xl font-semibold">{ header2 }</h2>
            <h3>{ header3 }</h3>
                        {page === "signUp" && <Input change={change} data={data.name} name="name" placeholder="Full Name" type="text" style="border-b-2 p-2 " />}
            {page === "signUp" && (errors.name && <div className="relative"><p className="absolute -top-3 text-xs text-red-500">{errors.name}</p></div> )}
            <Input change={change} data={data.email} name="email" placeholder="Email" type="text" style="border-b-2 p-2 " />
            {errors.email && <div className="relative"><p className="absolute -top-3 text-xs text-red-500">{errors.email}</p></div>}
            <Input change={change} data={data.password} name="password" placeholder="Password" type="password" style="border-b-2 p-2 " />
            {errors.password && <div className="relative"><p className="absolute -top-3 text-xs text-red-500">{errors.password}</p></div>}
            <SubmitBtn style="mt-5 hover:bg-red-400 hover:text-black transition duration-200"  text={btnText} logging={logging} />
            {page === "signUp" ? (<p className="self-center mt-5 text-black font-light">Already have account?<Link className="ml-3 border-b-2 border-black pb-1 font-semibold" to="/login">Log in
            </Link></p>) : (<a className="self-end hover:text-red-400 text-red-600" href="">Forget password?</a>)}
        </form>
     );
}

export default Form;