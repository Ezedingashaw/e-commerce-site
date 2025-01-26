import React, { Component } from 'react';
import axios from 'axios';
import Input from './common/input';
import Rate from './common/rate';
import validation from '../services/validation';
import Joi from 'joi';

class RatingForm extends Component {
    state = {
        data: {
            rate: '',
            name: '',
            email: '',
            comment: ''
        },
        loading: false,
        id: '',
        errors: {}
    };

    componentDidMount() { 
        const { id } = this.props.params;
        this.setState({ id });
     }
    
    hadleRating = (rate) => {
        const data = { ...this.state.data };
        data.rate = rate;

        this.setState({ data });
    }

    handleChange = (value, name) => {
        const data = { ...this.state.data };
        data[name] = value;
        this.setState({ data });
    };

    handleCommentChange = (event) => {
        const { value, name } = event.target;
        const data = { ...this.state.data };
        data[name] = value;

        this.setState({ data });
    }

    schema = Joi.object({
        name: Joi.string().required().label('Name'),
        email: Joi.string().email({tlds: false}).required().label('Email'),
        rate: Joi.number().required().label('Rate'),
        comment: Joi.string().required().label('Comment'),
    })

    handleSubmit = async (event) => {
        event.preventDefault();

        const errors = validation(this.state.data, this.schema);
        
        this.setState({ errors: errors || {} });

        if (!errors) {
            const formData = new FormData();
            Object.keys(this.state.data).forEach(key => {
                formData.append(key, this.state.data[key]);
            })

            this.setState({ loading: true });
            try {
                const response = await axios.put(`http://localhost:3009/products/rate/${this.state.id}`, formData);
            } catch (error) {
                
            } finally {
                this.setState({ loading: false });
            }
        }
    };

    render() { 
        console.log(this.state.id);

        const { data, errors, loading } = this.state;
        console.log(data);

        return (
            <div className="w-full flex flex-col items-center pb-3 overflow-y-scroll">
                <h1 className="bg-indigo-600 text-white text-center p-1 text-2xl w-full">Rate the product</h1>
                <form onSubmit={this.handleSubmit} className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-full  shadow-md flex flex-col p-5 gap-5 mt-10">
                    <div>
                        <label className="text-lg font-medium text-indigo-600" htmlFor="">Your Ratings</label>
                        <div>
                            <Rate change={this.hadleRating} style="hover:cursor-pointer" />
                            {errors.rate && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.rate }</p>
                        </div>}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-indigo-600 mb-2" htmlFor="">Your Name</label>
                        <Input name="name" data={data.name} change={this.handleChange} style="border border-gray-200 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300  transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                        {errors.name && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.name }</p>
                        </div>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-indigo-600 mb-2" htmlFor="">Email Address</label>
                        <Input name="email" data={data.email} change={this.handleChange} style="border border-gray-200 px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300  transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" />
                        {errors.email && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.email }</p>
                        </div>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-indigo-600 mb-2" htmlFor="">Comments</label>
                        <textarea name="comment" value={data.comment} onChange={this.handleCommentChange} className="border border-gray-200 h-32 resize-none px-2 py-1 rounded hover:outline-2 hover:outline-offset-0 hover:outline-blue-300  transition-all duration-200 focus:outline-2 focus:outline-offset-0 focus:outline-blue-300 hover:shadow-md hover:shadow-gray-300" id=""></textarea>
                        {errors.comment && <div clasName="relative">
                            <p className="absolute text-red-600 text-xs">{errors.comment }</p>
                        </div>}
                    </div>
                    <button disabled={loading} className={`${loading ? "bg-gray-500" : "bg-lime-600 "}text-white px-2 py-1 rounded text-lg self-end`} type="submit">Submit Ratings</button>
                </form>
            </div>
        );
    }
}
 
export default RatingForm;