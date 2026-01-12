import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { ProductDetails } from './product-details';

describe('ProductDetails', () => {
	let component: ProductDetails;
	let fixture: ComponentFixture<ProductDetails>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductDetails],
			imports: [RouterModule],
			providers: [provideRouter([]), provideHttpClient(withFetch())]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ProductDetails);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
