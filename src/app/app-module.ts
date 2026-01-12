import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';
import { ProductsList } from './pages/products-list/products-list';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';
import { OrderSuccess } from './pages/order-success/order-success';
import { ProductItem } from './pages/products-list/product-item/product-item';
import { CartItem } from './pages/cart/cart-item/cart-item';
import { PaymentForm } from './pages/cart/payment-form/payment-form';

@NgModule({
	declarations: [
		App,
		NavBar,
		Footer,
		ProductsList,
		ProductDetails,
		Cart,
		OrderSuccess,
		ProductItem,
		CartItem,
		PaymentForm,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FormsModule
	],
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideClientHydration(withEventReplay()),
		provideHttpClient(withFetch())
	],
	bootstrap: [App]
})
export class AppModule { }