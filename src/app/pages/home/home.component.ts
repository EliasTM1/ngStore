import { Component } from "@angular/core";

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

	onColumnsCountChange(colsNum: number): void {
		this.cols = colsNum;
		this.rowHeight = ROWS_HEIHGT[this.cols];
	}

	onShowCategory(newCategory: string): void {
		console.log("monos")
		this.category = newCategory;
	}

	// onAddToCart(product: any): void {
	// 	console.log("product", product);
	// }
}
