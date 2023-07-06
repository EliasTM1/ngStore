import { Component } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIHGT: {[id:number]: number} = {1:400, 3:335, 4:350};

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styles: [],
})
export class HomeComponent {
	cols: number = 3;
	category: string | undefined;
	rowHeight = ROWS_HEIHGT[this.cols];

	constructor (private cartService : CartService) {}

	onColumnsCountChange(colsNum: number): void {
		this.cols = colsNum;
		this.rowHeight = ROWS_HEIHGT[this.cols];
	}

	onShowCategory(newCategory: string): void {
		console.log("monos")
		this.category = newCategory;
	}

	onAddToCart(product: any): void {
		// console.log("product from Add=====", product);
		this.cartService.addToCart({
			product: product.image,
			name : product.title,
			price : product.price,
			quantity: 1,
			id: product.id
		});	
	}

	// onAddToCart(product: any): void {
	// 	console.log("product", product);
	// }
}
