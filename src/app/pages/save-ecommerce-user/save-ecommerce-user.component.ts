import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { GetEmpty } from '../../models/GetEmpty';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { BaseComponent } from '../base/base.component';
import { Ecommerce } from '../../models/rest/Ecommerce';
import { EcommerceUserInfo } from '../../models/models';
import { Rest } from '../../services/Rest';
import { Ecommerce_User } from '../../models/rest/Ecommerce_User';

@Component({
	selector: 'app-save-ecommerce-user',
	standalone: true,
	imports: [CommonModule, FormsModule, HeaderComponent],
	templateUrl: './save-ecommerce-user.component.html',
	styleUrls: ['./save-ecommerce-user.component.css']
})
export class SaveEcommerceUserComponent extends BaseComponent implements OnInit {

	ecommerces: Ecommerce[] = [];

	types: string[] = ['ECOMMERCE_ADMIN','ROLE_USER', 'ROLE_ADMIN'];
    ecommerce_user_info: EcommerceUserInfo = this.getEmptyEcommerceUserInfo();
    rest_ecommerce_user: Rest<Ecommerce_User, EcommerceUserInfo> = new Rest(this.rest, this.rest.base_url + '/ecommerce_user_info.php');

	ngOnInit(): void {
		this.is_loading = true;

		this.route.paramMap.subscribe(params => {
			this.getEcommerceUserInfo(params.get('id'))
			.then(response => {
				this.ecommerce_user_info = response;
				this.is_loading = false;
			})
			.catch(error=>{
				this.showError(error);
				this.is_loading = false;
			});
		});
	}

	save(): void {
		this.is_loading = true;
		this.rest_ecommerce_user.create(this.ecommerce_user_info)
		.then(response => {
			this.is_loading = false;
			this.router.navigate(['/list-ecommerce-user']);
		})
		.catch(error=>{
			this.showError(error);
			this.is_loading = false;
		});
	}

	getEmptyEcommerceUserInfo(): EcommerceUserInfo {
		return {
			user: GetEmpty.user(),
			address: GetEmpty.address(),
			ecommerce_user: GetEmpty.ecommerce_user()
		};
	}

	getEcommerceUserInfo(id:any): Promise<EcommerceUserInfo> {
		return id
			? this.rest.getEcommerceUserInfo(id)
			: Promise.resolve(this.getEmptyEcommerceUserInfo());
	}
}
