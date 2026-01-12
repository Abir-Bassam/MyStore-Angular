import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Item } from '../../models/item';
import { ProductService } from '../../services/product-service';
import { CartService } from '../../services/cart-service';

@Component({
	selector: 'app-products-list',
	standalone: false,
	templateUrl: './products-list.html',
	styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {

	products: Product[] = [];

	constructor(private productService: ProductService, private cartService: CartService) { }

	ngOnInit(): void {
		this.productService.getProducts().subscribe(res => {
			this.products = res;
		})
	}

	addItem(item: Item): void {
		if(!this.cartService.inCart(item)) {
			this.cartService.addToCart(item);
			alert('Item added!');
		} else {
			alert('Item is already in cart!');
		}
	}
}