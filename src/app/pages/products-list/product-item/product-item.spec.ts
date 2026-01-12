import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule, provideRouter } from '@angular/router';

import { ProductItem } from './product-item';

describe('ProductItem', () => {
	let component: ProductItem;
	let fixture: ComponentFixture<ProductItem>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductItem],
			imports: [FormsModule, RouterModule],
			providers: [provideRouter([])]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ProductItem);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});