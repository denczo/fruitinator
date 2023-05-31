import React from 'react';
import './Footer.css';

const Footer = () => {
    return (<div className="Footer">
        <h2 style={{color: 'grey'}}>FRUITINATOR</h2>
        <span>This is a demo website for e-commerce.</span>
        <span>Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla</span>
    </div>);
}

export default Footer;