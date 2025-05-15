import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class LoginComponent {
	doLogin(evt: Event)
	{
		evt.preventDefault();
		evt.stopPropagation();

		this.is_loading = true;

		this.subs.sink = this.doLogin_starter(this.username, this.password)
		.subscribe
		({
			next: (response) =>
			{
				this.is_loading = false;
				if (this.return_url)
				{
					this.router.navigate([this.return_url]);
				} else
				{
					this.router.navigate(['/list-requisition']);
				}
				this.showSuccess('Sesion iniciada con exito');
			},
			error: (error) =>
			{
				this.showError(error);
				this.is_loading = false;
			}
		});
	}
}
