import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetEmpty } from '../models/GetEmpty';
import { Ecommerce } from '../models/RestModels';

@Injectable
  ({
    providedIn: 'root',
  })
export class RestService {
  getLoginLogo() { }

  public bearer: string = '';
  public ecommerce: Ecommerce = GetEmpty.ecommerce();

  public cartItemCount: number = 0;
  constructor() {
  }

  addToCart(item_id: number, qty: number): void {
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

  removeFromCart(item_id: number): void {
    let cart: { item_id: number; qty: number }[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const initialLength = cart.length;

		cart = cart.filter((item) => item.item_id !== item_id);

		// Only update local storage if an item was actually removed
		if (cart.length < initialLength)
		{
			localStorage.setItem('cart', JSON.stringify(cart));
		}
  }

  public getCartItems(): { item_id: number; qty: number }[] {
    try {
      const cartData = localStorage.getItem('cart');
      return cartData ? JSON.parse(cartData) : [];
    } catch (e) {
      console.error('Error parsing cart data from localStorage:', e);
      return [];
    }
  }

  // Example get method (assuming you will add HttpClient later)
  get(url: string): Observable<any> {
    // Placeholder for actual HttpClient call
    return new Observable();
  }
}
