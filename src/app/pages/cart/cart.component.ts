import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; // Make sure OnInit is imported
import { RestService } from '../../services/rest.service'; // Import RestService
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common'; // Import CommonModule
import { BaseComponent } from '../base/base.component';
import { HeaderComponent } from '../../components/header/header.component'; // Import HeaderComponent
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
	selector: 'app-cart',
	standalone: true,
	imports: [ HeaderComponent,FormsModule, CurrencyPipe, DecimalPipe, RouterModule ], // Add CommonModule here if you use directives like *ngFor
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.css',
})
export class CartComponent extends BaseComponent implements OnInit
{
	@ViewChild('confirmDialog') confirmDialog!: ElementRef<HTMLDialogElement>;
	@ViewChild('confirmDialog2') confirmDialog2!: ElementRef<HTMLDialogElement>;

	public cart_items: any[] = [ ];
	total: number = 0;
	total_qty:number = 0;
	sync_uuid: string = '' ;
	order_id: number | null = null;

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

		this.route.paramMap.subscribe((params) =>
		{
			this.sync_uuid = this.rest.getUUID();
			this.fetchCartItems();
		});
	}

	public fetchCartItems()
	{
		let cart_items = this.rest.getCartItems();

		if (cart_items.length === 0) {
			this.cart_items = [];
			return;
		}

		let item_ids = cart_items.map(item => item.item_id).join(',');

		let params = this.rest.getUrlParams({ 'id,': item_ids })

		this.rest.getItems(params)
		.then((response) =>
		{
			if( response.data.length == 0 )
			{
				this.cart_items = [];
				return;
			}

			this.cart_items = response.data.map((item_info:any) =>
			{
				let cart_item = cart_items.find((item) => item.item_id === item_info.item.id);
				let image_url = item_info.item.image_id ? this.rest.base_url + '/image.php?id=' + item_info.item.image_id : null;
				return {...cart_item, ...item_info, image_url};
			});

			this.updateTotal();
			console.log(this.cart_items);

			const ecommerce_item_params = this.rest.getUrlParams({ 'item_id,': item_ids, ecommerce_id: this.rest.ecommerce.id });
			this.rest.getEcommerceItems(ecommerce_item_params).then((ecommerce_items_response) => {
				this.cart_items.forEach((cart_item) => {
					const ecommerce_item = ecommerce_items_response.data.find((ei:any) => ei.item_id === cart_item.item_id);
					if (ecommerce_item) {
						cart_item.ecommerce_item = ecommerce_item;
					}
				});
				this.updateTotal();
			});
		})
	}

	updateTotal()
	{
		this.total = this.cart_items.reduce((total, item) =>
		{
			const quantity = item.qty || 0;
			const price = item.ecommerce_item?.price || 0;
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


}
