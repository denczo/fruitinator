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

    increaseItemAmount(name) {
        this.cart = this.cart.map((element) => {
            if (element.name === name) {
                let amount = element.amount + 1
                return { ...element, amount };
            } else {
                return element;
            }
        })
    }

    decreaseItemAmount(name) {
        this.cart = this.cart.map((element) => {
            if (element.name === name) {
                let amount = element.amount - 1
                return { ...element, amount };
            } else {
                return element;
            }
        }).filter((element) => element.amount > 0)
    }

    addItemToCart({ data }) {
        const { title, price, image } = data;
        if (this.cart.some(element => element.name === title)) {
            this.increaseItemAmount(title)
        } else {
            this.cart.push({ name: title, amount: 1, price: price, image: image })
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