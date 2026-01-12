import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
	selector: 'app-order-success',
	standalone: false,
	templateUrl: './order-success.html',
	styleUrl: './order-success.css',
})
export class OrderSuccess implements OnInit {

	itemCount: number = 0;
	total: number = 0;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		const order = this.cartService.getLastOrder();
		this.itemCount = order.itemCount;
		this.total = order.total;
	}
}
