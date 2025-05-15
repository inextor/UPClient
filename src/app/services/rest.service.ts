import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetEmpty } from '../models/GetEmpty';
import { Ecommerce } from '../models/RestModels';

@Injectable
({
	providedIn: 'root',
})
export class RestService
{
	getLoginLogo() {}

	public ecommerce: Ecommerce = GetEmpty.ecommerce();

	constructor()
	{
	}
}
