import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { SearchUserComponent } from '../../components/search-user/search-user.component';

@Component({
	selector: 'app-confirm-order',
	standalone: true,
	imports: [HeaderComponent, FormsModule, CommonModule, SearchUserComponent, CurrencyPipe, DecimalPipe],
	templateUrl: './confirm-order.component.html',
	styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent extends BaseComponent implements OnInit {
	@ViewChild('confirmDialog') confirmDialog!: ElementRef<HTMLDialogElement>;
	@ViewChild('confirmDialog2') confirmDialog2!: ElementRef<HTMLDialogElement>;

	shipping_addresses: any[] = [];

	selected_shipping_address_id: number | string = 'new';

	new_shipping_address: any = {};

	order_id: number | null = null;
	selected_user_id: number | null = null;

	public cart_items: any[] = [ ];
	total: number = 0;
	total_qty:number = 0;

	ngOnInit() {
		this.fetchAddresses();
		if (!this.re_admin()) {
			this.selected_user_id = this.rest.ecommerce_user.id;
		}
		this.fetchCartItems2();
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
				item_info.price = item_info.prices.find((price:any)=>true);
				return {...cart_item, ...item_info, image_url};
			});

			this.updateTotal();

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

	public fetchCartItems2()
	{
		let cart_items = this.rest.getCartItems();

		if (cart_items.length === 0) {
			this.cart_items = [];
			return;
		}

		let item_ids = cart_items.map(item => item.item_id).join(',');

		let params = this.rest.getUrlParams({ 'id,': item_ids })

		Promise.all([ cart_items, this.rest.getItems(params) ])
		.then(([ cart_items, response ]) =>
		{
			console.log(cart_items);
			let item_info_list:any[] = response.data.map((item_info:any) =>
			{
				console.log(item_info);
				item_info.price = item_info.prices.find((price:any)=>true);
				let cart_item = cart_items.find((item) => item.item_id === item_info.item.id);
				console.log('c+item',cart_item, item_info);
				let image_url = item_info.item.image_id ? this.rest.base_url + '/image.php?id=' + item_info.item.image_id : null;
				return {...cart_item, ...item_info, image_url};
			});
			console.log(item_info_list);

			const ecommerce_item_params = this.rest.getUrlParams({ 'item_id,': item_ids, ecommerce_id: this.rest.ecommerce.id });

			return Promise.all([ item_info_list, this.rest.getEcommerceItems(ecommerce_item_params) ]);
		})
		.then(([ cart_items, ecommerce_items_response ]) =>
		{
			cart_items.forEach((cart_item:any) => {
				const ecommerce_item = ecommerce_items_response.data.find((ei:any) => ei.item_id === cart_item.item_id);
				if (ecommerce_item) {
					cart_item.ecommerce_item = ecommerce_item;
				}
			});
			this.cart_items = cart_items;
			this.updateTotal();
		})
	}

	updateTotal()
	{
		this.total = this.cart_items.reduce((total, item) =>
		{
			console.log( item);
			let price = item?.prices?.find((price:any)=>
			{
				return true;
			});

			const quantity = item.qty || 0;
			return total + (quantity * (price?.price || 0));
		}, 0);

		this.total_qty = this.cart_items.reduce((total, item) =>
		{
			const quantity = item.qty || 0;
			return total + quantity;
		}, 0);
	}


	onUserSelected(user: any) {
		this.selected_user_id = user.id;
	}

	re_admin() {
		return this.rest.ecommerce_user.type == 'ECOMMERCE_ADMIN' || this.rest.ecommerce_user.type == 'ROLE_ADMIN';
	}

	async fetchAddresses() {
		try {
			const response = await this.rest.get('/address.php', { user_id: this.rest.ecommerce_user.id, type: 'SHIPPING' });
			this.shipping_addresses = response.data;
		} catch (error) {
			this.showError(error);
		}
	}

	placeOrder() {
		if (this.confirmDialog) {
			this.confirmDialog.nativeElement.showModal();
		}
	}

	closeConfirmDialog() {
		if (this.confirmDialog) {
			this.confirmDialog.nativeElement.close();
		}
	}

	async createOrder() {
		this.is_loading = true;
		try {
			let shipping_address_id = this.selected_shipping_address_id;

			if (shipping_address_id === 'new') {
				const response = await this.rest.post('/address.php', { ...this.new_shipping_address, user_id: this.rest.ecommerce_user.id, type: 'SHIPPING' });
				shipping_address_id = response.address.id;
			}

			let ecommerce = this.rest.ecommerce;
			let cart_items = this.rest.getCartItems();
			let x = 0;

			let order_info = {
				'order': {
					ecommerce_user_id: this.selected_user_id,
					store_id: ecommerce.store_id,
					shipping_address_id: shipping_address_id
				},
				'items': cart_items.map(item => ({
					order_item: {
						'item_id': item.item_id,
						'qty': item.qty,
						'item_group': ++x,
					}
				})),
			};

			const order_response = await fetch(this.rest.base_url + '/order_info.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Authorization': 'Bearer ' + this.rest.bearer
				},
				credentials: 'include',
				body: JSON.stringify(order_info)
			});

			if (order_response.status == 200) {
				const response = await order_response.json();
				this.order_id = response.order_id;
				this.closeConfirmDialog();
				if (this.confirmDialog2) {
					this.confirmDialog2.nativeElement.showModal();
				}
			} else {
				throw 'Ocurrio un error al crear el pedido'
			}
		} catch (error) {
			this.is_loading = false
			this.showError(error)
			this.closeConfirmDialog();
		}
	}

	closeConfirmDialog2() {
		if (this.confirmDialog2) {
			this.confirmDialog2.nativeElement.close();
			this.rest.clearCart();
			this.router.navigate(['/main']);
		}
	}
}

