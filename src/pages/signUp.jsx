import React, { Component } from 'react';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Footer from '../component/footer';
import image from '../assets/cart.avif';
import Form  from '../component/common/form';
import FormContainer from '../component/common/formContainer';

class SignUp extends Component {
    state = {} 
    
    header2 = "Create an account";
    header3 = "Enter your details below";
    render() { 
        return (
            <div>
                <TopHeader />
                <Header />
                <FormContainer page="signUp" header2={ this.header2 } header3 = { this.header3 } text="Create Account" />
                <Footer />
            </div>
        );
    }
}
 
export default SignUp;