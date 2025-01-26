import React, { Component } from 'react';
import Joi from 'joi';
import axios from 'axios';
import FormContainer from '../component/common/formContainer';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Footer from '../component/footer';
import validate from '../services/validation.js';
import { ToastContainer, toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';

class Login extends Component {
    state = {
        data: {
            email: "",
            password: ""
        },
        logging: false,
        errors: {}
    }

    change = (value, name) => {
        let data = { ...this.state.data };
        data[name] = value;

        this.setState({ data }, () => {
            console.log(this.state.data);
        });
    };

    handleSubmit = async () => {
        const errors = validate(this.state.data, this.schema);

        this.setState({ errors: errors || {} })

        if (!errors) {
            const formData = new FormData();
            Object.keys(this.state.data).forEach(key => {
                formData.append(key, this.state.data[key]);
            })

            this.setState({ logging: true });
            try {
                const response = await axios.post('http://localhost:3009/user/login', formData);

                if (response.status === 404) return toast.error(response.data.msg);

                localStorage.setItem("user", response.data);
                 window.location = '/';
                    
             } catch (err) {
                toast.error("err");
            } finally {
                this.setState({ logging: false });
            }
        }
    };

    schema = Joi.object({
        password: Joi.string().min(3).max(20).required().label("Password"),
        email: Joi.string().email({ tlds: false }).required().label("Email")
    })

     header2 = "Login in to Exclusive";
     header3 = "Enter your details below";

    render() {
        const { data, errors, logging } = this.state;
    return ( 
        <div>
            <ToastContainer />
            <TopHeader />
            <Header />
            <FormContainer errors={errors} logging={logging} submit={this.handleSubmit} change={this.change} data={data} page="login" header2={this.header2} header3={this.header3} text="Log in" />
            <Footer />
        </div>
     );
   }
}
 
export default Login;