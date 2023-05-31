import React from 'react';
import './Logo.css';
import { useNavigate } from "react-router-dom"

const Logo = ({scale}) => {
    let navigate = useNavigate();
    //50px is standard scale
    return (
        <div className="logo" style={{fontSize: 50*(scale/100)}} onClick={() => navigate("/")}>Fruitinator</div>
    );
}

export default Logo;