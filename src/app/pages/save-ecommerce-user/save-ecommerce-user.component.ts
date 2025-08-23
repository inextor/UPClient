import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { EcommerceUserInfo, User, Ecommerce } from '../../models/RestModels';
import { GetEmpty } from '../../models/GetEmpty';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { BaseComponent } from '../base/base.component';

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
		this.rest.saveEcommerceUserInfo(this.ecommerce_user_info)
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
			ecommerce_user: GetEmpty.ecommerce_user()
		};
	}

	getEcommerceUserInfo(id:any): Promise<EcommerceUserInfo> {
		return id
			? this.rest.getEcommerceUserInfo(id)
			: Promise.resolve(this.getEmptyEcommerceUserInfo());
	}
}