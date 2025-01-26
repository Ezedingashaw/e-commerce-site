import React, { Component } from 'react';
import Input from './common/input';
import validation from '../services/validation';
import Joi from 'joi';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

class SellerRegister extends Component {
    state = {
        data: {
            business_name: '',
            city: '',
            region: '',
            postal: '',
            country: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            terms: false
        },
        registering: false,
        errors:{}
    };

    handleChange = (value, name) => {
        const data = { ...this.state.data };
        data[name] = value;

        this.setState({ data }, () => {
            console.log(data);
        });
    }

    handleChangesLocally = (event) => {
        const { name, value } = event.target;
        const data = { ...this.state.data };
        if (name === 'terms') {
            data[name] = !data[name];
        }else
        {
            data[name] = value;
        }

        this.setState({ data });
    };

    schema = Joi.object({
        business_name: Joi.string().required().label("Business name"),
            city: Joi.string().required().label("City"),
            region: Joi.string().required().label("Region"),
            postal: Joi.string().required().label("Postal"),
            country: Joi.string().required().label("Country"),
            first_name: Joi.string().required().label("First name"),
            last_name: Joi.string().required().label("Last name"),
            phone_number: Joi.number().required().label("Phone number"),
            email: Joi.string().email({tlds : false}).required().label("Email"),
            terms: Joi.boolean().custom((value, helper) => {
            if (value === false) return helper.message("Please read and agree terms of privacy.")
            else
            return value;
        }).required().label("Terms")
    });

    handleSubmit = async (event) => {
        event.preventDefault();

        const errors = validation(this.state.data, this.schema)
        
        this.setState({ errors: errors || {} });

        if (!errors) {
            const formData = new FormData();
            Object.keys(this.state.data).forEach(key => {
                formData.append(key, this.state.data[key]);
            })

            this.setState({ registering: true });
            try {
                const response = await axios.post('http://localhost:3009/seller', formData);
                console.log(response);
            } catch (error) {
                if (error.status === 404) return this.setState({ errors: { business_name: error.response.data.msg } });
                
                return window.location = "/serverError";
            } finally {
                this.setState({ registering: false });
            }
        }
    }

    render() { 

        const { data, errors, registering } = this.state;

        return (
            <div className="flex justify-center items-center">
                <form onSubmit={this.handleSubmit} className="flex flex-col items-start lg:p-10 md:p-5 p-2 gap-y-5 lg:w-2/4 md:w-3/4 sm:w-4/5 w-full mb-5">
                    <h1 className="text-4xl font-bold text-gray-600 border-b-2 pb-5 border-gray-600 w-full">Vendor Registration</h1>
                    <p className="text-gray-500 font-thin text-lg">Sign up as a vendor.</p>
                    <div className="flex flex-col w-full relative">
                        <label className="text-gray-700 text-base font-normal" htmlFor="">Business Name</label>
                        <Input name="business_name" value={data.business_name} change={this.handleChange} style="border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300  transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                        {errors.business_name && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.business_name }</p>
                        </div>}
                        </div>
                    <div className="flex flex-col w-full relative">
                        <label className="text-gray-700 text-base font-normal" htmlFor="">Address</label>
                        <div className="grid sm:grid-cols-2 w-full gap-x-3 gap-y-5 relative">
                            <div className="relative w-full">
                                <Input name="city" value={data.city} change={this.handleChange} placeholder="City" style="w-full border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                                {errors.city && <div className="relative">
                                    <p className="absolute text-xs text-red-600">{errors.city}</p>
                                </div>}
                            </div>
                            <div className="relative w-full">
                                <Input name="region" value={data.region} change={this.handleChange} placeholder="Region" style="w-full border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                                                           {errors.region && <div className="relative">
                                   <p className="absolute text-xs text-red-600">{errors.region}</p>
                                                           </div>}
                            </div>
                            <div className="relative w-full">
                                <Input name="postal" value={data.postal} change={this.handleChange} placeholder="Postal / Zip Code" style="w-full border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                                {errors.postal && <div className="relative">
                                    <p className="absolute text-xs text-red-600">{errors.postal}</p>
                                </div>}
                            </div>
                            <div className="relative w-full">
                                <select onChange={this.handleChangesLocally} className="w-full border border-gray-300 px-2 py-1 rounded outline-none hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" value={data.country} name="country" id="">
                                    <option value="">Select Country</option>
                                    <option value="ethiopia">Ethiopia</option>
                                    <option value="america">America</option>
                                    <option value="japan">Japan</option>
                                    <option value="chaina">Chaina</option>
                                </select>
                                {errors.country && <div className="relative">
                                    <p className="absolute text-xs text-red-600">{errors.country}</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 text-base font-normal" htmlFor="">Contact Name</label>
                        <div className="grid sm:grid-cols-2 gap-x-3 gap-y-5 w-full">
                            <div className="w-full">
                                <Input name="first_name" value={data.first_name} change={this.handleChange} placeholder="First name" style="w-full border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                                {errors.first_name && <div className="relative">
                                    <p className="absolute text-xs text-red-600">{errors.first_name}</p>
                                </div>}
                            </div>
                            <div className="w-full">
                                <Input name="last_name" value={data.last_name} change={this.handleChange} placeholder="Last name" style="w-full border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                                {errors.last_name && <div className="relative">
                                    <p className="absolute text-xs text-red-600">{errors.last_name}</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 text-base font-normal" htmlFor="">Phone Number</label>
                        <Input name="phone_number" value={data.phone_number} placeholder="0990213409" change={this.handleChange} style="border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                        {errors.phone_number && <div className="relative">
                            <p className="absolute text-xs text-red-600">{errors.phone_number}</p>
                        </div>}    
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 text-base font-normal" htmlFor="">Email Address</label>
                        <Input name="email" value={data.email} placeholder="example@gmail.com" change={this.handleChange} style="border border-gray-300 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300 transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                        {errors.email && <div className="relative">
                            <p className="absolute text-xs text-red-600">{ errors.email }</p>
                        </div>}
                    </div>
                    <div className="flex flex-col  w-full">
                        <div className="flex gap-x-5">
                            <input onChange={this.handleChangesLocally} className="w-4" type="checkbox" value={data.terms} name="terms" id="" />
                            <p>I agree to <a className="text-blue-700" href="">Terms of Service</a></p>
                        </div>
                        {errors.terms && <div className="relative w-full">
                            <p className="absolute text-xs text-red-600">{ errors.terms }</p>
                        </div>}
                    </div>
                    
                    <button className="capitalize px-5 py-1 bg-blue-600 text-white rounded" type="submit">{registering ? <div><Oval
            height="20"
            width="20"
            color="#fff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
    </div> : "send application"}</button>
                </form>
            </div>
        );
    }
}
 
export default SellerRegister;