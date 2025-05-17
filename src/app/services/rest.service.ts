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

	public cartItemCount: number = 0;
	constructor() 
	{
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

	getUrlParams(Object:any):URLSearchParams
	{
		const params = new URLSearchParams();
		for (const key in Object)
		{
			if (Object.prototype.hasOwnProperty.call(Object, key))
			{
				params.set(key, String(Object[key]));
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
 
		const baseUrl = 'https://uniformesprofesionales.integranet.xyz/api/item_info.php';
		fetch(baseUrl + '?' + p.toString())
		.then((response) =>j
		{
			return response.json();
		})
		.then((response) =>
		{
		return response.data;
		})
		.catch((error) =>
		{
			console.log(error);
		});
	}
}
