import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
	selector: 'app-nav-bar',
	standalone: false,
	templateUrl: './nav-bar.html',
	styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {

	itemCount: number = 0;

	constructor(private cartService: CartService) { }

	ngOnInit() {
		this.cartService.getItems().subscribe(res => {
			this.itemCount = res.length;
		})
	}
}