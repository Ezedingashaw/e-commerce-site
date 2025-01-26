import React, { Component } from 'react';
import axios  from 'axios'
import Input from './input';
import LinkBtn from './linkBtn';

class Profile extends Component {
    
    state = {
        user: {
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    async componentDidMount() { 
        const { user } = this.props;
        try {
            const response = await axios.get(`http://localhost:3009/user/userData/${user.id}`);
            console.log("USER DATA", response)

            const userData = { ...this.state.user };
            userData["first_name"] = response.data.name;
            userData["last_name"] = response.data.name;
            userData["email"] = response.data.email;
            this.setState({ user: userData });

        } catch (error) {
            
        }
     }

    render() {

        console.log(this.props.user, "USER PROPS")
        console.log(this.state.user, "This daat")
        
        const { style } = this.props;
        const { user } = this.state;
        return (
            <div className={`${style}`}>
                <div className="flex flex-col gap-y-5 mb-5 shadow-xl rounded-md p-5">
                    <h2 className="text-xl font-medium text-red-400">Edit Your Profile</h2>
                    <form className="grid sm:grid-cols-2 lg:gap-x-10 gap-x-5 gap-y-3">
                        <div className="lg:w-11/12 w-full">
                        <label htmlFor="" className="mb-3 font-semibold inline-block">First Name</label>
                            <Input data={user.first_name} name="first_name" style="bg-gray-100 w-full p-2 rounded" />
                            </div>
                        <div className="lg:w-11/12 w-full">
                        <label htmlFor="" className="mb-3 font-semibold inline-block">Last Name</label>
                            <Input data={user.last_name} name="last_name" style="bg-gray-100 w-full p-2 rounded" />
                            </div>
                        <div className="lg:w-11/12 w-full">
                        <label htmlFor="" className="mb-3 font-semibold inline-block">Email</label>
                            <Input data={user.email} name="email" style="bg-gray-100 w-full p-2 rounded" />
                            </div>
                        <div className="lg:w-11/12 w-full">
                        <label htmlFor="" className="mb-3 font-semibold inline-block">Address</label>
                            <Input style="bg-gray-100 w-full p-2 rounded" />
                        </div>
                        <button type="submit" className="bg-red-500 w-40 text-white font-medium py-2 rounded">Save changes</button>
                    </form>
                    <form className="flex flex-col gap-3 lg:pr-8">
                        <h3>Password</h3>
                        <Input style="bg-gray-100 w-full p-2 rounded" placeholder="Current Password" />
                        <Input style="bg-gray-100 w-full p-2 rounded" placeholder="New Password" />
                        <Input style="bg-gray-100 w-full p-2 rounded" placeholder="Confirm New Password" />
                    </form>
                    <div className="self-end sm:pr-8 flex sm:flex-row flex-col gap-y-5">
                        <button type="submit" className="bg-red-500 w-40 text-white font-medium py-2 rounded">Save changes</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Profile;