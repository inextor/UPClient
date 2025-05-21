import { Component, OnInit } from '@angular/core'; // Make sure OnInit is imported
import { RestService } from '../../services/rest.service'; // Import RestService
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BaseComponent } from '../base/base.component';
import { HeaderComponent } from '../../components/header/header.component'; // Import HeaderComponent

@Component({
	selector: 'app-cart',
	standalone: true,
	imports: [CommonModule, HeaderComponent, FormsModule], // Add CommonModule here if you use directives like *ngFor
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.css',

})
export class CartComponent extends BaseComponent implements OnInit {
decrementQuantity(_t11: any) {
throw new Error('Method not implemented.');
} // Implement OnInit

	public cart_items: any[] = [ ];

	public get grandTotal(): number
	{
		return this.cart_items.reduce((total, item) =>
		{
			const quantity = item.quantity || 0;
			const price = (item.prices && item.prices.length > 0) ? item.prices[0].price : 0;
			return total + (quantity * price) ;
		}, 0);
	}

	ngOnInit(): void { // Implement ngOnInit
		this.fetchCartItems();
	}

	public fetchCartItems()
	{
		let cart_items = this.rest.getCartItems();

		// 1. After `let cart_items = this.rest.getCartItems();`, add a check
		if (cart_items.length === 0) {
			this.cart_items = [];
			return;
		}

		// 2. Change `let item_ids = cart_items.reduce(reduce_f,[]).join(',');` to `let item_ids = cart_items.map(item => item.item_id).join(',');`
		let item_ids = cart_items.map(item => item.item_id).join(',');

		// 3. Change `let params = this.rest.getUrlParams({ 'id,': item_ids })` to `let params = this.rest.getUrlParams({ 'id': item_ids })`
		let params = this.rest.getUrlParams({ 'id,': item_ids })

		this.rest.getItems(params)
		.then((response) =>
		{
			//If not met on fines return an empty array
			if( response.length == 0 )
			{
				this.cart_items = [];
				return;
			}


			this.cart_items = response.map((item_info:any) =>
			{
				let cart_item = cart_items.find((item) => item.item_id === item_info.item.id);
				return {...cart_item, ...item_info};
			});
			console.log(this.cart_items);
		})
	}

	updateQuantity(item: any, change: number): void {
		const index = this.cart_items.findIndex(cartItem => cartItem.item_id === item.item_id);
		if (index !== -1) {
			const newQuantity = this.cart_items[index].quantity + change;
			if (newQuantity > 0) {
				this.cart_items[index].quantity = newQuantity;
			} else {
				// Optional: remove item if quantity becomes 0
				this.cart_items.splice(index, 1);
			}
			// Re-calculate grand total if needed, or if it's a getter it will update automatically
			// this.grandTotal = this.calculateGrandTotal();
		}
	}
	
	public placeOrder()
	{
		console.log('Placing order...');
	}
}
