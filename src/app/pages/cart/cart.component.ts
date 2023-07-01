import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit{
  
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
    // TODO: Uncomment this line
    // return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0)
    // TODO: Remove this lines
    const total = items.reduce((prev, current) => prev + (current.price * current.quantity), 0)
    console.log(total)
    return total
  }

}
