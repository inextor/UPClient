import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-confirm-order',
	standalone: true,
	imports: [HeaderComponent, FormsModule, CommonModule],
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
	users: any[] = [];
	selected_user_id: number | null = null;

	ngOnInit() {
		this.fetchAddresses();
		if (this.re_admin()) {
			this.fetchUsers();
		} else {
			this.selected_user_id = this.rest.ecommerce_user.id;
		}
	}

	re_admin() {
		return this.rest.ecommerce_user.type == 'ECOMMERCE_ADMIN' || this.rest.ecommerce_user.type == 'ROLE_ADMIN';
	}

	async fetchUsers() {
		try {
			const response = await this.rest.get('/ecommerce_user.php', { limit: 999999 });
			this.users = response.data;
			this.selected_user_id = this.rest.ecommerce_user.id;
		} catch (error) {
			this.showError(error);
		}
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
