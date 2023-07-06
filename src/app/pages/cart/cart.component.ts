import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit{

  constructor (private cartService: CartService) {}
  
  cart : Cart = {items: [
    {
    product : 'https://via.placeholder.com/150',
    quantity: 2,
    name: 'snickers',
    price: 150,
    id: 1
    },
    {
    product : 'https://via.placeholder.com/150',
    quantity: 1,
    name: 'snickers',
    price: 150,
    id: 2
    },
    {
    product : 'https://via.placeholder.com/150',
    quantity: 5,
    name: 'snickers',
    price: 200,
    id: 3
    },
  ]}
  dataSource : Array<CartItem> = []
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total', 
    'action'
  ]

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }


  getTotal(items: Array<CartItem>) : number {
    return this.cartService.getTotal(items)
  }

}
