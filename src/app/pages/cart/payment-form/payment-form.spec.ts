import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PaymentForm } from './payment-form';

describe('PaymentForm', () => {
	let component: PaymentForm;
	let fixture: ComponentFixture<PaymentForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PaymentForm],
			imports: [FormsModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(PaymentForm);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
