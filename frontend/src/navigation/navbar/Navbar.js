import React from 'react';
import './Navbar.css';
import Searchbar from '../searchbar/Searchbar';
import Back from '../buttons/back/Back';
import Cart from '../buttons/cart/Cart';


const Navbar = () => {
    return (<div className='Navbar'>
        <Back/>
        <Searchbar/>
        <Cart/>
    </div>);
}

export default Navbar;