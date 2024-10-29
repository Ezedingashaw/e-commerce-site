import React from 'react';
import Input from './input';
import SubmitBtn from './submitBtn';
import { Link } from 'react-router-dom';

const Form = ({page, header2,header3, btnText}) => {
    return ( 
        <form className="flex gap-y-2 lg:w-9/12 w-full  flex-col p-5">
            <h2 className="text-2xl font-semibold">{ header2 }</h2>
            <h3>{ header3 }</h3>
                        {page === "signUp" && <Input placeholder="Name" type="text" style="border-b-2 p-2 " />}
                        <Input placeholder="Email" type="email" style="border-b-2 p-2 " />
                        <Input placeholder="Password" type="password" style="border-b-2 p-2 " />
            <SubmitBtn style="mt-5 hover:bg-red-400 hover:text-black transition duration-200" text={btnText} />
            {page === "signUp" ? (<p className="self-center mt-5 text-black font-light">Already have account?<Link className="ml-3 border-b-2 border-black pb-1 font-semibold" to="/login">Log in</Link></p>) : (<a className="self-end text-red-600" href="">Forget password?</a>)}
        </form>
     );
}

export default Form;