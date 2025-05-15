import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { RestService } from './services/rest.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	title = 'myapp';

	constructor(
		private router: Router,
		public rest: RestService,
	) {}

	ngOnInit(): void {
		// Navigation logic based on 'bearer' token
		if (!localStorage.getItem('bearer')) {
			this.router.navigate(['/login']);
		} else {
			this.router.navigate(['/main']);
		}

		// Ecommerce data fetching and storage logic
		const localEcommerce = localStorage.getItem('ecommerce');
		if (localEcommerce) {
			this.rest.business = JSON.parse(localEcommerce);
		} else {
			fetch(
				'https://uniformesprofesionales.integranet.xyz/api/ecommerce.php',
			)
				.then((response) => response.json())
				.then((data) => {
					this.rest.business = data;
					localStorage.setItem('ecommerce', JSON.stringify(data));
				})
				.catch((error) => {
					console.error('Error fetching ecommerce data:', error);
					// Handle error appropriately, e.g., show a message to the user
				});
		}
	}
}
