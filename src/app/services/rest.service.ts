import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetEmpty } from '../models/GetEmpty';
import { Ecommerce } from '../models/RestModels';
import { CartItemInfo } from '../models/RestModels';

@Injectable
({ providedIn: 'root' })
export class RestService
{
	public bearer: string = '';
	public ecommerce: Ecommerce = GetEmpty.ecommerce();
	public base_url: string = 'https://uniformesprofesionales.integranet.xyz/api';
	public cartItemCount: number = 0;
	ecommerce_user: any = {};
	user: any = {};

	constructor()
	{

		if( localStorage.getItem('bearer') )
		{
			this.bearer = localStorage.getItem('bearer') as string;
			this.user = JSON.parse( localStorage.getItem('user') as string );
			this.ecommerce_user = JSON.parse( localStorage.getItem('ecommerce_user') as string );
			this.ecommerce = JSON.parse( localStorage.getItem('ecommerce') as string );
		}

		let domain = window.location.hostname;

		if( domain.includes('localhost') || domain.includes('127.0.0.1') )
		{
			this.base_url = 'http://'+domain+'/PointOfSale';
		}

	}

	addToCart(item_id: number, qty: number): void
	{
		const cart: { item_id: number; qty: number }[] = JSON.parse(
			localStorage.getItem('cart') || '[]',
		);
		const existingItemIndex = cart.findIndex((item) => item.item_id === item_id);

		if (existingItemIndex > -1) {
			cart[existingItemIndex].qty += qty;
		} else {
			cart.push({ item_id, qty });
		}

		localStorage.setItem('cart', JSON.stringify(cart));
	}

	removeFromCart(item_id: number): CartItemInfo[]
	{
		let cart: { item_id: number; qty: number }[] = JSON.parse(localStorage.getItem('cart') || '[]')
		const initialLength = cart.length;

		cart = cart.filter((item) => item.item_id !== item_id);

		if (cart.length < initialLength)
		{
			localStorage.setItem('cart', JSON.stringify(cart));
			return cart as CartItemInfo[]; // Assuming the structure matches CartItemInfo
		}
		else
		{
			return cart as CartItemInfo[]; // Assuming the structure matches CartItemInfo
		}
	}

	public getCartItems():CartItemInfo[]
	{
		try {
			const cartData = localStorage.getItem('cart');
			return cartData ? JSON.parse(cartData) : [];
		} catch (e) {
			console.error('Error parsing cart data from localStorage:', e);
			return [];
		}
	}

	getUrlParams(obj:any):URLSearchParams
	{
		if (obj === null || obj === undefined) {
			obj = {};
		}
		const params = new URLSearchParams();
		for (const key in obj)
		{
			if (obj.hasOwnProperty(key))
			{
				params.set(key, String(obj[key]));
			}
		}
		return params;
	}

	getUrlParamsFromWindowLocation(overrideParams:Record<string,(string|number)> ={}):URLSearchParams
	{
		const params = new URLSearchParams(window.location.search);
		for (const key in overrideParams)
		{
			if (Object.prototype.hasOwnProperty.call(overrideParams, key))
			{
				params.set(key, String(overrideParams[key]));
			}
		}
		return params;
	}

	getItems(p:URLSearchParams | Object)
	{
		let params = p instanceof URLSearchParams ? p : this.getUrlParams(p);

		const baseUrl = this.base_url+'/item_info.php';
		return fetch(baseUrl + '?' + p.toString())
		.then((response) =>
		{
			if( response.status >= 200 && response.status < 300 )
			{
				return response.json();
			}

			throw 'Ocurrio un error al obtener los items'
		})
		.then((response) =>
		{
			return response.data;
		})
	}


	getUUID():string
	{
		if( window.crypto )
		{
			let x = window?.crypto as any;
			return x.randomUUID() as string;
		}

		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
		{
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
}
