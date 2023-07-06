import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter()
  product : Product | undefined = 
  {
    id: 0,
    title : 'Snickers',
    price : 200,
    category : 'shoes',
    description : 'A very nice pair of shoes',
    image : 'https://via.placeholder.com/150',
  } 

  onAddToCart() {
    this.addToCart.emit(this.product)
  }
}
