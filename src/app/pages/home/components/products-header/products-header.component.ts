import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-products-header",
	templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
	@Output() columnsCountChange = new EventEmitter<number>();
	sort = "desc";
	itemsShowCount = 10;

	onSortUpdated(newSort: string): void {
		this.sort = newSort;
	}

	onItemsUpdated(count: number): void {
		this.itemsShowCount = count;
	}

	onColumnsUpdated(colsNum: number): void {
		console.log(colsNum, "Cols num");
		this.columnsCountChange.emit(colsNum);
	}
}
