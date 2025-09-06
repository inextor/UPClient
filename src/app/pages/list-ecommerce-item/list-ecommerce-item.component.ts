import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';
import { BaseComponent } from '../base/base.component';
import { Rest, RestResponse } from '../../services/Rest';
import { Profile } from '../../models/RestModels';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface EcommerItemProfileInfo{
	profile: any;
	ecommerce_item_profile: any;
}

interface EcommerItemRoleInfo{
	role: any;
	ecommerce_item_role: any;
}

@Component({
	selector: 'app-list-ecommerce-item',
	standalone: true,
	imports: [CommonModule, HeaderComponent, FormsModule, RouterLink],
	templateUrl: './list-ecommerce-item.component.html',
	styleUrls: ['./list-ecommerce-item.component.css']
})
export class ListEcommerceItemComponent extends BaseComponent implements OnInit {
	agregarProfileToEcommerceItem() {

	}

	c_item_info_list: any[] = [];
	selected_item: any = null;
	all_roles: any[] = [];
	selected_role_id: number | null = null;
	selected_item_roles: any[] = [];
    ecommerce_item_profile_info_list: EcommerItemProfileInfo[] = [];
    new_profile_name: string = '';
	rest_profile: Rest<Profile,Profile> = new Rest(this.rest,this.rest.base_url+'/profile.php');
    selected_profile_id: any;
	profile_id: number = 0;

	profile_list:Profile[] = [];

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.profile_id = Number(params.get('profile_id'));
			this.obtenerArticulos();
			this.obtenerProfiles();
		});
	}

	obtenerArticulos(): void {
		if (this.profile_id) {
			this.rest.getEcommerceItemProfiles({ profile_id: this.profile_id, limit: 99999 })
				.then((response:RestResponse<any>) => {
					const ecommerce_item_ids = response.data.map((item: any) => item.ecommerce_item_id);
					if (ecommerce_item_ids.length === 0) {
						const emptyResponse: RestResponse<any> = { total: 0, data: [] };
						return Promise.resolve(emptyResponse);
					}
					return this.rest.getEcommerceItems({ 'id,': ecommerce_item_ids.join(','), limit: 99999 });
				})
				.then((response:RestResponse<any>) => {
					const item_ids = response.data.map((item: any) => item.item_id);
					if (item_ids.length === 0) {
						this.c_item_info_list = [];
						const emptyResponse: RestResponse<any> = { total: 0, data: [] };
						return Promise.resolve(emptyResponse);
					}
					return this.rest.getItems({ 'id,': item_ids.join(','), limit: 99999 });
				})
				.then((response:RestResponse<any>) => {
					this.c_item_info_list = response.data.map((item_info: any) => {
						return { ...item_info, ecommerce_item: item_info };
					});
				})
				.catch(error => {
					this.showError(error);
				});
		} else {
			let all_item_info: any[] = [];
			let all_ecommerce_items: any[] = [];

			this.rest.getItems({}) // Get all item_info
				.then(item_info_response => {
					all_item_info = item_info_response.data;

					const item_info_ids = all_item_info.map(item_info => item_info.item.id);
					const id_string = item_info_ids.join(',');

					return Promise.all([this.rest.getEcommerceItems({ 'item_id,': id_string, limit: 99999 }), Promise.resolve(all_item_info)]); // Then get all ecommerce_items
				})
				.then(([ecommerce_items_response, all_item_info]) => {
					all_ecommerce_items = ecommerce_items_response.data;

					this.c_item_info_list = all_item_info.map(item_info => {
						const matching_ecommerce_item = all_ecommerce_items.find(ec_item => ec_item.item_id === item_info.item.id);
						return { ...item_info, ecommerce_item: matching_ecommerce_item || null };
					});
				})
				.catch(error => {
					this.showError(error);
				});
		}
	}

	obtenerProfiles(): void {
		this.rest_profile.search({limit:99999})
		.then((response:RestResponse<Profile>) => {
			this.profile_list = response.data;
		})
		.catch((error:any) =>
		{
			this.showError(error);
		});
	}

	abrirModalProfiles(item: any): void
	{
		this.selected_item = item;
		this.rest.get('/ecommerce_item_profile.php', { ecommerce_item_id: item.ecommerce_item.id })
			.then((response:any) =>
			{
				let profile_ids = response.data.map((ecommerce_item_profile:any) => ecommerce_item_profile.profile_id);
				return Promise.all([this.rest_profile.search({limit:99999}), Promise.resolve(response.data)]);
			})
			.then(([profiles_response, ecommerce_item_profiles]:[any,any]) =>
			{
				this.profile_list = profiles_response.data;
				let ecommerItemProfilesInfo: EcommerItemProfileInfo[] = ecommerce_item_profiles.map((ecommerce_item_profile:any) =>
				{
					return {
						profile: profiles_response.data.find((profile:any) => profile.id === ecommerce_item_profile.profile_id),
						ecommerce_item_profile: ecommerce_item_profile
					};
				});
				this.ecommerce_item_profile_info_list = ecommerItemProfilesInfo;
			})
			.catch(error =>
			{
				this.showError(error);
			});
	}

		cerrarModalProfiles(): void {
		this.selected_item = null;
		this.selected_profile_id = null;
		this.selected_item_roles = [];
        this.new_profile_name = '';
	}

	onAddProfile(profile_name: string): void
	{
	}

	async agregarProfileArticulo(): Promise<void> {
        if (!this.selected_item || !this.new_profile_name) {
            this.showError('Debe seleccionar un artículo y proporcionar un nombre de perfil.');
            return;
        }

        let profile_id_to_use: number;
        const existing_profile = this.profile_list.find(profile => profile.name === this.new_profile_name);

        if (existing_profile) {
            profile_id_to_use = existing_profile.id;
        } else {
            try {
                const new_profile_response = await this.rest_profile.postOne({ name: this.new_profile_name, ecommerce_id: this.rest.ecommerce.id });
                profile_id_to_use = new_profile_response.id;
                this.profile_list.push(new_profile_response); // Add new profile to the list
            } catch (error) {
                this.showError('Error al crear el nuevo perfil: ' + this.getErrorMessage(error));
                return;
            }
        }

        const data = {
            ecommerce_item_id: this.selected_item.ecommerce_item.id,
            profile_id: profile_id_to_use
        };

        try {
            await this.rest.post('/ecommerce_item_profile.php', data);
            this.showSuccess('Perfil asignado correctamente.');
            this.abrirModalProfiles(this.selected_item); // Refresh profiles in modal
            this.new_profile_name = ''; // Clear the input field
        } catch (error) {
            this.showError('Error al asignar el perfil al artículo: ' + this.getErrorMessage(error));
        }
    }

	eliminarProfileDeArticulo(profile_info: EcommerItemProfileInfo) {
		this.rest.delete('/ecommerce_item_profile.php?id=' + profile_info.ecommerce_item_profile.id).then(() => {
			this.showSuccess('Perfil eliminado correctamente.');
			this.abrirModalProfiles(this.selected_item);
		})
		.catch((error:any) =>
		{
			this.showError(error);
		});
	}
}
