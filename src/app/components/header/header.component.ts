import { Component, Input } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styles: [],
})
export class HeaderComponent {
	private _cart: Cart = { items: [] };
	itemsQuantity = 0;

	constructor(private cartService: CartService) {}

	@Input()
	get cart(): Cart {
		return this._cart;
	}

	set cart(cart: Cart) {
		this.itemsQuantity = cart.items
			.map((item) => { 
				// console.log(item, "item from map")
				return item.quantity
			})
			.reduce((prev, curr) =>  prev + curr, 0);
	}

	getTotal(items: Array<CartItem>): number {
		// console.log(items, "items")
		// console.log(this.cart, "MY CART")
		return this.cartService.getTotal(items);
	}

	onClearCart(): void {
		this.cartService.clearCart();
	}
}





