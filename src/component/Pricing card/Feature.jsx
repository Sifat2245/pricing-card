import { Check, CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {

    return (
        <p className='flex gap-2 mt-2 text-[14px]'> <Check></Check> {feature}</p>
    );
};

export default Feature;