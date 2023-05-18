import { makeAutoObservable } from "mobx"

class Store {

    selectedProduct = "";
    searchValue = ""
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

    addItemToCart(item) {
        console.log("im store"+JSON.stringify(item))
        if (this.cart.some(element => element.name === item.data)) {
            this.cart = this.cart.map((element) => {
                let amount = item.amount + element.amount
                if (element.name === item.data) {
                    return { ...element, amount };
                } else {
                    return element;
                }
            })
        } else {
            this.cart.push({ name: item.data, amount: item.amount, price: item.price, image: item.image })
        }

    }

    getCart() {
        return this.cart;
    }

    getCartCount() {
        return this.cart.reduce(function (sum, item) {
            return sum + item.amount
        }, 0);
    }
}

const store = new Store();
export default store;