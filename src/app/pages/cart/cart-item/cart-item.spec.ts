import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CartItem } from './cart-item';

describe('CartItem', () => {
	let component: CartItem;
	let fixture: ComponentFixture<CartItem>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CartItem],
			imports: [FormsModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(CartItem);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
