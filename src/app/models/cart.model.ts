export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    product: string;
    quantity: number;
    name: string;
    price: number;
    id: number
}