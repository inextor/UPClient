import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FormsModule } from '@angular/forms';
interface CLogin {
	username: string;
	password: string
}
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	imports: [FormsModule],
	styleUrl: './login.component.css'
})
export class LoginComponent extends BaseComponent
{
	username: string = '';
	password: string = '';
	error_message: string = '';

	doLogin(evt: Event)
	{
		evt.preventDefault()
		evt.stopPropagation()

		// Add login logic here
		this.is_loading = true

		this.rest.clearCart();

		fetch(this.rest.base_url+'/login.php',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify({
				username: this.username,
				password: this.password
			})
		})
		.then((response) =>
		{
			if( response.status == 200 )
				return response.json()
			throw 'El usuario o la contraseña son incorrectos'
		})
		.then((response:any) =>
		{
				if(response.user.type === 'USER')
				{
					this.is_loading = false;
					this.showError('El usuario o la contraseña son incorrectos X');
					return;
				}
				console.log( response );

				this.is_loading = false;
				this.router.navigate(['/main']);

				localStorage.setItem('bearer', response.session.id );
				localStorage.setItem('username', response.user.username );
				localStorage.setItem('user', JSON.stringify(response.user) );
				localStorage.setItem('ecommerce_user', JSON.stringify( response.ecommerce_user ));
				localStorage.setItem('ecommerce', JSON.stringify( response.ecommerce ));
				this.rest.loadUserData();
		})
		.catch((error) =>
		{
				this.is_loading = false
				this.showError(error)
		})
	}
}
