import React, { useState } from 'react';
import Navlink from './Navlink';
import { Menu, X } from 'lucide-react';


const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const links = navLinks.map(route => <Navlink key={route.id} route={route}></Navlink>)


    return (
        <nav className='flex justify-between mx-10 mt-5'>
            <span className='flex ' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }
                
               <ul className={`md:hidden absolute bg-amber-200 text-black duration-300 ${open? 'top-12':'-top-30'}`}>
                {links}
               </ul>

                <h1 className='ml-5'>My NavBar</h1>
            </span>
            <ul className='md:flex hidden'>

             {
                links
             }
                {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li> */}

            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;