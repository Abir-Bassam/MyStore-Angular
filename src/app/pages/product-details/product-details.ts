import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Item } from '../../models/item';
import { ProductService } from '../../services/product-service';
import { CartService } from '../../services/cart-service';

@Component({
	selector: 'app-product-details',
	standalone: false,
	templateUrl: './product-details.html',
	styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

	product: Product | undefined;
	quantity: number;
	loading: boolean;

	constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
		this.product = undefined;
		this.quantity = 1;
		this.loading = true;
	}

	ngOnInit(): void {
		const productId = this.route.snapshot.paramMap.get('id');
		if (productId) {
			this.productService.getProducts().subscribe(products => {
				this.product = products.find(p => p.id === Number(productId));
				this.loading = false;
			});
		}
	}

	addToCart(): void {
		const item: Item = {
			product: this.product!,
			quantity: this.quantity
		};

		if (!this.cartService.inCart(item)) {
			this.cartService.addToCart(item);
			alert('Item added!');
		} else {
			alert('Item is already in cart!');
		}
	}
}
