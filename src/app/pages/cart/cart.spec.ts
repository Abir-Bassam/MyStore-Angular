import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Cart } from './cart';
import { CartItem } from './cart-item/cart-item';
import { PaymentForm } from './payment-form/payment-form';

describe('Cart', () => {
	let component: Cart;
	let fixture: ComponentFixture<Cart>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [Cart, CartItem, PaymentForm],
			imports: [FormsModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(Cart);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
