import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
	providedIn: "root",
})
export class CartService {
	cart = new BehaviorSubject<Cart>({ items: [] });
	constructor(private _snackBar: MatSnackBar) {}

	// addToCart(product: any): void {
	//   console.log(product, "PRODUCT")
	//   console.log(this.cart.value, "this.cart this.cart")
	//   console.log(...this.cart.value.items, "PLATILLO ANAL ")
	//   const items = [...this.cart.value.items];
	//   const itemInCart = items.find(item => item.id === product.id);
	//   console.log(itemInCart, "ITEM IN CART")

	//   // itemInCart ? itemInCart.quantity++ : items.push({...product, quantity: 1});
	//   // itemInCart ? itemInCart.quantity++ : items.push(product);

	//   if (itemInCart) {
	//     itemInCart.quantity += 1;
	//   } else {
	//     items.push(product);
	//   }

	//   this.cart.next({items});
	//   this._snackBar.open('Product added to cart', 'OK', { duration: 3000 });
	//   console.log(this.cart.value)

	// }

	addToCart(item: CartItem): void {
		const items = [...this.cart.value.items];

		const itemInCart = items.find((item) => item.id === item.id);
    console.log(itemInCart, "ITEM IN CART")
    console.log(items, "ITEM IN CART")
    
		if (itemInCart) {
			itemInCart.quantity += 1;
		} else {
			items.push(item);
      // console.log(items, "ITEMS from service")
		}

		this.cart.next({ items });
		this._snackBar.open("1 item added to cart.", "Ok", { duration: 3000 });
	}

	getTotal(items: Array<CartItem>): number {
		// console.log(items, "ITEMS");
		// TODO: Uncomment this line
		return items
			.map((item) => item.price * item.quantity)
			.reduce((prev, current) => prev + current, 0);
		// TODO: Remove this lines
	}

	clearCart(): void {
		this.cart.next({ items: [] });
		this._snackBar.open("Cart cleared", "OK", { duration: 3000 });
	}
}
