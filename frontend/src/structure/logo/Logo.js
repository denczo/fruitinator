import React from 'react';
import './Logo.sass';
import PalmTree from '../../assets/palmtree.png';
import { useNavigate } from "react-router-dom"

const Logo = ({scale}) => {
    let navigate = useNavigate();
    //50px is standard scale
    return (<div id='container'>
        <div className="logo" style={{fontSize: 50*(scale/100)}} onClick={() => navigate("/")}>Fruitinator</div>
        <img src={PalmTree} style={{width: "50px", height: 'auto'}}></img>
        </div>
    );
}

export default Logo;