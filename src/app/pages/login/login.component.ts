import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
interface CLogin {
	username: string;
	password: string;
}
@Component({
	selector: 'app-login',
	imports: [CommonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent extends BaseComponent
{
	is_loading: boolean = true;
    username: string  = '';
    password: string  = '';

	doLogin(evt: Event)
	{
		evt.preventDefault();
		evt.stopPropagation();

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
			if (this.return_url)
			{
				this.router.navigate(['/main']);
			}
            else
			{
				this.router.navigate(['/list-requisition']);
				//this.showSuccess('Sesion iniciada con exito');
			}
        })
        .catch((error) =>
        {
			this.is_loading = false;
			this.showError(error);
        });
    }
}
