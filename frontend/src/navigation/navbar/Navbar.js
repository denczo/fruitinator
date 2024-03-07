import React from 'react';
import './Navbar.sass';
import Searchbar from '../searchbar/Searchbar.tsx';
import Cart from '../buttons/cart/Cart';
import Favorites from '../buttons/favorites/Favorites';

const Navbar = () => {
    return (<div className='Navbar'>
        <div className='ElementWrapper'>
        <Searchbar/>
        <Cart/>
        <div id='FavoritesNavbarPlacement'>
        <Favorites/>
        </div>
        </div>
    </div>);
}

export default Navbar;