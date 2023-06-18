import React from 'react';
import './Searchbar.sass';
import { observer } from "mobx-react";
import store from "../../stores/Store"
import { useNavigate } from "react-router-dom"

const Searchbar = () => {
    let navigate = useNavigate();

    return (
        <input type="text" placeholder="Search for your favorite fruits" onClick={() => {store.setSearchValue(""); navigate("/")}} onChange={(e) => store.setSearchValue(e.target.value)} value={store.getSearchValue()} />
    );
}

export default observer(Searchbar);