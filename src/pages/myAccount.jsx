import React from 'react';
import ProfileBar from '../component/profileBar';
import TopHeader from '../component/topHeader';
import Header from '../component/header';
import Profile from '../component/common/profileSetting';
import Footer from '../component/footer';

const MyAccount = ({user}) => {
    return ( 
        <div className="flex flex-col gap-y-10">
            <div>
            <TopHeader />
            <Header />
           </div>
            <div className="self-end px-10">
                <p>Welcome ezu</p>
            </div>
            <div className="sm:px-10 px-5 grid md:grid-cols-4">
                <ProfileBar />
                <Profile user={user} style="col-span-3" />
            </div>
            <Footer />
        </div>
     );
}
 
export default MyAccount;