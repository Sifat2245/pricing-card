import React from 'react';

const Navlink = ({route}) => {

    return (
       <li className='hover:bg-amber-500 px-5 lg:mr-10'>
        <a href={route.path}>{route.name}</a>
       </li>
    );
};

export default Navlink;