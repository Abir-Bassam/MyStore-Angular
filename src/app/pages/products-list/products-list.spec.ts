import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { ProductsList } from './products-list';
import { ProductItem } from './product-item/product-item';

describe('ProductsList', () => {
	let component: ProductsList;
	let fixture: ComponentFixture<ProductsList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductsList, ProductItem],
			providers: [provideHttpClient(withFetch())]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ProductsList);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
