import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RestService } from '../../services/rest.service';
import { User } from '../../models/RestModels';
import { RouterModule } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { EcommerceUserInfo } from '../../models/RestModels';

@Component({
	selector: 'app-list-ecommerce-user',
	standalone: true,
	imports: [CommonModule, HeaderComponent, RouterModule],
	templateUrl: './list-ecommerce-user.component.html',
	styleUrls: ['./list-ecommerce-user.component.css']
})
export class ListEcommerceUserComponent extends BaseComponent implements OnInit
{
	ecommerce_user_info_list: EcommerceUserInfo[] = [];

	ngOnInit(): void {
		this.fetchUsers();
	}

	fetchUsers(): void {
		this.rest.get('/ecommerce_user_info.php',{}).then(response => {
			this.ecommerce_user_info_list = response.data;
		}).catch(error => this.showError(error));
	}

	deleteUser(userId: number): void {
		this.is_loading = true;
		this.rest.delete('/ecommerce_user.php', { id: userId }).then(() => {
			this.fetchUsers();
			this.is_loading = false;
		}).catch(error => {
			this.showError(error);
			this.is_loading = false;
		});
	}
}
