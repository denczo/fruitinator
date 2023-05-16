import React from 'react';
import './Header.css';
import { useNavigate } from "react-router-dom"

const Header = () => {
    let navigate = useNavigate();

    return (<div className="Header">
        <div className="logo" onClick={() => navigate("/")}>Fruitinator</div>
    </div>);
}

export default Header;