import React from 'react';
import './Favorites.css';

const Favorites = () => {
    return (<div className="container">
        <div className="heart" onClick={(e) => {e.stopPropagation()}}></div></div>);
}

export default Favorites;