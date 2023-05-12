import { makeAutoObservable } from "mobx"

class Store {

    selectedProduct = "";
    searchValue = ""
    cart = new Map()

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

    addItemToCart(item) {
        if(this.cart.has(item.data)){
            const updatedCart = new Map(this.cart)
            const sum = this.cart.get(item.data) + item.amount
            updatedCart.set(item.data, sum)
            this.cart = updatedCart;
        }else{
            this.cart.set(item.data, item.amount)
        }
    }

    updateCart(item){

    }

    getCart(){
        return this.cart;
    }

    getCartCount(){
        let sum = 0;
        this.cart.forEach(value => sum += value);
        return sum
    }
}

const store = new Store();
export default store;