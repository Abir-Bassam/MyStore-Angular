import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { CartService } from '../../services/cart-service';

@Component({
	selector: 'app-cart',
	standalone: false,
	templateUrl: './cart.html',
	styleUrl: './cart.css',
})
export class Cart implements OnInit {

	items: Item[] = [];
	total: number = 0;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.cartService.getItems().subscribe(res => {
			this.items = res;
			this.total = this.cartService.getTotal();
		});
	}

	removeItem(item: Item) {
		this.cartService.removeFromCart(item);
		alert('Item removed!');
	}

	pay() {
		this.cartService.saveOrder();
		this.items = this.cartService.clearCart();
	}

	updateQuantity(item: Item) {
		this.items = this.items.map(i => i.product.id === item.product.id ? item : i);
		this.total = this.cartService.getTotal();
	}
}
