import React, { Component } from 'react';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Footer from '../component/footer';
import Input from '../component/common/input';
import TextArea from '../component/common/textArea';
import Icons from '../component/common/icons';
import Joi from 'joi';
import LinkBtn from '../component/common/linkBtn';
import validate from '../services/validation';

class Contact extends Component {

    state = {
        data: {
            "name": "",
            "email": "",
            "phone_number": "",
            "message": "",
        },
        errors: {}

    }


         schema = Joi.object({
            "name": Joi.string().required().label("Name"),
            "email": Joi.string().email({ tlds: false}).required().label("Email"),
            "phone_number": Joi.number().required().label("Phone number"),
            "message": Joi.string().required().label("Message")
        })

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate(this.state.data, this.schema)
        
        this.setState({ errors: errors || {} });
    }

    handleChange = (value, name) => {
        const data = { ...this.state.data };
        data[name] = value;
        console.log(value, name);

        this.setState({ data });
    }

    phoneIcon = <i class="fa-solid fa-phone text-2xl text-white"></i>;
    emailIcon = <i class="fa-solid fa-envelope text-2xl text-white"></i>
    render() {

        const { errors, data } = this.state;
        return ( 
            <div>
                <TopHeader />
                <Header />
                <div className="sm:px-10 md:px-5 px-2 grid md:grid-cols-4 sm:mt-20 mt-5 gap-y-5 mb-5">
                    <ul className="sm:col-span-1 col-span-3 flex sm:flex-col flex-row sm:justify-start justify-between ">
                        <li className="flex flex-col gap-y-3 mb-3">
                            <div className="flex items-center gap-x-5">
                                <Icons icon={this.phoneIcon} />
                                <h3 className="font-semibold">Call To Us</h3>
                            </div>
                            <p className="font-normal text-sm">We are available 24/7,7 days a week.</p>
                            <p className="font-normal text-sm">Phone: +8801611112222</p>
                        </li>
                        <li>
                            <div className="flex flex-col gap-y-3 mb-3">
                                <div className="flex items-center gap-x-5">
                                    <Icons icon={this.emailIcon} />
                                    <h3 className="font-semibold">Write To Us</h3>
                                </div>
                                <p className="font-normal text-sm">Fill out form and we will contact <br />you with in 24 hours.</p>
                                <p className="font-normal text-sm">Emails: egegdeu@gmail.com</p>
                                <p className="font-normal text-sm">Emails: egegdeu@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                    <div className="col-span-3">
                        <form onSubmit={this.handleSubmit} className="w-full flex flex-col gap-5 lg:p-10 md:px-5 px-2">
                            <div className="grid sm:grid-cols-3 gap-3">
                            <div className='w-full'>
                                <Input name="name" data={data.name} change={this.handleChange} style="bg-gray-100 p-2 w-full" placeholder="Your Name" />
                                {errors.name && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.name }</p>
                        </div>}
                                </div>
                            <div className='w-full'>
                                <Input name="email" data={data.email} change={this.handleChange} style="bg-gray-100 p-2 w-full" placeholder="Your Email" />
                                {errors.email && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.email }</p>
                        </div>}
                                </div>
                            <div className='w-full'>
                                <Input name="phone_number" data={data.phone_number} change={this.handleChange} style="bg-gray-100 p-2 w-full" placeholder="Your Phone" />
                                {errors.phone_number && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.phone_number }</p>
                        </div>}
                                </div>
                            </div>
                            <div>
                                <TextArea style="bg-gray-100 resize-none w-full h-44 p-2 rounded outline-none" placeholder="Your Message" />
                                {errors.message && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.message }</p>
                        </div>}
                            </div>
                            <button type="submit" className="bg-red-500 text-white px-5 py-2 hover:bg-red-400 transisition-all duration-300 rounded self-end">Send message</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default Contact;