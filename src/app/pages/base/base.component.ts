import { Component } from '@angular/core';
import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component
({
	selector: 'app-base',
 standalone: true,
 imports: [],
	template: '',
 styleUrls: ['./base.component.css']
})
export class BaseComponent
{
	public rest: RestService;
	public is_loading: boolean = false;
	router: Router;
    route: ActivatedRoute;

	constructor(public injector: Injector)
	{
		this.rest = this.injector.get(RestService);
		this.router = this.injector.get(Router);
		this.route = injector.get(ActivatedRoute);
	}

	showError(error: any) {
		this.rest.showError(error);
	}

	showSuccess(message: string) {
		this.rest.showSuccess(message);
	}

	getErrorMessage(error: any): string {
		if (typeof error === 'string') {
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
