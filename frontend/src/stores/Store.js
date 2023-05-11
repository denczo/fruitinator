import { makeAutoObservable } from "mobx"

class Store {

    selectedProduct = "";
    searchValue = "Search"

    constructor() {
        makeAutoObservable(this);
    }
    getProduct() {
        return this.selectedProduct;
    }
    setProduct(product) {
        this.selectedProduct = product;
    }

    getSearchValue() {
        return this.searchValue;
    }

    setSearchValue(value) {
        this.searchValue = value;
    }
}

const store = new Store();
export default store;