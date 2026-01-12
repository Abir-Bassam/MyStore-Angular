import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
	providedIn: 'root',
})
export class CartService {

	items: Item[] = [];
	cartChanged: EventEmitter<Item[]> = new EventEmitter;

	lastOrder = {
		itemCount: 0,
		total: 0
	};

	getItems(): Observable<Item[]> {
		return new Observable<Item[]>(sub => {
			sub.next(this.items);
			this.cartChanged.subscribe(items => sub.next(items));
		});
	}

	addToCart(item: Item): void {
		this.items.unshift(item);
		this.cartChanged.emit(this.items);
	}

	removeFromCart(item: Item): void {
		this.items = this.items.filter(i => i.product.id !== item.product.id);
		this.cartChanged.emit(this.items);
	}

	inCart(item: Item): boolean {
		return this.items.map(i => i.product.id).includes(item.product.id);
	}

	clearCart(): Item[] {
		this.items = [];
		this.cartChanged.emit(this.items);
		return this.items;
	}

	saveOrder(): void {
		this.lastOrder = {
			itemCount: this.items.length,
			total: this.getTotal()
		};
	}

	getLastOrder() {
		return this.lastOrder;
	}

	getTotal(): number {
		if (this.items.length === 0) return 0;
		return this.items.map(i => i.quantity * i.product.price).reduce((total, current) => total + current);
	}
}