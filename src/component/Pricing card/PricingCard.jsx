import React from 'react';
import { Features } from 'tailwindcss';
import Feature from './Feature';

const PricingCard = ({pricingInfo}) => {

    const {title, price, description, features} = pricingInfo

    return (
        <div className='border border-blue-400 bg-blue-100 rounded-2xl p-6 flex flex-col'>
            {/* card header */}
            <div>
                <h1 className="text-4xl">{title}</h1>
                <h4 className='text-gray-700'>{price}</h4>
            </div>
            {/* card description */}
            <div className='mt-3 bg-blue-200 rounded-2xl p-3 flex-1 '>
                <p className='mb-3'>{description}</p>
                {
                    features.map((feature, index) => <Feature key={index} feature ={feature}></Feature>)
                }
            </div>
            <button className='mt-4 bg-blue-500 py-3 w-full rounded-2xl hover:bg-blue-700 hover:text-white'>Subscribe</button>
        </div>
    );
};

export default PricingCard;