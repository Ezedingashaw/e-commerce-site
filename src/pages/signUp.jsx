import React, { Component } from 'react';
import Joi from 'joi';
import axios from 'axios';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Footer from '../component/footer';
import FormContainer from '../component/common/formContainer';
import validate from '../services/validation.js';
import { toast, ToastContainer } from 'react-toastify';

class SignUp extends Component {
    state = {
        data: {
            name: "",
            email: "",
            password: ""
        },
        logging: false,
        errors: {}
    }

    handleSubmit = async () => {
        const errors = validate(this.state.data, this.schema);

        this.setState({ errors: errors || {} });
        
        if (!errors) {
            const formData = new FormData();

            Object.keys(this.state.data).forEach(key => {
                formData.append(key, this.state.data[key]);
            })

            try {
                const registerUser = await axios.post("http://localhost:3009/user/register", formData);
                
                localStorage.setItem("user", registerUser.data);
            } catch (error) {
                if(error.status === 404) return this.setState({ errors: {name: error.response.data.msg}})
            }
        }
    };

    change = (value, name) => {
        let data = { ...this.state.data };
        data[name] = value;

        this.setState({ data });
    }

    schema = Joi.object({
        name: Joi.string().required().label("Name"),
        password: Joi.string().min(3).max(20).required().label("Password"),
        email: Joi.string().email({ tlds: false }).required().label("Email")
    });
    
    header2 = "Create an account";
    header3 = "Enter your details below";
    render() { 
        const { data, errors, logging } = this.state;
        return (
            <div>
                <TopHeader />
                <Header />
                <FormContainer errors={errors} logging={logging} submit={this.handleSubmit} change={this.change} data={data} page="signUp" header2={ this.header2 } header3 = { this.header3 } text="Create Account" />
                <Footer />
            </div>
        );
    }
}
 
export default SignUp;