import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injector } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
	selector: 'app-base',
	standalone: true,
	imports: [CommonModule],
	template: '',
	styleUrls: ['./base.component.css']
})
export class BaseComponent
{
	rest: RestService;
	router: Router;
	constructor(public injector: Injector)
	{
		this.rest = this.injector.get(RestService);
		this.router = this.injector.get(Router);
	}

	showError(error: any)
{
		console.log(error);
	}

	showSuccess(message: string)
{
		console.log(message);
	}

	getErrorMessage(error:any):string
	{
		if( typeof error === 'string')
		{
				return error;
		}
		if (error.error)
		{
				return error.error;
		}
		else
		{
				return error;
		}
	}
}
