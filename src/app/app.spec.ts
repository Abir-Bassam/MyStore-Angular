import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';

describe('App', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterModule.forRoot([])
			],
			declarations: [
				App,
				NavBar,
				Footer
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(App);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});