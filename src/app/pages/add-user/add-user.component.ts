import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';
import { GetEmpty } from '../../models/GetEmpty';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { Rest } from '../../services/Rest';
import { User } from '../../models/rest/User';
import { EcommerceUserInfo } from '../../models/models';
import { Ecommerce_User } from '../../models/rest/Ecommerce_User';

@Component({
	selector: 'app-add-user',
	standalone: true,
	imports: [FormsModule, CommonModule, HeaderComponent],
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css']
})
export class AddUserComponent extends BaseComponent implements OnInit {
	user: any = GetEmpty.user();
	address: any = GetEmpty.address();
	profiles: any[] = [];
	ecommerce_user:Ecommerce_User = GetEmpty.ecommerce_user();

	rest_ecommerce_user: Rest<Ecommerce_User, EcommerceUserInfo> = new Rest(this.rest, this.rest.base_url + '/ecommerce_user_info.php');

	ngOnInit(): void {
		this.fetchProfiles();
	}

	fetchProfiles() {
		this.rest.get('/profile.php', {}).then((response: any) => {
			this.profiles = response.data;
		}).catch(error => {
			this.showError(error);
		});
	}

	onSubmit() {
		this.is_loading = true;

		let ecommerce_user_info: EcommerceUserInfo = {
			user: this.user,
			address: this.address,
			ecommerce_user: this.ecommerce_user
		};

		this.rest_ecommerce_user.create( ecommerce_user_info )
		.then((_response:EcommerceUserInfo) => {
			this.is_loading = false;
			this.router.navigate(['/list-ecommerce-user']);
		}).catch(error => {
			this.is_loading = false;
			this.showError(error);
		});
	}
}
