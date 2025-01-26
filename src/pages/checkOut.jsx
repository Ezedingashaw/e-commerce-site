import React, { Component } from 'react';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Input from '../component/common/input';
import joystick from '../assets/joystick.png';
import PriceTotal from '../component/common/priceTotal';
import LinkBtn from '../component/common/linkBtn';
import Footer from '../component/footer';
// import items from '../services/cartItems.js';
import Joi from 'joi';
import validate from '../services/validation';
import axios from 'axios';

class CheckOut extends Component {

    state = {
        data: {
               first_name: '',
               last_name: '',
               street_address: '',
               apartment_floor: '',
               town_city: '',
               phone_number: '',
               email: '',
               payment_way: '',
               total_price: ''
        },
        items: [],
        user: '',
        errors: {},
        loading: true,
        cartItemsTotal: null
    };

    async componentDidMount() {

        this.setState({ loading: true })
        const user =  this.props.user
        try {

            const cartItemsTotal = sessionStorage.getItem('')
            const { data } = await axios.get(`http://localhost:3009/cart/cartItems/${user.email}`)

            console.log(data, "DATA");
            this.setState({ items: data });
            
            
            this.setState({ user });

            let cartTotalPrice = 0;
            data.map(item => {
                cartTotalPrice += item.price * item.quantity;
            })
            const updateData = { ...this.state.data }
            updateData.total_price = cartTotalPrice
            this.setState({ data: updateData})
        } catch (err) {
            console.log(err)
        } finally {
            this.setState({loading: false})
        }

        
     }


    handleChange = (value, name) => {
        console.log(value, name);
        const data = { ...this.state.data };
        data[name] = value;

        console.log(data);
        this.setState({data});
    };

    handlePaymentWayChange = (event) => {
        const { name, value } = event.target;

        const data = { ...this.state.data };
        data[name] = value;

        this.setState({ data });
        console.log(data);
    }

    schema = Joi.object({
        first_name: Joi.string().required().label("First name"),
        last_name: Joi.string().required().label("Last name"),
        street_address: Joi.string().required().label("Street address"),
        apartment_floor: Joi.string().required().label("Apartment/Floor"),
        town_city: Joi.string().required().label("Town/City"),
        phone_number: Joi.string().required().label("Phone number"),
        total_price: Joi.number().required().label("Total price"),
        email: Joi.string().email({ tlds: false }).required().label("Email"),
        payment_way: Joi.string().required().label("Payment way")
    });

    handleSubmit = async (event) => {
        event.preventDefault();

        const errors = validate(this.state.data, this.schema);
        
        this.setState({ errors: errors || {} });

        if (!errors) {
            console.log("DATATATTTTATA", this.state.data, this.state.user)
            if (this.state.data.payment_way === "cash") {
                const formData = new FormData();
                Object.keys(this.state.data).forEach(key => {
                    formData.append(key, this.state.data[key]);
                });
                

                try {
                    const order = await axios.post(`http://localhost:3009/orders/orderProducts/${this.state.user.email}`, formData);
                    console.log(order);
                }catch(error){}
            } else {

                const formData = new FormData();
                Object.keys(this.state.data).forEach(key => {
                    formData.append(key, this.state.data[key]);
                })

                const order = await axios.post(`http://localhost:3009/payment/${this.state.user.email}`, formData);
                window.location = order.data.msg
             }
        }
    }

    render() {
        
        const { data, errors, items, loading } = this.state;

        return (
            <div>
                <TopHeader />
                <Header />
                <form onSubmit={this.handleSubmit} className="grid md:grid-cols-2 grid-cols gap-y-10 md:p-10 ms:p-5 mb-5">
                    <div className="flex flex-col gap-y-2 justify-center items-center ms:px-0 px-2">
                        <div className="lg:w-9/12 w-full ">
                            <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">First Name</label>
                            <Input data={data.first_name} change={this.handleChange} type="text" name="first_name" style="bg-gray-100 rounded p-2 w-full" />
                            {errors.first_name && <div className="relative"><p className="absolute text-xs text-red-500">{errors.first_name}</p></div>}
                        </div>
                        <div className="lg:w-9/12 w-full ">
                            <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Last Name</label>
                            <Input data={data.last_name} change={this.handleChange} type="text" name="last_name" style="bg-gray-100 rounded p-2 w-full" />
                            {errors.last_name && <div className="relative"><p className="absolute text-xs text-red-500">{errors.last_name}</p></div>}
                        </div>
                        <div className="lg:w-9/12 w-full ">
                            <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Street Address</label>
                            <Input data={data.street_address} change={this.handleChange} type="text" name="street_address" style="bg-gray-100 rounded p-2 w-full" />
                            {errors.street_address && <div className="relative"><p className="absolute text-xs text-red-500">{errors.street_address}</p></div>}
                        </div>
                        <div className="lg:w-9/12 w-full ">
                            <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Apartment,floor,etc.(optional)</label>
                            <Input data={data.apartment_floor} change={this.handleChange} type="text" name="apartment_floor" style="bg-gray-100 rounded p-2 w-full" />
                            {errors.apartment_floor && <div className="relative"><p className="absolute text-xs text-red-500">{errors.apartment_floor}</p></div>}
                        </div>
                        <div className="lg:w-9/12 w-full ">
                            <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Town/City</label>
                            <Input data={data.town_city} change={this.handleChange} type="text" name="town_city" style="bg-gray-100 rounded p-2 w-full" />
                            {errors.town_city && <div className="relative"><p className="absolute text-xs text-red-500">{errors.town_city}</p></div>}
                        </div>
                        <div className="lg:w-9/12 w-full ">
                            <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Phone Number</label>
                            <Input data={data.phone_number} change={this.handleChange} type="text" name="phone_number" style="bg-gray-100 rounded p-2 w-full" />
                            {errors.phone_number && <div className="relative"><p className="absolute text-xs text-red-500">{errors.phone_number}</p></div>}
                        </div>
                        <div className="lg:w-9/12 w-full ">
                            <label htmlFor="" className="inline-block mb-3 text-gray-500 font-normal text-sm">Email Address</label>
                            <Input data={data.email} change={this.handleChange} type="text" name="email" style="bg-gray-100 rounded p-2 w-full" />
                            {errors.email && <div className="relative"><p className="absolute text-xs text-red-500">{errors.email}</p></div>}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-5 p-2">
                        {loading ? <p>Loading...</p> : <div className="flex flex-col gap-y-2 lg:w-6/12 ms:w-9/12 w-full max-h-36 overflow-scroll itemsScroll px-2">
                            {items.map(item => {
                                return (
                                    <div className="flex justify-between items-center">
                                        <p><img className="w-10" src={`http://localhost:3009/uploads/${item.image}`} alt="" /></p>
                                        <p className="font-normal text-sm">{item.quantity}</p>
                                        <p className="font-normal text-sm">${item.price}</p>
                                    </div>
                                )
                            })}
                        </div>}
                        <ul className="lg:w-6/12 w-9/12">
                            <PriceTotal priceTotal={data.total_price} />
                        </ul>
                        <div className="lg:w-4/12 w-9/12 flex flex-col gap-y-3">
                            <div className="flex gap-x-2">
                                <input className="w-4 cursor-pointer" onChange={this.handlePaymentWayChange} type="radio" value="bank" name="payment_way" id="" />
                                <label className="text-sm font-normal" htmlFor="">Bank</label>
                            </div>
                            <div className="flex gap-x-2">
                                <input className="w-4 cursor-pointer" onChange={this.handlePaymentWayChange} type="radio" value="cash" name="payment_way" id="" />
                                <label className="text-sm font-normal" htmlFor="">Cash on delivery</label>
                            </div>
                            {errors.payment_way && <div className="relative"><p className="absolute -top-3 text-xs text-red-500">{errors.payment_way}</p></div>}
                        </div>
                        <div className="flex md:flex-row md:items-normal  gap-y-5 flex-col justify-between  gap-x-2 my-2">
                            <input type="text" placeholder="Coupon Code" className="border border-gray-500 px-2 lg:py-0 py-3 outline-none rounded" />
                            <LinkBtn text="apply coupon" />
                        </div>
                        <button type="submit" className="self-end bg-red-500 text-white w-40 py-2 rounded">place order</button>
                       
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
    }
 
export default CheckOut;

{/* <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><img className="w-10" src={joystick} alt="" /></p>
                            <p className="font-normal text-sm">Joy stick</p>
                            <p className="font-normal text-sm">$234</p>
                        </div> */}