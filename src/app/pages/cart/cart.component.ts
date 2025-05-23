import { Component, OnInit } from '@angular/core'; // Make sure OnInit is imported
import { RestService } from '../../services/rest.service'; // Import RestService
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BaseComponent } from '../base/base.component';
import { HeaderComponent } from '../../components/header/header.component'; // Import HeaderComponent
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-cart',
	standalone: true,
	imports: [CommonModule, HeaderComponent,FormsModule ], // Add CommonModule here if you use directives like *ngFor
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.css',
})
export class CartComponent extends BaseComponent implements OnInit
{

	public cart_items: any[] = [ ];
    total: number = 0;
    total_qty:number = 0;

	public get grandTotal(): number
	{
		return this.cart_items.reduce((total, item) =>
		{
			const quantity = item.quantity || 0;
			const price = item.price || 0;
			return total + (quantity * price);
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
			this.updateTotal();
			console.log(this.cart_items);
		})
	}
	// Add other methods as needed (e.g., to update quantity, remove item)
	updateTotal()
	{
		this.total = this.cart_items.reduce((total, item) =>
		{
			const quantity = item.qty || 0;
			const price = item.prices[0].price || 0;
			return total + (quantity * price);
		}, 0);

		this.total_qty = this.cart_items.reduce((total, item) =>
		{
			const quantity = item.qty || 0;
			return total + quantity;
		}, 0);
	}

	public placeOrder()
	{
		console.log('Placing order...');
	}

	decrementQuantity(x: any)
	{
		x.qty--;
		if( x.qty <= 0 )
		{
			let index = this.cart_items.findIndex(item=>item == x);
			this.cart_items.splice(index,1);
		}
		this.updateTotal();
	}
	incrementQuantity(x:any)
	{
		x.qty++;
		this.updateTotal();
	}

	confirmCheckout()
	{
		let x = document.querySelector('.confirm-dialog') as any;

		if( x )
		{
			x.open = true;
		}
	}


	closeConfirmDialog()
	{
		document.querySelector('.confirm-dialog').open = false;
	}
}
