import React, { use } from 'react';
import PricingCard from '../Pricing card/PricingCard';
import DaisyNav from '../Daisynav/DaisyNav';

const Pricing = ({pricingPromise}) => {

    const pricingData = use(pricingPromise)
    // console.log(pricingData); 

    return (
        <div className='mt-12 mx-12'>
            <h1 className='text-4xl'>Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                {
                    pricingData.map(pricingInfo => <PricingCard key={[pricingInfo.id]} pricingInfo={pricingInfo}></PricingCard>)
                }

                {/* {
                    pricingData.map(pricingInfo=> <DaisyNav pricingInfo ={pricingInfo}></DaisyNav>)
                } */}
            </div>
        </div>
    );
};

export default Pricing;