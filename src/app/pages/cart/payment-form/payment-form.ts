import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from '../../../models/payment';
import { Router } from '@angular/router';

@Component({
	selector: 'app-payment-form',
	standalone: false,
	templateUrl: './payment-form.html',
	styleUrl: './payment-form.css',
})
export class PaymentForm {

	@Input() total: number;
	payment: Payment;

	@Output() pay: EventEmitter<void> = new EventEmitter;

	constructor(private router: Router) {
		this.total = 0;
		this.payment = {
			name: '',
			cardNumber: '',
			expiry: '',
			cvv: '',
			address: ''
		}
	}

	submitPaymentForm() {
		this.payment = {
			name: '',
			cardNumber: '',
			expiry: '',
			cvv: '',
			address: ''
		}
		this.pay.emit();
		this.router.navigateByUrl('success');
	}
}
