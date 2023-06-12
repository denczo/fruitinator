import React from 'react';
import './Navbar.css';
import Searchbar from '../searchbar/Searchbar';
import Back from '../buttons/back/Back';
import Cart from '../buttons/cart/Cart';
import Favorites from '../buttons/favorites/Favorites';

const Navbar = () => {
    return (<div className='Navbar'>
        <Back/>
        <Searchbar/>
        <Cart/>
        <div id='FavoritesNavbarPlacement'>
        <Favorites/>
        </div>
    </div>);
}

export default Navbar;