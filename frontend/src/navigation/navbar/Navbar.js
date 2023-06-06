import React from 'react';
import './Navbar.css';
import Searchbar from '../searchbar/Searchbar';
import Back from '../buttons/back/Back';
import Cart from '../buttons/cart/Cart';
import Favorites from '../buttons/favorites/Favorites';
import Logo from '../../structure/logo/Logo';


const Navbar = () => {
    return (<div className='Navbar'>
        {/* <Logo scale={80}/> */}
        <Back/>
        <Searchbar/>
        <Cart/>
        <Favorites/>
    </div>);
}

export default Navbar;