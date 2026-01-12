import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';
import { Item } from '../../../models/item';

@Component({
	selector: 'app-product-item',
	standalone: false,
	templateUrl: './product-item.html',
	styleUrl: './product-item.css',
})
export class ProductItem {

	@Input() product: Product;
	quantity: number;
	@Output() addItem: EventEmitter<Item> = new EventEmitter;

	constructor() {
		this.product = {
			id: 0,
			name: '',
			price: 0,
			url: '',
			description: ''
		}
		this.quantity = 1;
	}

	submitForm() {
		this.addItem.emit({
			product: this.product,
			quantity: this.quantity
		})
	}
}