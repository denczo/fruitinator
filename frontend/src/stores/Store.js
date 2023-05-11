import { makeAutoObservable } from "mobx"

class Store {

    selectedProduct = "";
    searchValue = "Search"
    cart = []

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

    addItemToCart(itemName) {
        this.cart = this.cart.map((item) => {
            if (itemName === item.name) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
    }

    getCart(){
        return this.cart;
    }

    getCartCount(){
      return 0;
    }
}

const store = new Store();
export default store;