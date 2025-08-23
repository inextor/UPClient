import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { RestService } from './services/rest.service';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';

@Component
({ 
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ToastMessageComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	title = 'myapp';

	constructor(private router: Router, public rest: RestService) {}

	ngOnInit(): void {
		// Navigation logic based on 'bearer' token

		// Ecommerce data fetching and storage logic
		const localEcommerce = localStorage.getItem('ecommerce');
		if (localEcommerce)
		{
			this.rest.ecommerce = JSON.parse(localEcommerce);
		}
		else
		{
			fetch( 'https://uniformesprofesionales.integranet.xyz/api/ecommerce.php')
			.then((response) => response.json())
			.then((data) => {
				this.rest.ecommerce = data;
				localStorage.setItem('ecommerce', JSON.stringify(data));
			}).catch((error) =>
			{
				this.rest.showError(error);
			});
		}
	}
}
