import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';
import { BaseComponent } from '../base/base.component';

interface EcommerItemRoleInfo{
	role: any;
	ecommerce_item_role: any;
}

@Component({
	selector: 'app-list-ecommerce-item',
	standalone: true,
	imports: [CommonModule, HeaderComponent, FormsModule],
	templateUrl: './list-ecommerce-item.component.html',
	styleUrls: ['./list-ecommerce-item.component.css']
})
export class ListEcommerceItemComponent extends BaseComponent implements OnInit {

	c_item_info_list: any[] = [];
	selected_item: any = null;
	all_roles: any[] = [];
	selected_role_id: number | null = null;
	selected_item_roles: any[] = [];
    ecommerce_item_role_info_list: EcommerItemRoleInfo[] = [];


	ngOnInit(): void {
		this.fetchItems();
		this.fetchRoles();
	}

	fetchItems(): void {
		let all_item_info: any[] = [];
		let all_ecommerce_items: any[] = [];

		this.rest.getItems({}) // Get all item_info
		.then(item_info_response =>
		{
			all_item_info = item_info_response.data;

			//GEMINI ONLY HERE PUT TH F CODE
			const item_info_ids = all_item_info.map(item_info => item_info.item.id);
			const id_string = item_info_ids.join(',');

			return Promise.all([this.rest.getEcommerceItems({'item_id,':id_string,limit:99999}), Promise.resolve(all_item_info)]); // Then get all ecommerce_items
		})
		.then(([ecommerce_items_response, all_item_info]) =>
		{
			all_ecommerce_items = ecommerce_items_response.data;

			this.c_item_info_list = all_item_info.map(item_info =>
			{
				const matching_ecommerce_item = all_ecommerce_items.find(ec_item => ec_item.item_id === item_info.item.id);
				return { ...item_info, ecommerce_item: matching_ecommerce_item || null };
			});
		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});
	}

	fetchRoles(): void {
		this.rest.getRoles({}).then(response => {
			this.all_roles = response.data;
		});
	}

	openRoleModal(item: any): void
	{
		this.selected_item = item;
		this.rest.getEcommerceItemRoles({ ecommerce_item_id: item.ecommerce_item.id })
			.then(response =>
			{
				let role_ids = response.data.map(ecommerce_item_role => ecommerce_item_role.role_id);
				return Promise.all([this.rest.getRoles({'ids':role_ids.join(',')}), Promise.resolve(response.data)]);
			})
			.then(([roles_response, ecommerce_item_roles]) =>
			{

				let ecommerItemRolesInfo: EcommerItemRoleInfo[] = ecommerce_item_roles.map(ecommerce_item_role =>
				{
					return {
						role: roles_response.data.find(role => role.id === ecommerce_item_role.role_id),
						ecommerce_item_role: ecommerce_item_role
					};
				});
				this.ecommerce_item_role_info_list = ecommerItemRolesInfo;
			})
			.catch(error =>
			{
				console.error('Error fetching item roles:', error);
			});
	}

	closeRoleModal(): void {
		this.selected_item = null;
		this.selected_role_id = null;
		this.selected_item_roles = [];
	}

	addRoleToItem(): void {
		if (this.selected_item && this.selected_role_id) {
			const data = {
				ecommerce_item_id: this.selected_item.ecommerce_item.id,
				role_id: this.selected_role_id
			};
			this.rest.post('/ecommerce_item_role.php', data).then(() => {
				// Optionally, refresh the item's roles here
				this.closeRoleModal();
			});
		}
	}
	removeRoleFromItem(_t39: EcommerItemRoleInfo) {
		this.rest.deleteEcommerceItemRole(_t39.ecommerce_item_role.id).then(() => {
			// Optionally, refresh the item's roles here
		})
		.catch((error:any) =>
		{
			this.showError(error);
		});

	}
}
