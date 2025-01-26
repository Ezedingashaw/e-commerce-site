import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './common/profileSetting';

const ProfileBar = () => {
    return ( 
        <div>
            <ul>
                <li className="flex flex-col gap-y-3 mb-3">
                <h3 className="font-semibold">Manage My Account</h3>
                    <div className="lg:px-10 px-3 text-gray-400 flex flex-col">
                       <Link className="hover:text-red-400 transition duration-200" to="">My Profile</Link>
                       <Link className="hover:text-red-400 transition duration-200" to="">Address Book</Link>
                       <Link className="hover:text-red-400 transition duration-200" to="">My Payment Options</Link>
                    </div>
                </li>
                <li className="flex flex-col gap-y-3 mb-3">
                <h3 className="font-semibold">My Orders</h3>
                    <div className="lg:px-10 px-3 text-gray-400 flex flex-col">
                        <Link className="hover:text-red-400 transition duration-200" to="">My Returns</Link>
                        <Link className="hover:text-red-400 transition duration-200" to="">My Cancellations</Link>
                    </div>
                </li>
                <li className="flex flex-col gap-y-3 mb-3">
                <h3 className="font-semibold">My Wishlist</h3>
                    <div className="lg:px-10 px-3 text-gray-400 flex flex-col">
                        
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default ProfileBar;