import React from 'react';
import './Sortbar.sass';

const Sortbar = ({options, setSelectedOption }) => {

    return (<div id="Sortbar">
        <select onChange={(e) => setSelectedOption(e.target.value)}>
            {options.map((element, index) => <option key={index} value={element.value}>{element.label}</option>)}
        </select>
    </div>);
}

export default Sortbar;