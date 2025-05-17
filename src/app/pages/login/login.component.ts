import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { FormsModule } from '@angular/forms';
interface CLogin {
	username: string;
	password: string;
}
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',	
  imports: [CommonModule, FormsModule],
	styleUrl: './login.component.css'
})
export class LoginComponent extends BaseComponent
{
	is_loading: boolean = true;
		username: string	= '';
		password: string	= '';
	error_message: string = '';

	doLogin(evt: Event)
	{
		evt.preventDefault();
		evt.stopPropagation();

		// Add login logic here
		this.is_loading = true;


		fetch('https://uniformesprofesionales.integranet.xyz/api/login.php',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.username,
				password: this.password
			})
		})
		.then((response) => response.json())
		.then((response) =>
		{
				this.is_loading = false;
				this.router.navigate(['/main']);
				localStorage.setItem('token', response.token);
				localStorage.setItem('username', response.username);
		})
		.catch((error) =>
		{
				this.is_loading = false;
				this.showError(error);
		});
	}
}
