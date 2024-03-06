export interface Product {
    id: string;
    name: string;
    price: number;
}

export interface Nutritions {
    carbs: number,
    fiber: number,
    sugars: number,
    protein: number,
    fat: number
}

export interface Item {
    id: string,
    fruit: string,
    info: number,
    nutritions: Nutritions,
    location: string,
    countrycode: string,
    price: string,
    image: string
}

export interface Items {
    items: Item[],
    amountPages: number
}

export interface CartState {
    items: Items,
    loading: boolean,
    error: string,
}