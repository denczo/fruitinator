import React from 'react';
import './Searchbar.css';
import { observer } from "mobx-react";
import store from "../../stores/Store"

const Searchbar = () => {
    return (
        <input type="text" placeholder="Search" onClick={() => store.setSearchValue("")} onChange={(e) => store.setSearchValue(e.target.value)} value={store.getSearchValue()} />
    );
}

export default observer(Searchbar);