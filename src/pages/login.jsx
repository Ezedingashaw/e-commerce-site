import React from 'react';
import Form from '../component/common/form';
import FormContainer from '../component/common/formContainer';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Footer from '../component/footer';

const Login = () => {

    const header2 = "Login in to Exclusive";
    const header3 = "Enter your details below";

    return ( 
        <div>
            <TopHeader />
            <Header />
            <FormContainer page="login" header2={header2} header3={header3} text="Log in" />
            <Footer />
        </div>
     );
}
 
export default Login;