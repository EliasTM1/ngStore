import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items : []})
  constructor(private _snackBar : MatSnackBar) { }

  addToCart(product: any): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find(item => item.id === product.id);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      items.push(product);
    }

    this.cart.next({items});
    this._snackBar.open('Product added to cart', 'OK', { duration: 3000 });
    console.log(this.cart.value)

  }
}