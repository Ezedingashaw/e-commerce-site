import React from 'react';
import ServiceIcons from './serviceIcons';

const ServiceBox = () => {

    const deliveryIcon = <i className="fa-solid fa-truck text-white text-2xl"></i>;
    const headSet = <i class="fa-solid fa-headset text-white text-2xl"></i>;
    const guarantee = <i class="fa-solid fa-shield text-white text-2xl"></i>;

    return (
        <div className="flex justify-center lg:gap-x-20 md:gap-x-14">
            <ServiceIcons header="Free and fast delivery" text="free delivery for all orders $140" icon={ deliveryIcon } />
            <ServiceIcons header="24/7 customer service" text="friendly 24/7 customer support" icon={ headSet } />
            <ServiceIcons header="money back guarantee" text="we return money with in 30 days" icon={ guarantee } />
        </div>
     );
}
 
export default ServiceBox;